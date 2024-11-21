import { liteClient as algoliasearch } from 'algoliasearch/lite'
import { useEffect, useRef, useState } from 'react'
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox,
  connectStats,
  Index,
} from 'react-instantsearch-dom'

import '../styles/components/search.scss'

const ALGOLIA_APP_ID = import.meta.env.PUBLIC_ALGOLIA_APP_ID || null;
const ALGOLIA_API_KEY = import.meta.env.PUBLIC_ALGOLIA_API_KEY || null;

const searchClient = ALGOLIA_APP_ID && ALGOLIA_API_KEY
  ? algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
  : null;

function Search() {
  const [searchVisibility, setSearchVisibility] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [debounceQuery, setSearchDebounceQuery] = useState('')
  const [displayHits, setDisplayHits] = useState(false)
  const debounceTimeoutRef = useRef(null)
  const searchWrapperRef = useRef(null)

  useEffect(() => {
    const toggleSearch = () => {
      setSearchVisibility(prev => {
        if (prev) {
          clearSearchState()
        }
        return !prev;
      });
    };

    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        toggleSearch()
      } else if (event.key === 'Escape') {
        clearSearchState()
        setSearchVisibility(false);
      }
    };

    const handleSearchClick = (event) => {
      if (event.target.closest('.search-click')) {
        event.preventDefault()
        event.stopPropagation()
        toggleSearch()
      }
    };

    const handleClickOutside = (event) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(event.target) &&
        !event.target.closest('.search-click')
      ) {
        clearSearchState()
        setSearchVisibility(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleSearchClick);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleSearchClick);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchVisibility && debounceQuery && displayHits) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [searchVisibility, debounceQuery, displayHits])

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }

    debounceTimeoutRef.current = setTimeout(() => {
      setSearchDebounceQuery(searchQuery)
    }, 400)

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  const clearSearchState = () => {
    setSearchQuery('')
    setSearchDebounceQuery('')
    setDisplayHits(false)
  };

  return (
    searchVisibility && (
      <div id="searchbox-wrapper" className="searchbox-wrapper" ref={searchWrapperRef}>
        <InstantSearch indexName="docs" searchClient={searchClient}>
          <SearchBox
            translations={{ placeholder: 'Search daytona.io' }}
            autoFocus
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
            value={searchQuery}
          />
          {debounceQuery && (
            <>
              <SearchIndex indexName="docs" setDisplayHits={setDisplayHits} setSearchVisibility={setSearchVisibility} />
              <SearchIndex indexName="blogs_test" setDisplayHits={setDisplayHits} setSearchVisibility={setSearchVisibility} />
            </>
          )}
          <Configure hitsPerPage={10} clickAnalytics getRankingInfo={false} />
        </InstantSearch>
      </div>
    )
  );
}

function SearchIndex({ indexName, setDisplayHits, setSearchVisibility }) {
  return (
    <Index indexName={indexName}>
      <div className="stats-pagination-wrapper" style={indexName === 'blogs_test' ? { marginTop: '24px' } : {}}>
        <Stats setDisplayHits={setDisplayHits} indexName={indexName} />
        <Pagination showFirst={false} showPrevious showNext showLast={false} padding={1} />
      </div>
      <Hits hitComponent={(props) => <Hit {...props} setSearchVisibility={setSearchVisibility} indexName={indexName} />} />
    </Index>
  );
}

function Hit({ hit, setSearchVisibility, indexName }) {
  const handleClick = () => {
    setSearchVisibility(false);
  };

  const hitUrl = indexName === 'blogs_test'
    ? `https://www.daytona.io/dotfiles/${hit.slug}`
    : hit.url;

  return (
    <div
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          window.location.href = hitUrl;
        }
      }}
    >
      <a href={hitUrl} tabIndex="-1" onClick={handleClick}>
        {indexName === 'blogs_test' && hit.featuredImage?.url && (
          <img
            src={hit.featuredImage.url}
            alt={hit.featuredImage.alt || 'Blog image'}
            style={{
              width: '100%',
              maxWidth: '500px',
              marginBottom: '12px',
              border: '1px solid var(--border-color)',
            }}
          />
        )}
        <h5 style={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', marginRight: '8px' }}>🟦</span>
          <span style={{ marginLeft: '4px' }}>
            <Highlight attribute="title" hit={hit} />
          </span>
        </h5>
        <h6 style={{ fontSize: '12px', color: '#686868', fontWeight: 500, paddingLeft: '24px' }}>
          {hit.slug}
        </h6>
        {indexName === 'blogs_test' && hit.author?.name && hit.publishedDate && (
          <p style={{ fontSize: '14px', paddingLeft: '24px', paddingBottom: '8px' }}>
            {hit.publishedDate} :: {hit.author.name}
          </p>
        )}
        <p style={{ fontSize: '12px', paddingBottom: '16px', paddingLeft: '24px' }}>
          <Highlight attribute="description" hit={hit} />
        </p>
      </a>
    </div>
  );
}

const CustomStats = ({ nbHits, indexName }) => (
  <div className="custom-stats">
    <span style={{ color: 'var(--primary-text-color)' }}>
      {indexName === 'docs' ? 'Documentation' : 'Blog'}
      {" "}
    </span>
    ({nbHits} results)
  </div>
);

const Stats = connectStats(CustomStats)

export default Search