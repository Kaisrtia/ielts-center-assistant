---
name: selfhosted-monolith-deploy
description: >-
  Set up, configure, and automate production deployments for monolithic web applications
  (Frontend, Backend, Database, Redis, Caddy reverse proxy) on a self-hosted VPS using
  Docker Compose and GitHub Actions self-hosted runners.
---

# Self-Hosted Monolith Deployment Skill

Use this skill whenever you need to configure or automate the production deployment of any monolithic web application to a self-hosted Linux VPS.

This skill provides a standardized, battle-tested deployment pattern based on:
1. **Docker Compose** for container orchestration, health monitoring, and isolated execution.
2. **Caddy** for automatic HTTPS (Let's Encrypt / ZeroSSL) and reverse proxying without manual certificate maintenance.
3. **GitHub Actions Self-Hosted Runner** on the VPS for secure, zero-cloud-cost CI/CD with no exposed SSH ports.
4. **Isolated Migration Profile (`--profile tools`)** to guarantee database schemas are updated before application containers restart.

---

## Deployment Architecture Overview

```
                      Internet (Port 80 / 443)
                                 │
                                 ▼
                     ┌───────────────────────┐
                     │   Caddy Reverse Proxy │ (Automatic SSL, gzip/zstd)
                     └───────────┬───────────┘
                                 │
                    ┌────────────┴────────────┐
                    ▼                         ▼
         [Unified Monolith]       [Separated Monolith]
         ┌─────────────────┐      ┌──────────┐   ┌─────────┐
         │ app (UI + API)  │  OR  │ frontend │   │ backend │
         └────────┬────────┘      └──────────┘   └───┬─────┘
                  │                                  │
                  └─────────────────┬────────────────┘
                                    │
                       ┌────────────┴────────────┐
                       ▼                         ▼
               ┌───────────────┐         ┌───────────────┐
               │  Database     │         │  Cache/Queue  │
               │ (Postgres/DB) │         │ (Redis/KeyDB) │
               └───────────────┘         └───────────────┘
```

---

## AI Agent Runbook: Step-by-Step Procedure

When requested to configure or automate deployment for a monolith project, execute these steps:

### Phase 1: Inspect Codebase Architecture
Examine the repository to determine:
1. **Monolith Structure**:
   - **Unified**: Single codebase serving both frontend and backend (e.g., Next.js, Remix, Django, Rails, Laravel, Go, Java Spring).
   - **Separated**: Split directories in the same repo (e.g., `./client` & `./server`, `./frontend` & `./backend`).
2. **Runtime & Dockerfile**:
   - Check if a `Dockerfile` exists at root or in subdirectories. If missing, create an optimized multi-stage production Dockerfile for the target runtime.
3. **Database & Cache Requirements**:
   - Identify the database engine (PostgreSQL, MySQL, MariaDB, etc.).
   - Check if caching or background job workers require Redis.
4. **Migration & Seed Command**:
   - Identify how migrations are run in the project (e.g., `npx prisma migrate deploy`, `python manage.py migrate`, `php artisan migrate --force`, `bundle exec rails db:migrate`, `alembic upgrade head`).

---

### Phase 2: Generate Production Docker Compose
Create `docker-compose.prod.yml` at the project root using:
- **Reference Template**: [docker-compose.prod.yml](./resources/templates/docker-compose.prod.yml)

**Key Rules**:
- Name containers using `${COMPOSE_PROJECT_NAME:-app}-<service>`.
- Use `depends_on` with `condition: service_healthy` for services dependent on the database or cache.
- Define a `migration` service under `profiles: ["tools"]`. This allows migrations to run on-demand in a throwaway container without running persistently in the background:
  ```yaml
  migration:
    build:
      context: <APP_OR_BACKEND_PATH>
      dockerfile: Dockerfile
    profiles:
      - tools
    command: <PROJECT_MIGRATION_COMMAND>
  ```
- Use persistent named volumes for database storage, Redis data, and Caddy certificates (`caddy_data`, `caddy_config`).

---

### Phase 3: Configure Caddyfile (Reverse Proxy & SSL)
Create `Caddyfile` at the project root using:
- **Reference Template**: [Caddyfile](./resources/templates/Caddyfile)

**Key Rules**:
- Use `{$DOMAIN:localhost}` placeholder for the target domain.
- For **Unified Monolith**: Proxy all traffic to the single `app` service.
- For **Separated Monolith**: Route `/api/*` to the `backend` service and all other routes to the `frontend` service.
- Include standard security headers (`Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`).

---

### Phase 4: Configure GitHub Actions CI/CD Workflow
Create `.github/workflows/deploy.yml` using:
- **Reference Template**: [deploy.yml](./resources/templates/deploy.yml)

**Key Rules**:
- Set `runs-on: self-hosted`.
- Ensure sequential deployment execution:
  1. `git pull origin <BRANCH>`
  2. Run isolated migrations:
     `docker compose -f docker-compose.prod.yml --profile tools run --rm migration`
  3. Rebuild updated containers with minimal downtime:
     `docker compose -f docker-compose.prod.yml up -d --build`
  4. Prune unused images:
     `docker image prune -f`

---

### Phase 5: Generate Environment Variables Template
Create `.env.production.example` using:
- **Reference Template**: [.env.production.example](./resources/templates/.env.production.example)

Include placeholders for all environment variables discovered in Phase 1, clearly documenting which secrets must be set by the user on their VPS.

---

### Phase 6: Guide User on Server Setup
Provide instructions for preparing the VPS:
- **Reference Guide**: [vps-setup-guide.md](./references/vps-setup-guide.md)

Checklist:
1. Docker and Docker Compose v2 installed.
2. Firewall allows ports `80` and `443`.
3. Repo cloned to `~/apps/<REPO_NAME>`.
4. Production `.env` configured on the VPS.
5. GitHub Actions self-hosted runner registered and running as a systemd service.

---

## Verification & Troubleshooting

1. **Syntax & Config Check**:
   ```bash
   docker compose -f docker-compose.prod.yml config
   ```
2. **Database Health**:
   ```bash
   docker compose -f docker-compose.prod.yml ps
   ```
3. **SSL Certificate Issuance**:
   ```bash
   docker compose -f docker-compose.prod.yml logs caddy | grep -i "certificate obtained"
   ```
4. **Runner Connectivity**:
   - Verify GitHub repo: `Settings` $\rightarrow$ `Actions` $\rightarrow$ `Runners` shows the runner as **Idle** (green).
