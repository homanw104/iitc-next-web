# IITC Next Website

This is the repository of the IITC Next website. 

## Development

If you wish to contribute to the website and start developing,
follow these steps:

1. Fork the repository
2. Download the codebase
3. Install dependencies using `npm install`
4. Start the development server with `npm run dev`

Pull requests will be welcome!

## Cloudflare Workers

In the Cloudflare dashboard, open this worker's **Settings → Build** and set:

- **Build command:** `npx opennextjs-cloudflare build`
- **Deploy command:** `npx opennextjs-cloudflare deploy`
- **Non-production branch deploy command (if enabled):** `npx opennextjs-cloudflare upload`

OpenNext runs `npm run build` (`next build`) and then packages the output in
`.open-next/`. Running `npm run build` directly only creates `.next/` and does
not produce the compiled OpenNext config or worker required for deployment.

Run `npm run preview` to build and preview the worker locally, `npm run deploy`
to build and deploy it, or `npm run upload` to build and upload a version.
