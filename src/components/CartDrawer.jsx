import { Minus, Plus, X } from 'lucide-react';
import { useCallback, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';
import { useDialogDismiss } from '../utils/dialog';
import { FREE_DELIVERY_THRESHOLD, formatINR, orderMessage, whatsappLink } from '../utils/format';

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cartDetailed, cartTotal, updateQty, removeFromCart, openCategory } = useShop();
  const drawerRef = useRef(null);
  const closeCart = useCallback(() => setCartOpen(false), [setCartOpen]);
  const remaining = FREE_DELIVERY_THRESHOLD - cartTotal;
  useDialogDismiss(cartOpen, closeCart, drawerRef);

  if (!cartOpen) return null;

  return (
    <div className="drawer-root">
      <div className="drawer-backdrop" aria-hidden="true" onClick={closeCart} />
      <div ref={drawerRef} className="drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <header className="drawer__head">
          <h2 id="cart-title">Your Bag</h2>
          <button type="button" className="icon-btn" aria-label="Close bag" onClick={closeCart}>
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </header>
        <div className="drawer__body">
          {cartDetailed.length === 0 ? (
            <div className="empty-panel">
              <p>Your bag is empty.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setCartOpen(false);
                  openCategory('all');
                }}
              >
                Browse the collection
              </button>
            </div>
          ) : (
            <ul className="cart-list">
              {cartDetailed.map((item) => (
                <li className="cart-item" key={item.id}>
                  <img src={item.product.image} alt="" style={{ objectPosition: item.product.imagePosition }} />
                  <div>
                    <p className="cart-item__name">{item.product.name}</p>
                    <p className="cart-item__price">{formatINR(item.product.price)}</p>
                    <div className="qty">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.product.name}`}
                        onClick={() => updateQty(item.id, item.qty - 1)}
                      >
                        <Minus size={14} aria-hidden="true" />
                      </button>
                      <span>{item.qty}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.product.name}`}
                        onClick={() => updateQty(item.id, item.qty + 1)}
                      >
                        <Plus size={14} aria-hidden="true" />
                      </button>
                    </div>
                    <button type="button" className="text-btn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cartDetailed.length > 0 && (
          <footer className="drawer__foot">
            <p className="delivery-note">
              {remaining > 0
                ? `Add ${formatINR(remaining)} more for free delivery.`
                : 'Free delivery is included on this order.'}
            </p>
            <div className="drawer__total">
              <span>Subtotal</span>
              <strong>{formatINR(cartTotal)}</strong>
            </div>
            <a
              className="btn btn-primary btn-block"
              href={whatsappLink(orderMessage(cartDetailed, cartTotal))}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              Request on WhatsApp
            </a>
            <button type="button" className="btn btn-ghost btn-block" onClick={() => setCartOpen(false)}>
              Continue Shopping
            </button>
          </footer>
        )}
      </div>
    </div>
  );
}
