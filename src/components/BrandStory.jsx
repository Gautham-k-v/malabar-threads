import { useState } from 'react';
import { asset } from '../utils/asset';

export default function BrandStory() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section story" id="about" aria-labelledby="story-title">
      <div className="container story__grid">
        <div className="story__media">
          <img
            src={asset('images/kasavu.jpg')}
            alt="Woman in a cream Kerala saree with a gold border, standing in a garden"
            width="900"
            height="1125"
            loading="lazy"
          />
        </div>
        <div className="story__copy">
          <p className="eyebrow">03 — Our Story</p>
          <h2 className="section-title" id="story-title">
            Fashion That Celebrates You
          </h2>
          <div className="ornament" aria-hidden="true">
            <span />
            <i />
            <span />
          </div>
          <p className="lede">
            At Malabar Threads, we bring together timeless Indian traditions and modern fashion. Every collection is thoughtfully selected to celebrate the beauty, confidence, and individuality of every woman.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            Discover Our Story
          </button>
          {open && (
            <div className="story__more">
              <p>
                From a street in Pala, we edit cloth the way a good tailor looks at it: for fall, border, and the day it will be worn. Kasavu for Onam. Silk for a wedding in Kottayam. A kurti that still feels considered on a Monday.
              </p>
              <p>
                Nothing here is chosen only because it is loud. Come by between Monday and Saturday, and bring the occasion with you — we will pull the right drape.
              </p>
              <a className="text-link" href="#contact">
                Plan a visit
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
