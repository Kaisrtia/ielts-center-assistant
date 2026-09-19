# Homepage Specification

## 1. Page Goals
*   **Establish Trust:** Create a professional first impression and build credibility immediately with a premium, dynamic 3D interface.
*   **Drive Conversion:** Guide users toward primary conversion funnels (Course details, Lead generation forms).
*   **SEO Optimization:** Target primary keywords related to "IELTS center" via optimized on-page content and structure.

## 2. Layout Structure (Top to Bottom)

### 2.1. Navigation Bar (Header)
*   **Content:** 
    *   Center logo: "The English Academy."
    *   Navigation links: Trang chủ, Về chúng tôi, Khóa học, Cảm nhận học viên, Blog, Trang học viên.
    *   Action Buttons: Theme Toggle (Dark/Light), "Đăng nhập" (Login - Ghost Button), "Đăng kí" (Register - Solid Button).
*   **Interaction:** 
    *   Fixed header: Locked to the top of the viewport with a `backdrop-blur` and border effect.
    *   Responsive Layout: Center menu is hidden on `md` tablet views to prevent horizontal overflow, relying on fluid gap and font scaling (`xl` breakpoints) to align beautifully on large displays. Links never wrap.
*   **Technical:** Client Component (`Navbar.tsx`) using `framer-motion` for theme toggle interactions.

### 2.2. Hero Section
*   **Purpose:** Deliver the core Value Proposition within the first 3 seconds.
*   **Content:**
    *   Headline: "Giảng dạy chuyên sâu cho Thành công toàn cầu."
    *   Sub-headline: Introduction to expert-led IELTS strategies.
    *   Primary CTAs: "Đăng Ký Tư Vấn" (Register for Consultation) and "Khám Phá Phương Pháp" (Discover Methodology).
    *   Visuals: Floating card grid showing various aspects of student life, teaching, and success.
*   **Animation:** Block-level staggered fade-ins for text and staggered floating effects for the image grid using Framer Motion.

### 2.3. Achievements & Stats
*   **Content:** Key metrics proving credibility (e.g., 98% Vượt Target, 15k+ Học Viên, 25+ Năm Kinh Nghiệm).
*   **Animation:** 
    *   Title uses `ScrollRevealTitle` for deterministic, character-by-character typewriter entrance animation with a dynamic SVG zigzag underline and Lucide icons.
    *   Number Counter effect counting up from 0 when scrolled into view.

### 2.4. Teachers & Instructors
*   **Content:** Instructor profiles showcasing names, IELTS scores (e.g., 8.5, 9.0), and pedagogical specializations.
*   **Interaction & Layout:** 
    *   **3D Coverflow Carousel**: A custom Framer Motion interactive 3D slider replacing standard horizontal carousels. Users can drag/swipe left and right.
    *   **Side-by-Side Detail Panel**: On active selection, detailed instructor information appears dynamically next to the 3D stack (or stacked vertically on mobile for tight spacing).
*   **Technical:** Client Component (`Instructors.tsx`) heavily leveraging Framer Motion for physics-based springs, drag gesture calculations, and `animatePresence` transitions.

### 2.5. Courses Overview
*   **Content:** Flagship courses (IELTS Foundation, Intensive, Masterclass) presented in premium glassmorphic cards.
*   **Animation:** Staggered vertical scroll reveals. Title uses `ScrollRevealTitle` character-by-character typography animation.

### 2.6. Student Feedback (Testimonials)
*   **Content:** Real student reviews and band score achievements.
*   **Interaction:** 2-column or masonry-style layout.
*   **Animation:** Titles and cards fade up smoothly using global `ScrollReveal` wrappers.

### 2.7. Blog / Resources
*   **Content:** 3 featured articles with tags, publication dates, and reading times.
*   **Animation:** Hover effects to zoom thumbnails. Typography entrance animations on the main headers.

### 2.8. Global Layout System
*   **Density & Padding:** The homepage utilizes a highly compact, premium layout system. Vertical padding between sections is kept tight (`py-8` to `py-12`) specifically designed to prevent excessive whitespace and prioritize above-the-fold content on mobile devices.
*   **Typographic Animation:** A custom `ScrollRevealTitle.tsx` engine controls the main headers across sections (Stats, Instructors, Courses, etc.), splitting text to animate sequentially by character while dynamically drawing a zigzag SVG marker underline (`lucide-react` icons complement the graphics).

## 3. SEO & Schema Markup
*   **Meta Tags:** Standard Next.js Metadata API utilized for titles and descriptions.
*   **Client/Server Boundaries:** Heavy interactive sections (Hero, Instructors, Titles) isolated as `'use client'` while container components act as SEO-friendly wrappers.