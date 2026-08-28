# Diagnostic Ventures website

The customer-facing website for Diagnostic Ventures, rebuilt from the company’s current Webflow site with a cleaner information architecture, stronger mobile experience, and Vercel-ready Next.js setup.

## Public pages

- Home
- About
- Team
- Problem
- Clarity ID™ solution
- Investors
- Contact

Legacy shop, pricing, placeholder research, and template pages are intentionally excluded.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The default build is standard Next.js and can be imported directly into Vercel. The repository also retains a compatible Sites build target:

```bash
npm run build:sites
```

## Contact forms

Forms validate input and open a pre-addressed email to `brian@diagnosticventures.net`, preserving the visitor’s completed message without requiring a third-party form service or API key.

## Content note

Clarity ID™ is under development and is not FDA-approved or commercially available. Clinical and competitive figures should be reviewed by Diagnostic Ventures before major public updates.
