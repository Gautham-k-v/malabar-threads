import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useShop } from '../context/ShopContext';
import { discountPercent, formatINR } from '../utils/format';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist, openQuickView } = useShop();
  const [added, setAdded] = useState(false);
  const wished = wishlist.includes(product.id);
  const discount = discountPercent(product.price, product.originalPrice);

  useEffect(() => {
    if (!added) return undefined;
    const timer = window.setTimeout(() => setAdded(false), 1400);
    return () => window.clearTimeout(timer);
  }, [added]);

  return (
    <article className="product-card">
      <div className="product-card__media">
        <button
          type="button"
          className="product-card__image-btn"
          aria-label={`View ${product.name}`}
          onClick={() => openQuickView(product.id)}
        >
          <img
            src={product.image}
            alt={product.alt}
            style={{ objectPosition: product.imagePosition }}
            width="800"
            height="1066"
            loading="lazy"
          />
        </button>
        {discount > 0 && <span className="discount-badge">{discount}% off</span>}
        <button
          type="button"
          className={`wish-btn ${wished ? 'is-active' : ''}`}
          aria-pressed={wished}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart size={18} strokeWidth={1.5} fill={wished ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>
      </div>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3>
          <button type="button" className="product-name" onClick={() => openQuickView(product.id)}>
            {product.name}
          </button>
        </h3>
        <p className="product-card__prices">
          <span className="price">{formatINR(product.price)}</span>
          {product.originalPrice > product.price && (
            <s className="price-original">
              <span className="sr-only">Original price </span>
              {formatINR(product.originalPrice)}
            </s>
          )}
        </p>
        <button type="button" className="btn btn-primary btn-block" onClick={() => {
          addToCart(product.id);
          setAdded(true);
        }}>
          {added ? 'Added to Bag' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}
