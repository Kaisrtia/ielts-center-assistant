# English Center Assistant

Glossary of domain terms for the English Center marketing website.

## Language

**Giảng viên**:
The canonical term for the people teaching the courses. It carries a highly professional and rigorous academic tone.
_Avoid_: Giáo viên, Teacher, Instructor

**Đăng ký tư vấn**:
The action and form for a prospective student submitting their information to receive advice or course placement.
_Avoid_: Lead generation form, Register for consultation, Form liên hệ

**Học viên tiềm năng**:
A prospective student who has shown interest or submitted a consultation request.
_Avoid_: Lead, Prospect, Khách hàng

**Học viên**:
The canonical term for our active or target audience in the UI. 
_Avoid_: Student, Candidate

**Cơ sở**:
The canonical term for physical branch locations.
_Avoid_: Branch, Campus, Center

**Hệ thống Mastery 3 Giai đoạn**:
The proprietary, branded name for our teaching methodology. Represents the visual timeline of pedagogical authority.
_Avoid_: Our Method, Teaching Approach

**Founder (Personal Brand)**:
The primary entity driving institutional trust. The founder's authority is the core hook for user acquisition.

## UI / UX Rules

**Scroll Animation**:
To ensure a consistent premium feel across the whole website, all scroll-triggered entrance animations MUST use the standard `ScrollReveal` wrapper component (`frontend/components/ScrollReveal.tsx`) rather than independent `motion.div` implementations with `whileInView`. The `ScrollReveal` component scrubs opacity and Y offset directly against the viewport scroll progress.

For main section headers, ALWAYS use the `ScrollRevealTitle` component (`frontend/components/motion/scroll-reveal-title.tsx`) instead of standard `<h2>` or `<h3>` tags wrapped in `ScrollReveal`. This ensures the signature staggered character-reveal animation is applied universally to all section titles.
