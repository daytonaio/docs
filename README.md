# Daytona Documentation

Daytona uses Starlight to manage documentation content. Place your `.md` or `.mdx` files in the `src/content/docs/` directory to match the structure above. These files will automatically become available as routes.

Store images in `src/assets/` to include them in your Markdown files with relative link `../../../assets/`.

Place static assets, such as icons and manifest files, into the `public/` directory.

## 🧞 Commands

Execute these commands from the root of your project in a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds your production site to `./dist/`         |
| `npm run preview`         | Previews your build locally before deployment    |
| `npm run astro ...`       | Runs CLI commands like `astro add`, `astro check`|
| `npm run astro -- --help` | Provides help for using the Astro CLI            |

## 👀 Looking for more information on how to structure and develop docs with Astro and Starlight?

Explore [Starlight’s documentation](https://starlight.astro.build/), delve into [Astro’s docs](https://docs.astro.build), or join the vibrant [Astro Discord community](https://astro.build/chat) for support.

### NOTES
- For API we are using [Starlight OpenAPI](https://github.com/HiDeoo/starlight-openapi/)
