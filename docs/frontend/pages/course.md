## Course Page Specification (app/courses/[slug]/page.tsx)

### 1. Page Goals
*   **Detailed Information:** Provide a comprehensive and clear breakdown of course syllabuses, target audiences, and pricing.
*   **Conversion Focus:** Strongly highlight the "Đăng ký tư vấn" CTA alongside clear course duration and pricing structures.
*   **Dynamic Scalability:** Utilize dynamic routing (`[slug]`) with centralized data structures to easily update or add new courses without modifying the UI layout.

### 2. Layout Structure (Top to Bottom)

#### 2.1. Course Hero
*   **Purpose:** Introduce the course level, target input/output scores, and duration immediately.
*   **Content:**
    *   Badges for "Đầu vào" (Input), "Đầu ra" (Output), and Course Duration.
    *   Course Title and Audience summary.
    *   Primary CTA ("Đăng ký tư vấn") and Secondary CTA ("Xem lịch khai giảng").
*   **Animation:** Standard Framer Motion `initial`/`animate` entrance animations (fades and Y-axis slides).
*   **Styling:** Matches the main homepage standard with large typography (`text-6xl`) and robust button styling (`px-8 py-4 text-lg`).

#### 2.2. Course Syllabus (Nội dung khóa học)
*   **Content:** Detailed breakdown of the curriculum categorized by skills (Speaking, Listening, Reading, Writing, etc.).
*   **Interaction:** Uses `shadcn/ui` Tabs component to organize the content interactively, keeping the vertical height of the page manageable.
*   **Animation:** The main section header uses the `ScrollRevealTitle` component for the signature character-by-character reveal.

#### 2.3. Target Audience & Homework/Testing
*   **Layout:** A two-column grid (`lg:col-span-5` for Audience, `lg:col-span-7` for Testing/Homework) using clean, borderless Cards with glassmorphic elements and large Lucide icons in the background.
*   **Animation:** Wrapped in `ScrollReveal` components for smooth, scroll-scrubbed entrance transitions.

#### 2.4. Tuition (Học phí)
*   **Layout:** Full-width grid displaying 3 pricing tiers: Lớp Đại Trà Offline, Lớp Đại Trà Online, and Lớp Kèm Nhóm Nhỏ. Premium amber styling applied to the "Nhóm Nhỏ" tier to highlight it.
*   **Animation:** Uses `ScrollReveal` with a slight delay for a staggered entrance effect following the Audience and Testing cards.

### 3. Data Architecture
*   **Source of Truth:** All course data (Syllabus, Scores, Tuition, Duration, etc.) is structurally parsed and strongly typed in `frontend/data/courses.ts`.
*   **Dynamic Generation:** `generateStaticParams()` is utilized to pre-render individual static pages for `beginner`, `foundation`, `preparation`, `intensive`, and `graduation` paths, maximizing SEO performance and load speeds.
