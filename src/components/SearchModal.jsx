import { Search, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { useDialogDismiss } from '../utils/dialog';
import { formatINR } from '../utils/format';

export default function SearchModal() {
  const { searchOpen, setSearchOpen, openQuickView } = useShop();
  const panelRef = useRef(null);
  const [query, setQuery] = useState('');
  const closeSearch = useCallback(() => setSearchOpen(false), [setSearchOpen]);
  useDialogDismiss(searchOpen, closeSearch, panelRef);

  useEffect(() => {
    if (searchOpen) setQuery('');
  }, [searchOpen]);

  if (!searchOpen) return null;

  const needle = query.trim().toLowerCase();
  const results = needle
    ? products.filter((product) => `${product.name} ${product.category} ${product.fabric}`.toLowerCase().includes(needle))
    : products.filter((product) => product.groups.includes('new'));

  return (
    <div ref={panelRef} className="search-panel" role="dialog" aria-modal="true" aria-labelledby="search-title">
      <div className="container search-panel__inner">
        <div className="search-panel__bar">
          <h2 id="search-title" className="sr-only">
            Search the collection
          </h2>
          <Search size={18} strokeWidth={1.5} aria-hidden="true" />
          <input
            type="search"
            placeholder="Search sarees, kurtis, festive wear..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search products"
          />
          <button type="button" className="icon-btn" aria-label="Close search" onClick={closeSearch}>
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <p className="result-count">{needle ? `${results.length} matching pieces` : 'New this season'}</p>
        {results.length === 0 ? (
          <p className="empty-panel">No pieces match “{query.trim()}”. Try saree, kurti, or bridal.</p>
        ) : (
          <ul className="search-results">
            {results.map((product) => (
              <li key={product.id}>
                <button type="button" className="search-result" onClick={() => openQuickView(product.id)}>
                  <img src={product.image} alt="" style={{ objectPosition: product.imagePosition }} />
                  <span>
                    <strong>{product.name}</strong>
                    <em>{product.category}</em>
                  </span>
                  <span className="price">{formatINR(product.price)}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
