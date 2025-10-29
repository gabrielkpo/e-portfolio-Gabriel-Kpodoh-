# Gabriel Kpodoh — Portfolio
Gabriel Kpodoh Portfolio built with Astro 5.7, React and TailwindCSS.

![Portfolio](/public/social-image.jpg "Portfolio")

## Getting Started
Clone Repository
```sh
git clone https://github.com/gabriel-kpodoh/mon_portfolio.git
```

Install Dependencies
```sh
pnpm install
```

Development
```sh
pnpm run dev
```

Build
```sh
pnpm run build
```

Preview
```sh
pnpm run preview
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── icone.svg
│   └── social-image.jpg
├── src/
│   ├── actions/
│   │   └── # Astro server actions
│   ├── assets/
│   │   └── # Images that are transformed, optimized and bundled by Astro 
│   ├── components/
│   │   └── # Astro and React components
│   ├── layouts/
│   │   └── RootLayout.astro
│   └── pages/
│   │   └── blog/
│   │   │   └── index.astro
│   │   │   └── [...slug].astro
│   │   └── competences.astro
│   │   └── contact.astro
│   │   └── index.astro
│   │   └── projects.astro
│   └── styles/
│   │   └── global.css
└── .gitignore
└── astro.config.mjs
└── package.json
└── tsconfig.json
```

## Deployment
The site is configured for deployment on Vercel, but with slight modifications it can be deployed to any hosting service.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## ⛔️ Changes
The template also uses [React Paper Shaders](https://github.com/paper-design/shaders). 
The Paper Team will be publishing [breaking changes](https://github.com/paper-design/shaders?tab=readme-ov-file#getting-started) to the Shaders library under 0.0.x versioning so check back to get updates when they release Paper Shaders v1.