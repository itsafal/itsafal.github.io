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

The GitHub repository is private. The finished website is intended to be public.
