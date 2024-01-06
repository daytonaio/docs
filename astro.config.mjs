import { loadEnv } from 'vite'
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node'

const { PUBLIC_WEB_URL } = loadEnv(import.meta.env.MODE, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_WEB_URL,
  integrations: [starlight({
    favicon: '/favicon.ico',
    title: 'Daytona',
    social: {
      github: 'https://github.com/daytonaio'
    },
    "sidebar": [{
      "label": "Getting Started",
      link: 'getting-started'
    }, {
      "label": "Architecture",
      link: 'architecture'
    }, {
      "label": "Installation",
      "items": [{
        "label": "Single Node",
        "link": "/installation/single-node/"
      }, {
        "label": "Cluster",
        "link": "/installation/cluster/"
      }, {
        "label": "IDPs",
        "link": "/installation/idps/"
      }, {
        "label": "Domains",
        "link": "/installation/domains/"
      }, {
        "label": "Uninstall",
        "link": "/installation/uninstall/"
      }]
    }, {
      "label": "Configuration",
      "items": [{
        "label": "User Types",
        "link": "/configuration/user-types/"
      }, {
        "label": "Git Providers",
        "link": "/configuration/git-providers/"
      }, {
        "label": "Teams",
        "link": "/configuration/teams/"
      }, {
        "label": "Templates",
        "link": "/configuration/templates/"
      }, {
        "label": "Licensing (Enterprise)",
        "link": "/configuration/licensing/"
      }]
    }, {
      "label": "Usage",
      "items": [{
        "label": "Workspaces",
        "link": "/usage/workspaces/"
      }, {
        "label": "IDEs",
        "link": "/usage/ides/"
      }, {
        "label": "Account",
        "link": "/usage/account/"
      }, {
        "label": "Projects",
        "link": "/usage/projects/"
      }]
    }, {
      "label": "Administration",
      "items": [{
        "label": "Application Logs",
        "link": "/administration/application-logs/"
      }, {
        "label": "Audit Logs",
        "link": "/administration/audit-logs/"
      }, {
        "label": "High Density",
        "link": "/administration/high-density/"
      }, {
        "label": "Telemetry",
        "link": "/administration/telemetry/"
      }, {
        "label": "Appearance",
        "link": "/administration/appearance/"
      }]
    }, {
      "label": "Tools and Resources",
      "items": [{
        "label": "API",
        "link": "/tools/api/"
      }, {
        "label": "CLI",
        "link": "/tools/cli/"
      }, {
        "label": "VS Code Extension",
        "link": "/tools/vs-code-extension/"
      }, {
        "label": "JetBrains Gateway",
        "link": "/tools/jetbrains-gateway/"
      }, {
        "label": "Neovim",
        "link": "/tools/neovim/"
      }]
    },
    {
      "label": "Contribution",
      "items": [{
        "label": "Guideline",
        "link": "/contribution/guidelines",
      }]
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
      ThemeProvider: './src/components/ThemeProvider.astro'
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