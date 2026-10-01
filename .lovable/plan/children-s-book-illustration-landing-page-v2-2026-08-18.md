# Children's Book Illustration Landing Page (v2)

A brand-new, highly animated illustration landing page at `/illustrations`, using the exact copy from the current live page but rebuilt with a bright storybook look and far more creative energy. The existing publishing home page stays untouched.

## Copy (kept word for word)

All headings and body text come straight from the live page:

- Hero: "You Imagine. We Illustrate. They Remember." + the paragraph, CTAs "Live Chat" / "Get Started Today"
- Lead form: "Let's Create a Whimsical Illustration" (name, email, phone optional, message, consent checkbox, Submit)
- Retailer logo strip
- "Hired an Illustrator Before? Got Art That Looked Nothing Like Your Vision?" + 4 checkmark points + "Talk to an Expert"
- "That Digital Proof Looked Perfect. Then You Held the Printed Book" + 3 bullets + book mockups + "Let's get Started"
- "From the Picture in Your Head to the Page in Their Hands" — 5 process steps (We Get to Know Your World / We Find Your Style / Rough Sketches Before Anything Final / Your Feedback Shapes Everything / Files in Your Hands, Ready for Anything) + "Get Started"
- "Every Genre Has a Visual Language. We Speak All of Them." — 6 genre cards
- The 6 promise blocks (Unlimited revisions, Budget, Ideas, Deadline, Options, Ownership)
- "Sneak A Peek Into Our Imagination Station" gallery + "Speak to the Director of Illustration"
- "Talk to Us Today!" CTA
- "Authors Who Finally Got the Art Their Books Deserved" — 3 testimonials (Olivia R., James P., Patricia K.)
- FAQ — 6 questions with their answers
- Footer with badges and social links

## Visual direction

Bright, loud storybook palette layered over the brand: sky blue, sunshine yellow, coral, mint, plus deep ink for text and the logo terracotta as a connective accent. Rounded, hand-drawn shapes, crayon-texture edges, torn-paper section dividers, sticker-style badges, chunky playful display type paired with a highly readable body face. No parchment/serious-publisher styling on this page — it should read as a creative studio showcase while still feeling premium, not cheap-clipart.

## Animation and interaction

- Scroll-triggered reveals on every section (fade + rise + slight rotate for cards)
- Parallax floating doodles (stars, clouds, pencils, paint splats) drifting behind sections
- Animated gradient/blob backgrounds that slowly morph
- Hero: staggered word-by-word headline entrance, bobbing illustrated characters, wiggling CTA buttons on hover
- Retailer strip: continuous marquee
- Process: an illustrated path/trail that draws itself as you scroll, with the 5 steps popping in along it (no plain numbered boxes)
- Genre cards: hover tilt + lift with color-flood
- Gallery: horizontally scrolling art carousel with hover zoom and a slight scatter/polaroid look
- Testimonials: rotating cards with drawn quote marks
- FAQ: smooth expand/collapse accordion
- All motion respects `prefers-reduced-motion`

## Artwork to generate

A full custom set so nothing looks stock:
- Hero illustrated scene (child + magical book world)
- 6 children's-book sample spreads for the Imagination Station gallery
- 4 printed-book mockups for the print-ready section
- 6 genre icons (picture books, middle grade, fantasy/sci-fi, mystery/horror, educational, memoir)
- 2–3 soft illustrated section backgrounds
- Decorative doodle elements

## Technical notes

- New route file `src/routes/illustrations.tsx` with `createFileRoute("/illustrations")` and its own `head()` (unique title, description, og/twitter tags).
- Page-scoped playful color tokens and utilities added to `src/styles.css` under a page wrapper class, so the existing home page's palette and gradient-text rules are not affected. The global heading/body gradient-text rules will be neutralized inside this page wrapper so the new colors read cleanly.
- Animations via CSS keyframes + a small IntersectionObserver reveal hook (no new heavy dependency).
- Generated images uploaded as CDN assets (`.asset.json` pointers) like the rest of the project.
- Reuse the existing header logo and footer badge assets for brand continuity.
- Form is presentational (client-side validation + success state); no backend is added unless you want submissions stored.

## Out of scope

- No changes to the current home page
- No backend/database wiring for the lead form
