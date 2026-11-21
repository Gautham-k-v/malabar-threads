import { useShop } from '../context/ShopContext';
import { asset } from '../utils/asset';

export default function FestiveBanner() {
  const { openCategory } = useShop();

  return (
    <section className="festive" aria-labelledby="festive-title">
      <img
        src={asset('images/banner.jpg')}
        alt="Bride in a crimson and gold lehenga, photographed from above amid heavy embroidery"
        width="1600"
        height="1066"
        loading="lazy"
      />
      <div className="festive__shade" />
      <span className="festive__frame festive__frame--tl" aria-hidden="true" />
      <span className="festive__frame festive__frame--br" aria-hidden="true" />
      <div className="container festive__content">
        <div className="festive__copy">
          <p className="eyebrow eyebrow--light">The Festive Collection</p>
          <h2 id="festive-title">Celebrate Every Occasion</h2>
          <p>
            Discover our specially curated festive collection designed to make every moment unforgettable.
          </p>
          <button type="button" className="btn btn-light" onClick={() => openCategory('festive')}>
            Explore Festive Collection
          </button>
        </div>
      </div>
    </section>
  );
}
