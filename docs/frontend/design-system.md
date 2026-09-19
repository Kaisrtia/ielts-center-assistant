# Frontend Design System

This document outlines the core design tokens and components for the website, based on the "Clean Academic with Pop" aesthetic.

## Typography
- **Headings**: Serif font (`font-serif`) to convey a traditional, academic, and highly credible feel.
- **Body & Accents**: Sans-serif font (`font-sans`) for maximum readability, uppercase tracking for small labels, and modern contrast.

## Colors
- **Backgrounds**: `zinc-50` (`#fafafa`) or solid white for main surfaces, keeping the layout extremely clean and easy to scan.
- **Text (Neutral)**: `zinc-900` for primary text, `zinc-600` or `zinc-500` for secondary text.
- **Primary Action (Brand)**: `amber-500`. Used exclusively for primary Call to Action (CTA) buttons, important icons, and elements that need a vibrant "pop" against the academic background.

## Layout & Components
- **Buttons**: Slightly rounded (`rounded`), solid amber for primary actions, outlined or dark (`zinc-900`) for secondary actions.
- **Cards**: Minimal borders (`border-zinc-100`) with subtle drop shadows (`shadow-sm`) that elevate on hover (`hover:shadow-md`) to maintain the clean aesthetic without heavy visual clutter.

## Animation & Motion
Animations are crucial for making the clean academic interface feel alive and modern.
- **Micro-interactions**: Buttons and interactive cards should use `transition-all duration-300`. Hovering over a primary CTA should trigger a slight lift (`hover:-translate-y-1`) and increased shadow.
- **Page Entrances**: Content should elegantly fade or slide into view rather than appearing abruptly.
- **Data & Statistics**: Numbers and icons should use subtle hover animations (e.g., removing a grayscale filter, or slightly scaling up `group-hover:scale-110`).
