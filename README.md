# Safal Gautam

A minimal personal website. Plain HTML and CSS, no client-side JavaScript, tracking, paid services, or external font dependencies.

## Editing

- `index.html`: content, links, and metadata.
- `style.css`: desktop, mobile, and print layout.
- `assets/portrait.png`: profile photo supplied by the owner.

Keep the current employer anonymous as **Stealth startup** throughout the site.

## Preview and build

Requires Node.js 22 or later. There are no npm dependencies.

```sh
npm run dev
npm run build
```

The build checks local links, unfinished placeholders, and employer anonymity, then copies only public assets into `dist/` for any static host.

## Publishing

Live site: https://itsafal.github.io/

The website is hosted on GitHub Pages. Changes pushed to `main` build and deploy automatically through `.github/workflows/pages.yml`. The workflow can also be run manually from the repository's Actions tab.

The repository is public so GitHub Pages can run on the free plan. Only the files in `dist/` are uploaded to the Pages deployment. No hosting subscription or paid domain is required.
