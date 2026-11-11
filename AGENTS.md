## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Adding projects

- Projects live in `rawProjects` in `src/data/content.js`. The cards render in array order, so **new projects always go at the top of the array** (most recent first).
- Screenshots go in `public/` and are named `<slug>-ss.<ext>` (e.g. `tonis-ss.webp`), referenced as `img: '/<slug>-ss.<ext>'`.
- When a project is "similar to" an existing one, copy that entry (tag, `shot`, `desc`, `tech`) and change only what was asked, e.g. the title.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
