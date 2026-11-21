export const WHATSAPP_NUMBER = '919876543210';
export const FREE_DELIVERY_THRESHOLD = 2999;

export const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Pala%2C%20Kottayam%2C%20Kerala';

export function formatINR(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function discountPercent(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(items, total) {
  const lines = items.map(
    (item) =>
      `• ${item.product.name} × ${item.qty} — ${formatINR(item.product.price * item.qty)}`,
  );
  return `Hello Malabar Threads, I would like to order:\n${lines.join('\n')}\n\nTotal: ${formatINR(total)}\n\nName:\nDelivery town:`;
}
