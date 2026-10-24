# RES-Q-RITY website

React 18 + Vite + Tailwind CSS v4 + Motion (Framer Motion).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

- All copy (services, partners, clients, contact details) lives in `src/data/content.js`.
- Pages: `src/pages/` (Home, About, Services, Solutions, Contact, 404).
- Shared animation building blocks: `src/components/ui.jsx` and `src/components/sections.jsx`.
- The contact form opens the visitor's mail client addressed to info@res-q-rity.com. Swap `onSubmit` in `src/pages/Contact.jsx` for a form service (Formspree, EmailJS, your API) to receive submissions directly.
- `public/_redirects` (Netlify) and `vercel.json` (Vercel) make deep links like `/services` work after deploy.
