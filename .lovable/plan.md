Recommendation for adding a Door-to-Door section to the Fast Cargo website.

Best page: **Services page** (`/services`)
- Door-to-door is a service offering, so it fits naturally alongside the existing freight services.
- The Services page already has the right context: End-to-End capabilities, freight modes, and process.

Recommended placement:
- Insert it after the **End-to-End** section and before the **FreightShowcase** section.
- This keeps the flow: values → capabilities → door-to-door detail → specific freight modes → process.

Recommended design approach:
- Use the same split-section pattern as the Contact form (`ContactForm` in `ContactSections.tsx`):
  - Left: a form card with pickup address, delivery address, cargo type, dimensions, weight, preferred date, and contact info.
  - Right: a sticky support card with a logistics image, a short trust statement, and a direct CTA (phone / live coordinator).
- This matches the "request a quote" style the user referenced.
- Keep colors, typography, spacing, and component style consistent with the existing Services page.

Alternative option:
- If the goal is to generate leads rather than explain a service, add the same Door-to-Door section to the **Contact page** as a second form variant (e.g., a tab or a dedicated card).

Suggested next step if approved:
- Build a `DoorToDoor` component in `src/components/site/ServicesSections.tsx` and import it into `src/routes/services.tsx` between `<EndToEnd />` and `<IndustriesSupport />` or `<FreightShowcase />`.