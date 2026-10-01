# Audiobook Production Landing Page

Create a new `/audiobook` landing page using the live Collingwood Press audiobook page as the source of truth for copy, while redesigning it into a distinctive, polished, conversion-focused experience that still feels part of the existing Collingwood Press family.

## Page experience

- Use the established Collingwood Press logo, editorial typography, terracotta/orange, charcoal, warm paper, and antique-gold accents.
- Give this page its own audio-led visual identity: waveform lines, chapter markers, studio controls, headphone/listening imagery, recording-room details, and layered book-to-audio compositions.
- Keep layouts aligned, readable, and compact, with no oversized empty sections or uneven cards.
- Use restrained motion: animated waveforms, a continuous platform strip, subtle image movement, and scroll reveals, all respecting reduced-motion settings.

## Content and structure

- Header with logo, section navigation, phone number, and a strong manuscript CTA.
- Hero using the exact live-page headline and supporting copy, paired with a short lead form including name, email, phone, and manuscript stage.
- Compact audiobook platform carousel using clear, authentic logos where reliable assets are available.
- “Inside Our Audiobook Studio” rebuilt as a concise visual production flow covering all six original stages: manuscript review, casting, recording, editing/proofing, mastering/formatting, and final delivery.
- Preserve the AI-audiobook platform notice and present it as an editorial information feature rather than a generic card.
- “Why Audiobook?” presented as an interactive, compact benefit explorer using the original six benefits and source copy.
- Preserve the accessibility-focused “Why Credible Authors Publish Audiobooks” content in a strong image-led section.
- Compact FAQ containing all nine original questions and answers.
- Final consultation area and dark image-backed footer with the original contact information and social links.

## Artwork

Generate a cohesive set of original audiobook-production imagery rather than reuse unrelated publishing art:

- Hero: premium recording studio with an open manuscript, headphones, microphone, and waveform motif.
- Production: narrator booth, casting/listening setup, editing workstation, mastering console, and delivery-ready audio/library scene.
- Supporting backgrounds: subtle acoustic-panel texture, manuscript/audio collage, and dark studio ambience for the footer.

## Technical details

- Add `src/routes/audiobook.tsx` with `createFileRoute("/audiobook")`.
- Add route-specific title, description, Open Graph title/description, `og:type`, and Twitter card metadata.
- Add page-scoped audiobook tokens and animation utilities in `src/styles.css` so existing pages remain unchanged.
- Keep forms presentational with client-side validation and a clear success state; no storage or server submission is added.
- Use bundled/generated assets only; do not hotlink page imagery.
- Verify the finished page at desktop and mobile widths, including form usability, accordion behavior, motion, image loading, and alignment.
