import node from '@astrojs/node'
import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code'
import { defineConfig } from 'astro/config'
import fs from 'node:fs'
import { loadEnv } from 'vite'

const { PUBLIC_WEB_URL } = loadEnv(import.meta.env.MODE, process.cwd(), '')

const jsonDarkString = fs.readFileSync(
  new URL(`src/assets/themes/daytona-code-dark.json`, import.meta.url),
  'utf-8'
)
const jsonLightString = fs.readFileSync(
  new URL(`src/assets/themes/daytona-code-light.json`, import.meta.url),
  'utf-8'
)
const myThemeDark = ExpressiveCodeTheme.fromJSONString(jsonDarkString)
const myThemeLight = ExpressiveCodeTheme.fromJSONString(jsonLightString)

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_WEB_URL,
  base: '/docs',
  integrations: [
    react(),
    starlight({
      favicon: '/favicon.ico',
      title: 'Daytona',
      social: {
        github: 'https://github.com/daytonaio/daytona',
      },
      editLink: {
        baseUrl: 'https://github.com/daytonaio/docs/blob/main/',
      },
      sidebar: [
        {
          label: 'Home',
          link: '/',
          attrs: {
            icon: 'home.svg',
          },
        },
        {
          label: 'About',
          items: [
            {
              label: 'What is Daytona?',
              link: '/about/what-is-daytona',
              attrs: {
                icon: 'flag.svg',
              },
            },
            {
              label: 'Architecture',
              link: '/about/architecture',
              attrs: {
                icon: 'architecture.svg',
              },
            },
            {
              label: 'Getting Started',
              link: '/about/getting-started',
              attrs: {
                icon: 'bookmark.svg',
              },
            },
          ],
        },
        {
          label: 'Installation',
          items: [
            {
              label: 'Installation',
              link: '/installation/installation',
              attrs: {
                icon: 'install.svg',
              },
            },
          ],
        },
        {
          label: 'Configuration',
          items: [
            {
              label: 'Git Providers',
              link: '/configuration/git-providers',
              attrs: {
                icon: 'git-branch.svg',
              },
            },
            {
              label: 'Providers',
              link: '/configuration/providers',
              attrs: {
                icon: 'git-commit.svg',
              },
            },
            {
              label: 'Target Configs',
              link: '/configuration/target-config',
              attrs: {
                icon: 'tag.svg',
              },
            },
            {
              label: 'Container Registries',
              link: '/configuration/container-registries',
              attrs: {
                icon: 'container-registries.svg',
              },
            },
            {
              label: 'Workspace Templates',
              link: '/configuration/workspace-templates',
              attrs: {
                icon: 'computer.svg',
              },
            },
            {
              label: 'Server',
              link: '/configuration/server',
              attrs: {
                icon: 'server.svg',
              },
            },
            {
              label: 'API Keys',
              link: '/configuration/api-keys',
              attrs: {
                icon: 'api-key.svg',
              },
            },
          ],
        },
        {
          label: 'Usage',
          items: [
            {
              label: 'Workspaces',
              link: '/usage/workspaces',
              attrs: {
                icon: 'computer.svg',
              },
            },
            {
              label: 'Targets',
              link: '/usage/targets',
              attrs: {
                icon: 'tag.svg',
              },
            },
            {
              label: 'Agent Toolbox',
              link: '/usage/agent-toolbox',
              attrs: {
                icon: 'agent-toolbox.svg',
              },
            },
            {
              label: 'Prebuilds',
              link: '/usage/prebuilds',
              attrs: {
                icon: 'prebuilds.svg',
              },
            },
            {
              label: 'IDEs',
              link: '/usage/ide',
              attrs: {
                icon: 'layout.svg',
              },
            },
            {
              label: 'Samples',
              link: '/usage/samples',
              attrs: {
                icon: 'samples.svg',
              },
            },
            {
              label: 'Builders',
              link: '/usage/builders',
              attrs: {
                icon: 'tools.svg',
              },
            },
            {
              label: 'Runners',
              link: '/usage/runners',
              attrs: {
                icon: 'cluster.svg',
              },
            },
          ],
        },
        {
          label: 'Tools and Resources',
          items: [
            {
              label: 'CLI',
              link: '/tools/cli',
              attrs: {
                icon: 'terminal.svg',
              },
            },
            {
              label: 'API',
              link: '/tools/api',
              attrs: {
                icon: 'switch.svg',
              },
            },
            {
              label: 'Docker Extension',
              link: '/tools/docker-extension',
              attrs: {
                icon: 'docker.svg',
              },
            },
          ],
        },
        {
          label: 'Misc',
          items: [
            {
              label: 'Telemetry',
              link: '/misc/telemetry',
              attrs: {
                icon: 'pulse.svg',
              },
            },
            {
              label: 'Troubleshooting',
              link: '/misc/troubleshooting',
              attrs: {
                icon: 'warning.svg',
              },
            },
          ],
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
      customCss: ['./src/fonts/font-face.css', './src/styles/style.scss'],
      components: {
        Footer: './src/components/Footer.astro',
        MarkdownContent: './src/components/MarkdownContent.astro',
        Pagination: './src/components/Pagination.astro',
        Header: './src/components/Header.astro',
        PageSidebar: './src/components/PageSidebar.astro',
        PageFrame: './src/components/PageFrame.astro',
        Sidebar: './src/components/Sidebar.astro',
        TwoColumnContent: './src/components/TwoColumnContent.astro',
        TableOfContents: './src/components/TableOfContents.astro',
        MobileMenuToggle: './src/components/MobileMenuToggle.astro',
        ContentPanel: './src/components/ContentPanel.astro',
        PageTitle: './src/components/PageTitle.astro',
        Hero: './src/components/Hero.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        Head: './src/components/Head.astro',
        EditLink: './src/components/EditLink.astro',
      },
      expressiveCode: {
        minSyntaxHighlightingColorContrast: 0,
        themes: [myThemeDark, myThemeLight],
      },
    }),
  ],
  output: 'hybrid',
  adapter: node({
    mode: 'middleware',
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
})
