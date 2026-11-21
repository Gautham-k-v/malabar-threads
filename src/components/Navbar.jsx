import { Heart, Search, ShoppingBag } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { navItems } from '../data/site';
import { useShop } from '../context/ShopContext';
import { useDialogDismiss } from '../utils/dialog';

function bagLabel(count) {
  if (!count) return 'Open bag';
  return `Open bag, ${count} ${count === 1 ? 'item' : 'items'}`;
}

function wishlistLabel(count) {
  if (!count) return 'Open wishlist';
  return `Open wishlist, ${count} saved`;
}

export default function Navbar() {
  const {
    cartCount,
    wishlist,
    menuOpen,
    setMenuOpen,
    openCart,
    openWishlist,
    openSearch,
    activeCategory,
    setActiveCategory,
  } = useShop();
  const [activeSection, setActiveSection] = useState('top');
  const menuRef = useRef(null);
  const closeMenu = useCallback(() => setMenuOpen(false), [setMenuOpen]);
  useDialogDismiss(menuOpen, closeMenu, menuRef);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 981px)');
    function onChange(event) {
      if (event.matches) setMenuOpen(false);
    }
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [setMenuOpen]);

  useEffect(() => {
    const ids = ['top', 'collections', 'about', 'contact'];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.35, 0.6] },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const currentId =
    activeSection === 'top'
      ? 'home'
      : activeSection === 'about'
        ? 'about'
        : activeSection === 'contact'
          ? 'contact'
          : activeCategory === 'all'
            ? 'collections'
            : activeCategory;

  function handleNav(item) {
    if (item.category) setActiveCategory(item.category);
    if (item.id === 'home') setActiveCategory('all');
    setMenuOpen(false);
    if (item.id === 'home') setActiveSection('top');
    if (item.id === 'about') setActiveSection('about');
    if (item.id === 'contact') setActiveSection('contact');
    if (item.category || item.id === 'collections') setActiveSection('collections');
  }

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-bar container">
        <a className="logo" href="#top" onClick={() => handleNav(navItems[0])}>
          <strong>Malabar</strong>
          <small>Threads</small>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={currentId === item.id ? 'page' : undefined}
                onClick={() => handleNav(item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-tools">
          <button type="button" className="icon-btn" aria-label="Search the collection" onClick={openSearch}>
            <Search size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button type="button" className="icon-btn" aria-label={wishlistLabel(wishlist.length)} onClick={openWishlist}>
            <Heart size={20} strokeWidth={1.5} fill={wishlist.length ? 'currentColor' : 'none'} aria-hidden="true" />
            {wishlist.length > 0 && <span className="bag-count">{wishlist.length}</span>}
          </button>
          <button type="button" className="icon-btn" aria-label={bagLabel(cartCount)} onClick={openCart}>
            <ShoppingBag size={20} strokeWidth={1.5} aria-hidden="true" />
            {cartCount > 0 && <span className="bag-count">{cartCount}</span>}
          </button>
          <button
            type="button"
            className={`hamburger ${menuOpen ? 'is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
        id="mobile-nav"
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Menu"
        inert={!menuOpen}
        aria-hidden={!menuOpen}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                aria-current={currentId === item.id ? 'page' : undefined}
                onClick={() => handleNav(item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav__actions">
          <button type="button" onClick={openSearch}>
            Search
          </button>
          <button type="button" onClick={openWishlist}>
            Wishlist ({wishlist.length})
          </button>
          <button type="button" onClick={openCart}>
            Bag ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
}
