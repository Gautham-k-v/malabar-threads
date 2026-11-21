import { X } from 'lucide-react';
import { useCallback, useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { useDialogDismiss } from '../utils/dialog';
import { formatINR } from '../utils/format';

export default function WishlistDrawer() {
  const {
    wishlistOpen,
    setWishlistOpen,
    wishlistProducts,
    toggleWishlist,
    addToCart,
    openQuickView,
    openCategory,
  } = useShop();
  const drawerRef = useRef(null);
  const closeWishlist = useCallback(() => setWishlistOpen(false), [setWishlistOpen]);
  useDialogDismiss(wishlistOpen, closeWishlist, drawerRef);

  if (!wishlistOpen) return null;

  return (
    <div className="drawer-root">
      <div className="drawer-backdrop" aria-hidden="true" onClick={closeWishlist} />
      <div ref={drawerRef} className="drawer" role="dialog" aria-modal="true" aria-labelledby="wish-title">
        <header className="drawer__head">
          <h2 id="wish-title">Wishlist</h2>
          <button type="button" className="icon-btn" aria-label="Close wishlist" onClick={closeWishlist}>
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </header>
        <div className="drawer__body">
          {wishlistProducts.length === 0 ? (
            <div className="empty-panel">
              <p>Nothing saved yet. Tap the heart on a piece you want to keep close.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setWishlistOpen(false);
                  openCategory('all');
                }}
              >
                Browse the collection
              </button>
            </div>
          ) : (
            <ul className="cart-list">
              {wishlistProducts.map((product) => (
                <li className="cart-item" key={product.id}>
                  <button type="button" className="cart-item__image" onClick={() => openQuickView(product.id)}>
                    <img src={product.image} alt="" style={{ objectPosition: product.imagePosition }} />
                  </button>
                  <div>
                    <p className="cart-item__name">{product.name}</p>
                    <p className="cart-item__price">{formatINR(product.price)}</p>
                    <div className="wish-actions">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => addToCart(product.id)}
                      >
                        Add to Cart
                      </button>
                      <button type="button" className="text-btn" onClick={() => toggleWishlist(product.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
