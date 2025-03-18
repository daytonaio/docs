import { docsSchema, i18nSchema } from '@astrojs/starlight/schema'
import { defineCollection, z } from 'astro:content'

import type { NavigationGroup } from '../utils/navigation'

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        licence: z.string().optional(),
        distribution: z.string().optional(),
      }),
    }),
  }),
  i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
}

export enum NavigationCategory {
  MAIN,
  GENERAL,
  TYPESCRIPT_SDK,
  PYTHON_SDK,
}

/**
 * relatedGroupCategory - Applicable only to main navigation links. All links with that category will be shown in the sidebar when the link is active.
 * category - Applicable to groups. All links with that category will be shown in the sidebar when the link with that category or the main link that is related to the category is active.
 * homePageHref - Applicable to groups. The href of the link that will be used as previous link for the pagination component (if the current link is the first in the list).
 * disablePagination - Applicable to all links. If true, the pagination component will not be shown for the link.
 */
export const sidebarConfig: NavigationGroup[] = [
  {
    type: 'group',
    category: NavigationCategory.MAIN,
    entries: [
      {
        type: 'link',
        href: '/docs',
        label: 'Documentation',
        attrs: {
          icon: 'home.svg',
        },
        relatedGroupCategory: NavigationCategory.GENERAL,
      },
      {
        type: 'link',
        href: '/docs/typescript-sdk',
        label: 'TS SDK Reference',
        attrs: {
          icon: 'package.svg',
        },
        relatedGroupCategory: NavigationCategory.TYPESCRIPT_SDK,
      },
      {
        type: 'link',
        href: '/docs/python-sdk',
        label: 'Python SDK Reference',
        attrs: {
          icon: 'package.svg',
        },
        relatedGroupCategory: NavigationCategory.PYTHON_SDK,
      },
      {
        type: 'link',
        href: '/docs/tools/api',
        label: 'API Reference',
        disablePagination: true,
        attrs: {
          icon: 'server.svg',
        },
        relatedGroupCategory: NavigationCategory.GENERAL,
      },
      {
        type: 'link',
        href: '/docs/tools/cli',
        label: 'CLI Reference',
        disablePagination: true,
        attrs: {
          icon: 'terminal.svg',
        },
        relatedGroupCategory: NavigationCategory.GENERAL,
      },
    ],
  },
  {
    type: 'group',
    label: 'Introduction',
    homePageHref: '/docs',
    category: NavigationCategory.GENERAL,
    entries: [
      {
        type: 'link',
        href: '/docs/getting-started',
        label: 'Getting Started',
        description:
          'Learn about Daytona SDK and how it can help you manage your development environments.',
        attrs: {
          icon: 'bookmark.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/configuration',
        label: 'Configuration',
        description:
          'Get started with Daytona SDK and learn how to use and configure your development environments.',
        attrs: {
          icon: 'git-commit.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/sandbox-management',
        label: 'Sandboxes',
        description:
          'Learn how to create, manage, and remove Sandboxes using the Daytona SDK.',
        attrs: {
          icon: 'computer.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/images',
        label: 'Images',
        description: 'Learn how to create, manage, and remove custom Images.',
        attrs: {
          icon: 'layers.svg',
        },
      },
    ],
  },
  {
    type: 'group',
    label: 'Agent Toolbox',
    homePageHref: '/docs',
    category: NavigationCategory.GENERAL,
    entries: [
      {
        type: 'link',
        href: '/docs/file-system-operations',
        label: 'File System',
        description:
          'Learn how to manage files and directories in your Sandboxes using the Daytona SDK.',
        attrs: {
          icon: 'folder.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/git-operations',
        label: 'Git Operations',
        description:
          'Learn how to manage Git repositories in your Sandboxes using the Daytona SDK.',
        attrs: {
          icon: 'git-branch.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/language-server-protocol',
        label: 'Language Server Protocol',
        description:
          'Learn how to use Language Server Protocol (LSP) support in your Sandboxes using the Daytona SDK.',
        attrs: {
          icon: 'pulse.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/process-code-execution',
        label: 'Process & Code Execution',
        description:
          'Learn about running commands and code in isolated environments using the Daytona SDK.',
        attrs: {
          icon: 'terminal.svg',
        },
      },
    ],
  },
  {
    type: 'group',
    label: 'TS SDK Reference',
    homePageHref: '/docs/typescript-sdk',
    category: NavigationCategory.TYPESCRIPT_SDK,
    entries: [
      {
        type: 'link',
        href: '/docs/typescript-sdk/daytona',
        label: 'Management',
        attrs: {
          icon: 'computer.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/typescript-sdk/file-system',
        label: 'File System',
        attrs: {
          icon: 'folder.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/typescript-sdk/git',
        label: 'Git Operations',
        attrs: {
          icon: 'git-branch.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/typescript-sdk/lsp-server',
        label: 'Language Server Protocol',
        attrs: {
          icon: 'pulse.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/typescript-sdk/process',
        label: 'Process & Code Execution',
        attrs: {
          icon: 'terminal.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/typescript-sdk/sandbox',
        label: 'Sandbox',
        attrs: {
          icon: 'rectangle.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/typescript-sdk/errors',
        label: 'Errors',
        attrs: {
          icon: 'circle-error.svg',
        },
      },
    ],
  },
  {
    type: 'group',
    label: 'Python SDK Reference',
    homePageHref: '/docs/python-sdk',
    category: NavigationCategory.PYTHON_SDK,
    entries: [
      {
        type: 'link',
        href: '/docs/python-sdk/daytona',
        label: 'Management',
        attrs: {
          icon: 'computer.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/python-sdk/file-system',
        label: 'File System',
        attrs: {
          icon: 'folder.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/python-sdk/git',
        label: 'Git Operations',
        attrs: {
          icon: 'git-branch.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/python-sdk/lsp-server',
        label: 'Language Server Protocol',
        attrs: {
          icon: 'pulse.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/python-sdk/process',
        label: 'Process & Code Execution',
        attrs: {
          icon: 'terminal.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/python-sdk/sandbox',
        label: 'Sandbox',
        attrs: {
          icon: 'rectangle.svg',
        },
      },
      {
        type: 'link',
        href: '/docs/python-sdk/errors',
        label: 'Errors',
        attrs: {
          icon: 'circle-error.svg',
        },
      },
    ],
  },
]
