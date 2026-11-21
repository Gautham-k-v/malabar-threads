import { Heart, X } from 'lucide-react';
import { useCallback, useRef } from 'react';
import { getProductById } from '../data/products';
import { useShop } from '../context/ShopContext';
import { useDialogDismiss } from '../utils/dialog';
import { discountPercent, formatINR } from '../utils/format';

export default function ProductModal() {
  const { quickViewId, setQuickViewId, addToCart, toggleWishlist, wishlist } = useShop();
  const cardRef = useRef(null);
  const product = quickViewId ? getProductById(quickViewId) : null;
  const closeQuickView = useCallback(() => setQuickViewId(null), [setQuickViewId]);
  useDialogDismiss(Boolean(product), closeQuickView, cardRef);

  if (!product) return null;

  const wished = wishlist.includes(product.id);
  const discount = discountPercent(product.price, product.originalPrice);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="quick-view-title">
      <div className="drawer-backdrop" aria-hidden="true" onClick={closeQuickView} />
      <div ref={cardRef} className="modal__card">
        <div className="modal__media">
          <img src={product.image} alt={product.alt} style={{ objectPosition: product.imagePosition }} />
        </div>
        <div className="modal__body">
          <button
            type="button"
            className="icon-btn modal__close"
            aria-label="Close product details"
            onClick={closeQuickView}
          >
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <p className="product-card__category">{product.category}</p>
          <h2 id="quick-view-title">{product.name}</h2>
          <p className="product-card__prices">
            <span className="price">{formatINR(product.price)}</span>
            {product.originalPrice > product.price && (
              <s className="price-original">
                <span className="sr-only">Original price </span>
                {formatINR(product.originalPrice)}
              </s>
            )}
            {discount > 0 && <span className="discount-badge discount-badge--inline">{discount}% off</span>}
          </p>
          <p className="modal__fabric">{product.fabric}</p>
          <p className="lede">{product.description}</p>
          <p className="modal__note">Available at the Pala boutique, and for delivery across Kerala.</p>
          <div className="modal__actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className={`btn btn-ghost ${wished ? 'is-active' : ''}`}
              aria-pressed={wished}
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart size={16} fill={wished ? 'currentColor' : 'none'} aria-hidden="true" />
              {wished ? 'Saved' : 'Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
