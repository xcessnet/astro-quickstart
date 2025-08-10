# Blue Horizon Boat Tours – Static Site

A modern, responsive single-page website for a boat tour company offering daily cruises and private charters.

## Quick start

- Open `boat-tours-site/index.html` in a browser, or serve locally:

```bash
# from repo root
cd /workspace/boat-tours-site
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Customize

- Branding: Update name, phone, email and address in `index.html` header, footer and Contact section.
- SEO: Change `<title>`, meta description, Open Graph tags, and the JSON-LD in `index.html`.
- Cruises: Edit the cards in the `#tours` section.
- Charters: Edit the `#charters` and request form fields to fit your services.
- Fleet: Update images and specs in the `#fleet` section.
- Schedule: Adjust the rows in `#schedule`.
- Reviews/FAQ: Update copy in `#reviews` and `#faq`.

## Forms

Forms are client-side only by default. Options to make them send data:

- Use a static form backend (Netlify Forms, Formspree, Basin). Point the form `action` there and switch method to `POST`.
- Add a lightweight API (Node, Python, etc.) and `fetch()` to your endpoint in `script.js`.
- Replace the fake delay with real submission and success/failure UI.

## Deployment

- GitHub Pages: Commit this folder and enable Pages for the repo.
- Netlify/Vercel: Drag-and-drop the folder or connect your repo. Build command: none. Publish directory: `boat-tours-site`.
- Any static host will work.

## Assets

Images currently use Unsplash placeholders. Replace with your own and update `alt` text for accessibility and SEO.

## License

MIT