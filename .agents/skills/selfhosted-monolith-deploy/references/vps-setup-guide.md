# VPS Initial Setup Guide for Self-Hosted Monolith Deployments

This guide details how to prepare a clean Linux VPS (Ubuntu/Debian) for hosting monolithic Docker Compose applications with a GitHub Actions self-hosted runner.

---

## 1. System Requirements & Port Configuration

- **OS**: Ubuntu 22.04 LTS / 24.04 LTS or Debian 12.
- **Hardware**: Minimum 1–2 vCPUs, 2GB–4GB RAM (add 2GB–4GB swap space if needed).
- **Required Firewall Ports**:
  - `22/tcp` (SSH)
  - `80/tcp` (HTTP - required for ACME HTTP-01 challenge & Caddy HTTP->HTTPS redirect)
  - `443/tcp` (HTTPS - Caddy SSL traffic)

---

## 2. Server Hardening & Docker Installation

### 2.1 Update System & Configure Firewall (UFW)
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl wget git ufw htop

# Configure UFW
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### 2.2 Install Docker Engine & Docker Compose Plugin
```bash
# Add Docker's official GPG key and repository
sudo apt-get install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Verify installation
docker --version
docker compose version
```

---

## 3. Directory Structure & Project Clone

Adopt a clean, standardized folder structure for your hosted applications:

```bash
# Standard directory convention
mkdir -p ~/apps
cd ~/apps

# Clone repository
git clone https://github.com/<ORGANIZATION_OR_USER>/<REPOSITORY_NAME>.git
cd <REPOSITORY_NAME>

# Create production environment file
cp .env.production.example .env
nano .env
```

---

## 4. Install GitHub Actions Self-Hosted Runner

The self-hosted runner executes deployment jobs locally on your VPS whenever code is pushed.

### 4.1 Obtain Runner Token
1. In your GitHub repository, navigate to: `Settings` -> `Actions` -> `Runners` -> `New self-hosted runner`.
2. Select **OS: Linux**, **Architecture: x64**.

### 4.2 Download & Configure Runner
```bash
# Create dedicated runner directory
mkdir -p ~/actions-runner && cd ~/actions-runner

# Download runner package (use version shown in GitHub instructions)
curl -o actions-runner-linux-x64.tar.gz -L https://github.com/actions/runner/releases/download/v2.321.0/actions-runner-linux-x64-2.321.0.tar.gz
tar xzf ./actions-runner-linux-x64.tar.gz

# Configure runner (use URL and token provided in GitHub Settings)
./config.sh --url https://github.com/<ORGANIZATION_OR_USER>/<REPOSITORY_NAME> --token <YOUR_RUNNER_TOKEN>
```

### 4.3 Allow Runner User to Run Docker Without Sudo
```bash
sudo usermod -aG docker $USER
newgrp docker
```

### 4.4 Install Runner as a Systemd Service (Auto-starts on VPS boot)
```bash
cd ~/actions-runner
sudo ./svc.sh install
sudo ./svc.sh start
sudo ./svc.sh status
```

---

## 5. Routine Maintenance & Disk Hygiene

### Docker Image Pruning
Over time, continuous deployment accumulates old Docker build layers. The deployment workflow includes `docker image prune -f`, but periodic cleanup of unused volumes or builder cache can be run manually:
```bash
docker system prune -f
```

### Docker Log Limits
Prevent logs from consuming disk space by creating or editing `/etc/docker/daemon.json`:
```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "50m",
    "max-file": "3"
  }
}
```
Restart Docker after modifying:
```bash
sudo systemctl restart docker
```
