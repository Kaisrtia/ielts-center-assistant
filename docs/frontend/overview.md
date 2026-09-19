# Frontend Specification Overview — English Center Website

## 1. Purpose

This document defines the **high-level frontend direction** for an English center marketing website.

It is intentionally limited to shared product goals, UX principles, site scope, and cross-page frontend requirements.

> This document is an overview, not a page implementation specification.
> Individual pages, detailed UI structure, interactions, and technical decisions should be defined in separate specifications.

---

## 2. Product Context

### 2.1. Product Type

Marketing / informational website for an English center.

### 2.2. Target Users

The website may serve:

- Students and young learners seeking English courses.
- Adults seeking IELTS, TOEIC, or communication English.
- Parents looking for English programs for their children.
- Users discovering the center through search, social media, referrals, or advertising.

The exact audience priority may vary by campaign, course, or business strategy.

### 2.3. Business Goals

The frontend should support the following outcomes:

- Communicate the center's value proposition clearly.
- Build trust and credibility.
- Help users discover relevant courses.
- Reduce friction in the path to consultation or registration.
- Support direct contact and lead generation.
- Provide a strong experience across devices.
- Establish a solid foundation for SEO, performance, and future content growth.

### 2.4. Primary Conversion Goals

Typical conversion actions include:

1. Trial-class or placement-test registration.
2. Lead submission for consultation.
3. Direct contact via phone, messaging, or other supported channels.
4. Course-detail exploration as a step toward conversion.

The final priority of each conversion should be determined by the business context and individual page.

---

## 3. Frontend Principles

These principles apply across the website unless a page-level specification explicitly introduces a justified exception.

### 3.1. Conversion-Oriented

The interface should make the user's next meaningful action clear without forcing conversion prematurely.

CTA design should be consistent, recognizable, and appropriate to the user's current context.

### 3.2. Trust-Oriented

The website should communicate credibility through real and verifiable evidence where available, such as:

- Student outcomes.
- Teacher information.
- Credentials or certifications.
- Real testimonials.
- Learning environment and center information.
- Relevant business achievements or partnerships.

The exact presentation and placement of these elements belong to page-level specifications.

### 3.3. User Clarity

Users should be able to understand:

- What the center offers.
- Who a course is for.
- What value the course provides.
- What they can do next.

Avoid unnecessary complexity, vague labels, and decorative UI that obscures important information.

### 3.4. Mobile-First

The experience must work well on mobile first, then scale to tablet and desktop.

Responsive behavior should preserve hierarchy, usability, and conversion flow rather than simply shrinking desktop layouts.

### 3.5. Performance-Conscious

Visual richness should not come at the cost of poor loading or interaction performance.

Images, video, animation, third-party scripts, and JavaScript should be used according to their user value.

### 3.6. Consistency

Shared interaction and visual patterns should be reused across the website, including:

- Typography.
- Color tokens.
- Spacing.
- Buttons.
- Forms.
- Navigation.
- Cards.
- Feedback states.
- Responsive behavior.

### 3.7. Accessibility by Default

Accessibility should be considered as part of normal frontend implementation, not as a separate final pass.

Key flows should support keyboard interaction, readable hierarchy, sufficient contrast, clear form labels, and meaningful semantics.

---

## 4. Site Scope

The website may contain the following page categories:

```text
Home
Courses
Course Detail
Teachers
Student Results / Success Stories
About
Tuition / Pricing
Blog / Resources
Blog Detail
Contact
Registration / Lead Form
```

The final route structure is subject to product requirements.

Individual route specifications should define the exact purpose, content hierarchy, UI composition, and interaction behavior of each page.

---

## 5. Shared Experience Requirements

All public-facing pages should consider the following common concerns:

### Navigation

- Clear primary navigation.
- Consistent access to important sections.
- Appropriate mobile navigation behavior.
- Clear route hierarchy and active states where relevant.

### Conversion

- Relevant CTA opportunities should exist where appropriate.
- CTA wording should match the user's context.
- Conversion should not depend on a single UI location.

### Content

- Important information should be easy to scan.
- Content hierarchy should be visually clear.
- Real evidence should be preferred over generic marketing claims.

### Feedback States

Interactive or data-driven UI should account for applicable states such as:

- Loading.
- Success.
- Empty.
- Error.
- Disabled.
- Validation feedback.

The exact states and behavior belong to the relevant component or page specification.

### Contact Access

Where appropriate, users should have an easy way to contact the center through supported channels such as phone, messaging, contact forms, or location information.

---

## 6. Design System Direction

The frontend should use a shared design system rather than page-specific styling conventions.

The system should provide, at minimum:

- Typography hierarchy.
- Color tokens.
- Spacing scale.
- Container/layout rules.
- Button variants.
- Form controls.
- Common feedback states.
- Responsive breakpoints.
- Shared surface/card patterns where useful.

The exact values, component variants, and implementation details should be defined in a separate design-system specification.

---

## 7. Responsive Requirements

The website must support mobile, tablet, and desktop experiences.

At minimum, responsive implementation should address:

- Navigation changes.
- Content stacking and reordering.
- Grid and card adaptation.
- Typography scaling.
- Touch-friendly controls.
- Image sizing and cropping.
- Form usability.
- Modal, drawer, and overlay behavior.
- Sticky elements that may affect visible content.

Breakpoints are implementation details and should be defined centrally rather than independently by each page.

---

## 8. Performance Requirements

Performance is a core frontend concern because the website is expected to receive traffic from mobile users, search, social media, and advertising.

The implementation should prioritize:

- Fast initial page rendering.
- Appropriate image optimization.
- Efficient font loading.
- Limited client-side JavaScript where possible.
- Controlled use of third-party scripts.
- Avoidance of unnecessary heavy animations or video.
- Stable layouts with minimal unexpected movement.
- Good real-user performance, especially on mobile networks.

Specific performance targets and measurement methodology should be defined separately when the product requirements are finalized.

---

## 9. SEO Requirements

The website should provide a strong technical SEO foundation.

Shared expectations include:

- Semantic HTML.
- Logical heading hierarchy.
- Unique page metadata.
- Crawlable and readable URLs.
- Canonical handling where necessary.
- Sitemap and robots configuration.
- Open Graph / social metadata where appropriate.
- Internal linking.
- Structured data where relevant.

Page-specific SEO requirements should be defined alongside each page specification.

---

## 10. Accessibility Requirements

The frontend should support accessible use of the main website and conversion flows.

At minimum:

- Semantic HTML.
- Keyboard-accessible interactions.
- Visible focus states.
- Proper form labels and validation feedback.
- Meaningful alternative text where applicable.
- Sufficient text and UI contrast.
- Information should not rely on color alone.
- Motion should respect user preferences such as `prefers-reduced-motion`.

Accessibility details for individual components should live in the technical or component specification.

---

## 11. Content and Data Principles

Frontend UI should remain reasonably independent from the underlying content source.

Content may later come from static data, a CMS, APIs, or another backend source without requiring major UI restructuring.

Business content such as course information, teachers, testimonials, and articles should not be unnecessarily hard-coded inside reusable components.

The exact data models and API contracts should be defined separately from this overview.

---

## 12. Analytics and Measurement

The website should be measurable around the main user and conversion journeys.

Potential event categories include:

- Page and course views.
- CTA interactions.
- Contact interactions.
- Form open / start / submit.
- Successful lead submission.
- Relevant content engagement.

Final event names, properties, and tracking tools should be specified separately so analytics requirements do not unnecessarily constrain page structure.

---

## 13. Technical Direction

The frontend architecture should favor:

- Reusable components.
- Clear separation between shared UI and page-specific composition.
- Minimal unnecessary global state.
- A consistent data-fetching strategy.
- Centralized design tokens and responsive rules.
- Maintainable TypeScript code.
- Progressive enhancement where practical.

A concrete technology stack, folder structure, component hierarchy, state management approach, and data/API architecture should be documented in the technical specification rather than treated as fixed requirements in this overview.

---

## 14. Out of Scope for This Overview

The following should **not** be treated as fixed by this document:

- Exact section order on individual pages.
- Exact hero composition.
- Specific CTA placement.
- Exact copywriting.
- Exact card layouts.
- Exact animation behavior.
- Detailed form fields.
- Detailed API contracts.
- Detailed component hierarchy.
- Folder structure.
- Specific library choices.
- Exact breakpoints or design-token values.

These decisions should be made in the relevant page, component, design-system, or technical specifications.

---

## 15. Specification Hierarchy

The frontend documentation should be organized into three levels:

```text
Frontend Overview
        ↓
Page Specifications
        ↓
Technical / Component Specifications
```

### Frontend Overview

Defines:

- Product context.
- Goals.
- Shared principles.
- Site scope.
- Cross-page requirements.

### Page Specifications

Define for a specific route:

- Page goal.
- User intent.
- Content hierarchy.
- Section composition.
- CTA strategy.
- Page-specific interactions.
- Responsive behavior.
- Page-specific SEO requirements.

### Technical / Component Specifications

Define:

- Component behavior.
- Design tokens.
- Component APIs.
- Data contracts.
- State management.
- Performance implementation.
- Accessibility details.
- Testing requirements.

---

## 16. Guiding Principle

The frontend should optimize for:

```text
Fast to understand
        ↓
Easy to trust
        ↓
Easy to navigate
        ↓
Easy to take action
```

The purpose of this overview is to establish direction without prematurely locking individual pages into a specific implementation.
