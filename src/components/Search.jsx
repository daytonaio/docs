import { liteClient as algoliasearch } from 'algoliasearch/lite'
import { useEffect, useRef, useState } from 'react'
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox,
  Stats,
} from 'react-instantsearch-dom'

import '../styles/components/search.scss';

const searchClient = algoliasearch(
  import.meta.env.PUBLIC_ALGOLIA_APP_ID,
  import.meta.env.PUBLIC_ALGOLIA_API_KEY
)

function SearchReact() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const searchIconRef = useRef(null)
  const searchIconMobileRef = useRef(null)

  useEffect(() => {
    const toggleSearch = () => {
      setIsSearchVisible(prev => !prev)
    }

    const handleKeyDown = event => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        toggleSearch()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const searchIcon = searchIconRef.current
    const searchIconMobile = searchIconMobileRef.current

    if (searchIcon) {
      searchIcon.addEventListener('click', toggleSearch)
    }
    if (searchIconMobile) {
      searchIconMobile.addEventListener('click', toggleSearch)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (searchIcon) {
        searchIcon.removeEventListener('click', toggleSearch)
      }
      if (searchIconMobile) {
        searchIconMobile.removeEventListener('click', toggleSearch)
      }
    }
  }, [])

  return (
    <>
      {isSearchVisible && (
        <div id="searchbox-wrapper" className="searchbox-wrapper">
          <InstantSearch indexName="docs" searchClient={searchClient}>
            <SearchBox
              translations={{ placeholder: 'Search daytona.io' }}
              autoFocus={true}
            />
            <div
              id="stats-pagination-wrapper"
              className="stats-pagination-wrapper"
            >
              <Stats />
              <Pagination />
            </div>
            <Hits hitComponent={Hit} />
            <Configure
              hitsPerPage={10}
              clickAnalytics={true}
              getRankingInfo={false}
            />
          </InstantSearch>
        </div>
      )}
    </>
  )
}

function Hit({ hit }) {
  return (
    <div style={{ padding: '4px' }}>
      <a href={hit.url} style={{ textDecoration: 'none', fontSize: '8px' }}>
        <h5 style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', marginRight: '8px' }}>🟦</span>
          <span style={{ marginLeft: '4px' }}>
            <Highlight attribute="title" hit={hit} />
          </span>
        </h5>
        <h6
          style={{
            fontSize: '12px',
            color: '#686868',
            fontWeight: 500,
            paddingTop: '0px',
            paddingBottom: '4px',
            paddingLeft: '24px',
          }}
        >
          {hit.slug}
        </h6>
        <p
          style={{
            fontSize: '12px',
            paddingBottom: '16px',
            paddingLeft: '24px',
          }}
        >
          <Highlight attribute="description" hit={hit} />
        </p>
      </a>
    </div>
  )
}

export default SearchReact
