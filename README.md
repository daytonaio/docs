# Daytona Development Environment Management Platform: Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## 🚀 Project Structure

Inside your Daytona DEM Documentation project, powered by Astro + Starlight, you'll find the following structure:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── getting-started.md
│   │   │   ├── architecture.md
│   │   │   ├── installation/
│   │   │   │   ├── single-node.md
│   │   │   │   ├── cluster.md
│   │   │   │   ├── idps.md
│   │   │   │   ├── domains.md
│   │   │   │   └── uninstall.md
│   │   │   ├── configuration/
│   │   │   │   ├── user-types.md
│   │   │   │   ├── git-providers.md
│   │   │   │   ├── teams.md
│   │   │   │   ├── templates.md
│   │   │   │   └── licensing.md
│   │   │   ├── usage/
│   │   │   │   ├── workspaces.md
│   │   │   │   ├── ides.md
│   │   │   │   ├── account.md
│   │   │   │   └── projects.md
│   │   │   ├── administration/
│   │   │   │   ├── application-logs.md
│   │   │   │   ├── audit-logs.md
│   │   │   │   ├── high-density.md
│   │   │   │   ├── telemetry.md
│   │   │   │   └── appearance.md
│   │   │   └── tools/
│   │   │       ├── api.md
│   │   │       ├── cli.md
│   │   │       ├── vs-code-extension.md
│   │   │       └── jetbrains-gateway.md
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

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
- Currently openapi doesn't work - render menu but breaks on content
- OpenAPI JSON needs to be converted to YAML with https://editor.swagger.io/