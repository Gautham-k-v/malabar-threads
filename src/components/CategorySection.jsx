import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data/site';
import { useShop } from '../context/ShopContext';

export default function CategorySection() {
  const { openCategory } = useShop();

  return (
    <section className="section" id="categories" aria-labelledby="categories-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">01 — The Edit</p>
          <h2 className="section-title" id="categories-title">
            Featured Categories
          </h2>
          <p className="lede">
            Four rooms of the boutique: silk and kasavu, everyday kurtis, festive colour, and the clothes kept for a wedding.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.slug}>
              <img src={category.image} alt={category.alt} width="800" height="1066" />
              <div className="category-card__body">
                <h3>{category.name}</h3>
                <button
                  type="button"
                  className="category-card__explore"
                  aria-label={`Explore ${category.name}`}
                  onClick={() => openCategory(category.slug)}
                >
                  Explore
                  <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
