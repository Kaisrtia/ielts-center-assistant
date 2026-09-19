# About Page Specification

## 1. Page Goals & SEO Strategy
* **Objective:** Establish massive personal authority for the Founder and clearly articulate the proprietary "Hệ thống Mastery 3 Giai đoạn" to build trust and drive conversions for "Học viên".
* **SEO Focus:** Target branded keywords and localized searches to capture users specifically researching the center's reputation, founder authority, and physical locations.
* **Schema Markup:** Implement `AboutPage` and `EducationalOrganization` JSON-LD to accurately map the branch network for search engine crawlers.

## 2. Layout Structure (Top to Bottom)

### 2.1. Hero Section
*   **Content:** A dynamic, slightly parallax background (using a high-quality classroom video or image) instead of a plain static image.
*   **Typography:** A strong H1 overlay with the core mission statement focused on empowering "Học viên".

### 2.2. Founder Introduction (Personal Brand Focus)
*   *Positioned immediately after the Hero to leverage personal authority.*
*   **Visuals:** A transparent PNG of the founder overlapping section boundaries for a premium 3D "pop-out" effect.
*   **Content:** Lead with the single most impressive metric as a massive typography watermark (e.g., "IELTS 9.0" or "10 Years Exp"). Include a biography highlighting academic achievements and the center's origin story.

### 2.3. Hệ thống Mastery 3 Giai đoạn (Teaching Methodology)
*   **Interaction:** A vertical, scroll-linked timeline component. As the user scrolls, a "glowing path" connects the stages sequentially.
*   **Content:** Breakdown of the proprietary learning approach, illustrating the pedagogical process without relying on heavy text blocks.

### 2.4. Mạng lưới Cơ sở (Branch Network)
*   **Visuals:** A clean "Bento Box" CSS grid of photo cards (avoiding embedded Google Maps for mobile performance).
*   **Interaction:** Each card contains a high-quality photo of the facility, address, hotline, and a "Chỉ đường" (Get Directions) button that opens Google Maps natively in a new tab.

## 3. Technical Implementation
* **Rendering Strategy:** Utilize Static Site Generation (SSG) for this route.
* **Media Optimization:** Lazy-load the facility image galleries and use the native Next.js image component for the founder portrait.
* **Animation:** Use Framer Motion for the scroll-linked glowing timeline and 3D pop-out effects.