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
- The contact form sends enquiries to **tpagidipati@res-q-rity.com** through [Web3Forms](https://web3forms.com):
  1. On web3forms.com, create an access key using `tpagidipati@res-q-rity.com` (the key is emailed to that inbox).
  2. In Vercel: Project → Settings → Environment Variables, add `VITE_WEB3FORMS_KEY` with that key, then redeploy.
  3. For local testing, copy `.env.example` to `.env.local` and paste the key.

  Until a key is set, the form falls back to opening the visitor's mail app addressed to the same inbox.
- `public/_redirects` (Netlify) and `vercel.json` (Vercel) make deep links like `/services` work after deploy.
