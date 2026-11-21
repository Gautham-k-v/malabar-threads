import { categoryCopy } from '../data/site';
import { getProductsByGroup } from '../data/products';
import { useShop } from '../context/ShopContext';
import ProductCard from './ProductCard';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'sarees', label: 'Sarees' },
  { id: 'kurtis', label: 'Kurtis' },
  { id: 'festive', label: 'Festive Wear' },
  { id: 'bridal', label: 'Bridal' },
];

export default function Collections() {
  const { activeCategory, setActiveCategory } = useShop();
  const copy = categoryCopy[activeCategory] ?? categoryCopy.all;
  const items = getProductsByGroup(activeCategory);

  return (
    <section className="section collections" id="collections" aria-labelledby="collections-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title" id="collections-title">
            {copy.title}
          </h2>
          <p className="lede">{copy.text}</p>
        </div>
        <div className="filters" role="toolbar" aria-label="Filter collection">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`filter-btn ${activeCategory === filter.id ? 'is-active' : ''}`}
              aria-pressed={activeCategory === filter.id}
              onClick={() => setActiveCategory(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <p className="result-count">
          Showing {items.length} {items.length === 1 ? 'piece' : 'pieces'}
        </p>
        <div className="product-grid">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
