import fs from 'node:fs';
import { loadEnv } from 'vite'
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node'
import react from '@astrojs/react'
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code';

const { PUBLIC_WEB_URL } = loadEnv(import.meta.env.MODE, process.cwd(), '')

const jsonDarkString = fs.readFileSync(new URL(`src/assets/themes/daytona-code-dark.json`, import.meta.url), 'utf-8');
const jsonLightString = fs.readFileSync(new URL(`src/assets/themes/daytona-code-light.json`, import.meta.url), 'utf-8');
const myThemeDark = ExpressiveCodeTheme.fromJSONString(jsonDarkString);
const myThemeLight = ExpressiveCodeTheme.fromJSONString(jsonLightString);

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_WEB_URL,
  integrations: [
    react(),
    starlight({
    favicon: '/favicon.ico',
    title: 'Daytona',
    social: {
      github: 'https://github.com/daytonaio/daytona'
    },
    "sidebar": [
      {
        "label": "Home",
        link: '/',
        attrs: {
          icon: 'flag.svg'
        },
      },
      {
        "label": "Explanation",
        "items": [
          {
            "label": "What is Daytona?",
            "link": "/explanation/what-is-daytona",
            attrs: {
              icon: 'git-commit.svg'
            },
          },
        ]
      },
      {
        "label": "Installation",
        "items": [
          {
            "label": "Installation",
            "link": "/installation/installation",
            attrs: {
              icon: 'git-commit.svg'
            },
          }
        ]
      },
      {
        "label": "Configuration",
        "items": [
          {
            "label": "Git Providers",
            "link": "/configuration/git-providers",
            attrs: {
              icon: 'git-commit.svg'
            },
          },
        ]
      },
      {
        "label": "Usage",
        "items": [
          {
            "label": "Dev Environments",
            "link": "/usage/dev-environments",
            attrs: {
              icon: 'git-commit.svg'
            },
          },
        ]
      },
      {
        "label": "Reference",
        "items": [
          {
            "label": "CLI",
            "link": "/reference/cli",
            attrs: {
              icon: 'git-commit.svg'
            },
          },
          {
            "label": "Server",
            "link": "/reference/server",
            attrs: {
              icon: 'git-commit.svg'
            },
          },
        ]
      }
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
      TableOfContents:'./src/components/TableOfContents.astro',
      MobileMenuToggle: './src/components/MobileMenuToggle.astro',
      ContentPanel: './src/components/ContentPanel.astro',
      PageTitle: './src/components/PageTitle.astro',
      Hero: './src/components/Hero.astro',
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      Head: './src/components/Head.astro',
    },
    expressiveCode: {
      themes: [myThemeDark, myThemeLight],
    },
  })],
  output: 'hybrid',
  adapter: node({
    mode: 'middleware',
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
});
