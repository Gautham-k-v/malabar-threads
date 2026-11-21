import { getProductsByGroup } from '../data/products';
import ProductCard from './ProductCard';

export default function NewArrivals() {
  const arrivals = getProductsByGroup('new');

  return (
    <section className="section new-arrivals" id="new-arrivals" aria-labelledby="arrivals-title">
      <div className="container">
        <div className="section-head section-head--row">
          <div>
            <p className="eyebrow">02 — Just In</p>
            <h2 className="section-title" id="arrivals-title">
              New Arrivals
            </h2>
            <p className="lede">The festive edit, freshly opened in the Pala boutique.</p>
          </div>
        </div>
        <div className="product-grid">
          {arrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
