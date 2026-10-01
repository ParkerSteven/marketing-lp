# /verify — Publisher Identity & Transparency Page

A plain, reference-style page at `/verify` where anyone can confirm in under a minute that they are dealing with The Collingwood Press, and read how the company works and gets paid.

Deliberately unlike the other pages: no sales language, no images, no icons, no animation, no buttons, no testimonials, no pricing. Quiet, factual, easy to read.

## Sections, in order

1. **Hero** — H1 "Verify you're dealing with The Collingwood Press", one sentence of subtext, and a "Last updated: [DATE]" line. No image, no button.
2. **Our details** — bordered identity block: legal entity name, state of registration and entity number, registered address, phone, the only email domain used, website domain. Followed by one line stating we never contact from another domain and never ask for payment to a personal account or wire to an individual.
3. **Check us independently** — five outbound links (BBB, state registry, Trustpilot, ISBN prefix lookup, distributor page), each with source name and a one-line description, opening in a new tab.
4. **How we're paid** — the section with the most visual weight. States the author-subsidized model directly in the first sentence, then what the author pays for, what we pay for, who owns rights, who owns printed copies, and royalty share as a percentage of net. Closes by noting the model isn't for everyone and that authors seeking an advance should query agents and traditional publishers first. No comparative framing; the word "hybrid" appears nowhere.
5. **Our process** — three numbered steps (advisor conversation, editorial board review, written plan with full costs), followed by a "What we don't ask for" callout with the three stated lines about NDAs, outside review of the contract, and the rights-reversion clause.
6. **Author support program** — stated up front as one project per quarter, [N] of [M] authors a year: what is co-invested, what the author gives up, royalty terms and time limit, how selection works, and plainly that it is an exception.
7. **Memberships** — flat text list, "Member/Accredited since [YEAR]" plus a link to the public record, with a line noting these are paid affiliations and not endorsements of any company's work, including ours. No seals or badges. Placed well away from section 4.
8. **Questions worth asking any publisher** — eight neutral questions, no commentary after them.
9. **Footer** — one line directing anyone with mismatched contact details to [ABUSE_EMAIL].

## Placeholders

Every company-specific value is left as a bracketed placeholder ([LEGAL_ENTITY_NAME], [ROYALTY_PCT], [BBB_PROFILE_URL], [DATE], [ABUSE_EMAIL], etc.) so all of them can be found with a single search and filled in later. I'll list them in my reply when the page is done.

## Technical details

- New file `src/routes/verify.tsx` with `createFileRoute("/verify")`; no other route or shared file is touched.
- Page-scoped Tailwind utility classes only — no shadcn components, no imports of the existing landing-page styles, no additions to `src/styles.css`.
- System font stack, ~17-18px base, 1.6 line height, near-black on off-white, single accent colour used only for links, content column capped near 44rem, mobile-first.
- Semantic HTML: one `h1`, an `h2` per section, real `<ul>` and `<a>`; external links carry `target="_blank" rel="noopener noreferrer"`.
- Route `head()` with a title and description about verifying publisher identity, plus og:title, og:description, og:type and twitter:card.
- The page is not linked from any existing navigation unless requested.
