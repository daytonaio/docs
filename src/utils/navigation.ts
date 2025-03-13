// Navigation Configuration
// This file defines the relationship between main navigation items and their related pages
import { NavigationCategory } from '../content/config'

export interface NavigationItem {
  type: 'link' | 'group'
  label?: string
}

export interface NavigationLink extends NavigationItem {
  type: 'link'
  href: string
  label: string
  description?: string
  disablePagination?: boolean
  attrs?: {
    icon?: string
    [key: string]: any
  }
}

export interface MainNavigationLink extends NavigationLink {
  // All links with that category will be shown in the sidebar when the link is active
  relatedGroupCategory: NavigationCategory
}

export interface NavigationGroup extends NavigationItem {
  type: 'group'
  // The category of the group, all links with that category will be shown in the sidebar when
  // the link with that category or the main link that is related to the category is active
  category: NavigationCategory
  // The href of the link that will be used as previous link for the pagination component (if the current link is the first in the list)
  homePageHref?: string
  entries: (NavigationLink | MainNavigationLink)[]
}

// HELPER FUNCTIONS

function normalizePath(path: string): string {
  return path.replace(/\/$/, '')
}

function comparePaths(path1: string, path2: string): boolean {
  return normalizePath(path1) === normalizePath(path2)
}

function getMainNavGroup(sidebarConfig: NavigationGroup[]): NavigationGroup {
  return sidebarConfig.find(
    group => group.category === NavigationCategory.MAIN
  ) as NavigationGroup
}

function getNavGroupsByCategory(
  sidebarConfig: NavigationGroup[],
  category: NavigationCategory
): NavigationGroup[] {
  return sidebarConfig.filter(group => group.category === category)
}

function getNavLinksByCategory(
  sidebarConfig: NavigationGroup[],
  category: NavigationCategory
): NavigationLink[] {
  const groups = getNavGroupsByCategory(sidebarConfig, category)
  return groups.flatMap(group => group.entries) as NavigationLink[]
}

function getNavGroupByHref(
  sidebarConfig: NavigationGroup[],
  href: string
): NavigationGroup | undefined {
  for (const group of sidebarConfig) {
    for (const entry of group.entries) {
      if (entry.type === 'link' && comparePaths(entry.href, href)) {
        return group
      }
    }
  }
  return undefined
}

function getNavLinkByHref(
  sidebarConfig: NavigationGroup[],
  href: string,
  group?: NavigationGroup
): NavigationLink | undefined {
  group = group ?? getNavGroupByHref(sidebarConfig, href)

  if (!group) return undefined

  return group.entries.find(
    entry => entry.type === 'link' && comparePaths(entry.href, href)
  ) as NavigationLink
}

export function getPagination(
  sidebarConfig: NavigationGroup[],
  currentPath: string
): {
  prev?: { href: string; label: string }
  next?: { href: string; label: string }
} {
  currentPath = currentPath.replace(/\/$/, '')
  const result: {
    prev?: { href: string; label: string }
    next?: { href: string; label: string }
  } = {}

  let link = getNavLinkByHref(sidebarConfig, currentPath)
  if (!link || link.disablePagination) return result

  const group = getNavGroupByHref(sidebarConfig, currentPath)

  if (!group) return result

  if (group.category === NavigationCategory.MAIN) {
    const links = getNavLinksByCategory(
      sidebarConfig,
      (link as MainNavigationLink).relatedGroupCategory
    )
    if (links && links.length > 0) {
      result.next = { href: links[0].href, label: links[0].label }
    }
  } else {
    const links = getNavLinksByCategory(sidebarConfig, group.category)

    const index = links.findIndex(link => comparePaths(link.href, currentPath))

    if (index === 0) {
      if (group.homePageHref) {
        const homePageLink = getNavLinkByHref(sidebarConfig, group.homePageHref)
        if (homePageLink) {
          result.prev = { href: homePageLink.href, label: homePageLink.label }
        }
      }
    } else {
      result.prev = {
        href: links[index - 1].href,
        label: links[index - 1].label,
      }
    }

    if (index != links.length - 1) {
      result.next = {
        href: links[index + 1].href,
        label: links[index + 1].label,
      }
    }
  }
  return result
}

export function getSidebar(
  sidebarConfig: NavigationGroup[],
  currentPath: string
): NavigationGroup[] {
  currentPath = currentPath.replace(/\/$/, '')
  const mainGroup = getMainNavGroup(sidebarConfig)
  const currentGroup = getNavGroupByHref(sidebarConfig, currentPath)

  if (!currentGroup) return [mainGroup]

  if (currentGroup.category === NavigationCategory.MAIN) {
    const currentLink = getNavLinkByHref(
      sidebarConfig,
      currentPath,
      currentGroup
    ) as MainNavigationLink

    if (!currentLink) return [mainGroup]

    const relatedGroups = getNavGroupsByCategory(
      sidebarConfig,
      currentLink.relatedGroupCategory
    )
    return [mainGroup, ...relatedGroups]
  } else {
    const groups = getNavGroupsByCategory(sidebarConfig, currentGroup.category)
    return [mainGroup, ...groups]
  }
}

export function getExploreMoreData(
  sidebarConfig: NavigationGroup[],
  currentPath: string
) {
  currentPath = currentPath.replace(/\/$/, '')
  const link = getNavLinkByHref(
    sidebarConfig,
    currentPath
  ) as MainNavigationLink
  if (!link) {
    return []
  }

  const relatedGroups = getNavGroupsByCategory(
    sidebarConfig,
    link.relatedGroupCategory
  )

  return relatedGroups.map(group => {
    const items = group.entries.map(navLink => {
      return {
        title: navLink.label,
        subtitle: navLink.description || '',
        href: navLink.href,
      }
    })

    return {
      title: group.label || '',
      items,
    }
  })
}
