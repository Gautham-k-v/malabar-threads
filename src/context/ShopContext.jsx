import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getProductById, products } from '../data/products';
import { readList, writeJSON } from '../utils/storage';

const ShopContext = createContext(null);

const CART_KEY = 'malabar-threads-cart';
const WISH_KEY = 'malabar-threads-wishlist';

function savedCart() {
  return readList(CART_KEY).filter(
    (item) => item && typeof item.id === 'string' && Number.isFinite(item.qty) && item.qty > 0,
  );
}

function savedWishlist() {
  return readList(WISH_KEY).filter((id) => typeof id === 'string');
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(savedCart);
  const [wishlist, setWishlist] = useState(savedWishlist);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [quickViewId, setQuickViewId] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    writeJSON(CART_KEY, cart);
  }, [cart]);

  useEffect(() => {
    writeJSON(WISH_KEY, wishlist);
  }, [wishlist]);

  useEffect(() => {
    const locked = cartOpen || wishlistOpen || searchOpen || menuOpen || Boolean(quickViewId);
    document.body.classList.toggle('scroll-lock', locked);
    return () => document.body.classList.remove('scroll-lock');
  }, [cartOpen, wishlistOpen, searchOpen, menuOpen, quickViewId]);

  const showToast = useCallback((message) => {
    setToast({ id: Date.now(), message });
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(null), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addToCart = useCallback(
    (id) => {
      setCart((current) => {
        const found = current.find((item) => item.id === id);
        if (found) {
          return current.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item));
        }
        return [...current, { id, qty: 1 }];
      });
      const product = getProductById(id);
      showToast(`${product?.name ?? 'Piece'} added to your bag`);
    },
    [showToast],
  );

  const updateQty = useCallback((id, qty) => {
    setCart((current) => {
      if (qty <= 0) return current.filter((item) => item.id !== id);
      return current.map((item) => (item.id === id ? { ...item, qty } : item));
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((current) => current.filter((item) => item.id !== id));
    const product = getProductById(id);
    showToast(`${product?.name ?? 'Piece'} removed from your bag`);
  }, [showToast]);

  const toggleWishlist = useCallback(
    (id) => {
      let saved = false;
      setWishlist((current) => {
        const exists = current.includes(id);
        saved = !exists;
        return exists ? current.filter((item) => item !== id) : [...current, id];
      });
      const product = getProductById(id);
      showToast(
        saved
          ? `${product?.name ?? 'Piece'} saved to wishlist`
          : `${product?.name ?? 'Piece'} removed from wishlist`,
      );
    },
    [showToast],
  );

  const closeOverlays = useCallback(() => {
    setCartOpen(false);
    setWishlistOpen(false);
    setSearchOpen(false);
    setMenuOpen(false);
  }, []);

  const openCart = useCallback(() => {
    setWishlistOpen(false);
    setSearchOpen(false);
    setMenuOpen(false);
    setCartOpen(true);
  }, []);

  const openWishlist = useCallback(() => {
    setCartOpen(false);
    setSearchOpen(false);
    setMenuOpen(false);
    setWishlistOpen(true);
  }, []);

  const openSearch = useCallback(() => {
    setCartOpen(false);
    setWishlistOpen(false);
    setMenuOpen(false);
    setSearchOpen(true);
  }, []);

  const openQuickView = useCallback((id) => {
    setCartOpen(false);
    setWishlistOpen(false);
    setSearchOpen(false);
    setMenuOpen(false);
    setQuickViewId(id);
  }, []);

  const openCategory = useCallback((slug) => {
    setActiveCategory(slug);
    setMenuOpen(false);
    setSearchOpen(false);
    window.requestAnimationFrame(() => {
      document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const cartDetailed = useMemo(
    () =>
      cart
        .map((item) => ({ ...item, product: getProductById(item.id) }))
        .filter((item) => item.product),
    [cart],
  );

  const cartCount = cartDetailed.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartDetailed.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  const wishlistProducts = useMemo(
    () => wishlist.map((id) => getProductById(id)).filter(Boolean),
    [wishlist],
  );

  const value = useMemo(
    () => ({
      products,
      cartDetailed,
      cartCount,
      cartTotal,
      wishlist,
      wishlistProducts,
      cartOpen,
      wishlistOpen,
      searchOpen,
      menuOpen,
      activeCategory,
      quickViewId,
      toast,
      setCartOpen,
      setWishlistOpen,
      setSearchOpen,
      setMenuOpen,
      setActiveCategory,
      setQuickViewId,
      addToCart,
      updateQty,
      removeFromCart,
      toggleWishlist,
      openCart,
      openWishlist,
      openSearch,
      openQuickView,
      openCategory,
      closeOverlays,
    }),
    [
      cartDetailed,
      cartCount,
      cartTotal,
      wishlist,
      wishlistProducts,
      cartOpen,
      wishlistOpen,
      searchOpen,
      menuOpen,
      activeCategory,
      quickViewId,
      toast,
      addToCart,
      updateQty,
      removeFromCart,
      toggleWishlist,
      openCart,
      openWishlist,
      openSearch,
      openQuickView,
      openCategory,
      closeOverlays,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within ShopProvider');
  }
  return context;
}
