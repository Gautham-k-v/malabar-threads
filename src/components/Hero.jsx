import { useShop } from '../context/ShopContext';
import { asset } from '../utils/asset';

export default function Hero() {
  const { openCategory } = useShop();

  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <p className="eyebrow">Pala, Kottayam</p>
        <h1>
          Elegance in <em>Every</em> Thread
        </h1>
        <p className="lede">Discover timeless Indian fashion crafted for every beautiful occasion.</p>
        <div className="hero__actions">
          <a
            className="btn btn-primary"
            href="#collections"
            onClick={(event) => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
              event.preventDefault();
              openCategory('all');
            }}
          >
            Explore Collection
          </a>
          <a className="btn btn-ghost" href="#new-arrivals">
            Shop Now
          </a>
        </div>
        <ul className="hero__notes">
          <li>Sarees</li>
          <li>Kurtis</li>
          <li>Bridal</li>
        </ul>
      </div>
      <div className="hero__media">
        <img
          src={asset('images/hero.jpg')}
          alt="Woman in a red and gold silk saree with temple jewellery, seated between trees"
          width="1200"
          height="1600"
          fetchPriority="high"
        />
        <p className="hero__caption">The Festive Edit</p>
      </div>
    </section>
  );
}
