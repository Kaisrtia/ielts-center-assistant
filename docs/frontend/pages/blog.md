# Blog Page Specification

## 1. Page Goals
*   **Organic Traffic:** Build a comprehensive resource library to attract search engine traffic.
*   **Authority Building:** Increase on-site time and establish the center's credibility in IELTS training.
*   **Funnel Routing:** Seamlessly guide readers from educational content to course registration or consultation funnels.

## 2. Layout Structure & Features

### 2.1. Header Area & Smart Search
*   **Content:** A clear page title (e.g., "Resources", "IELTS Blog") and a prominent search input field.
*   **"Smart" Behavior:**
    *   **Debounce Search:** Automatically trigger the search API after the user stops typing for 300ms - 500ms, eliminating the need to press "Enter".
    *   **Auto-suggest (Optional):** Display a small dropdown with popular articles or keyword suggestions while typing.
    *   **URL Sync:** Update the URL query string (e.g., `?q=ielts+reading`) so users can share specific search results.

### 2.2. Category Filtering
*   **Content:** A horizontal menu with category tabs: `All` (Default), `IELTS Reading`, `IELTS Listening`, `IELTS Writing`, `Others`.
*   **Behavior:**
    *   Clicking a category updates the article grid (via Client-side filtering or Server-side fetching combined with URL parameters like `?category=reading`).
    *   The currently selected category must have a distinct Active state (highlighted) for clear UX.

### 2.3. Article List (Blog Grid)
*   **Content:** Displayed as a responsive grid (typically 3 columns on Desktop, 2 on Tablet, 1 on Mobile).
*   **Blog Card Structure:** Strictly adhere to a minimalist design, displaying only:
    *   **Cover Image:** High-quality thumbnail with a subtle scale-up (zoom) effect on hover.
    *   **Meta Data:** 
        *   Category badge.
        *   Article Title (H2 or H3), truncated with an ellipsis if it exceeds 2 lines.
        *   Publish Date & Author.
        *   (Optional) Estimated reading time.
*   **Interaction:** The entire card area (or image + title) should act as a clickable `<Link>` navigating to the detail page (`/blog/[slug]`).
*   **Pagination:** Implement a "Load More" button (Infinite Scroll) or traditional numbered pagination at the bottom of the grid.

## 3. Technical & SEO Requirements

*   **Rendering Strategy:** 
    *   Utilize **SSG (Static Site Generation)** combined with **ISR (Incremental Static Regeneration)** (e.g., `revalidate: 3600`) to pre-build articles into static files. This guarantees ultra-fast load times and optimal crawlability for Google bots.
    *   In the Next.js App Router, the Blog Grid can read `searchParams` directly within a Server Component to fetch data from the database, minimizing client-side JavaScript.
*   **Image Optimization:** All cover images inside the Blog Cards must utilize the Next.js `<Image>` component with `loading="lazy"` and explicitly defined aspect ratios to prevent Cumulative Layout Shift (CLS).