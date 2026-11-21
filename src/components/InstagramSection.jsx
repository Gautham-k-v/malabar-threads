import { FaInstagram } from 'react-icons/fa';
import { brand, instagramImages } from '../data/site';

export default function InstagramSection() {
  return (
    <section className="section instagram" aria-labelledby="instagram-title">
      <div className="container">
        <div className="section-head instagram__head">
          <div>
            <p className="eyebrow">05 — The Journal</p>
            <h2 className="section-title" id="instagram-title">
              Style Inspiration
            </h2>
            <p className="lede">Follow us for the latest trends, collections, and fashion inspiration.</p>
          </div>
          <a className="btn btn-ghost" href={brand.instagram} target="_blank" rel="noreferrer">
            <FaInstagram aria-hidden="true" />
            Follow on Instagram
          </a>
        </div>
        <div className="ig-grid">
          {instagramImages.map((image) => (
            <a
              key={image.src}
              className="ig-card"
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${image.alt}. Opens Instagram.`}
            >
              <img src={image.src} alt="" width="600" height="600" loading="lazy" />
              <span className="ig-card__overlay" aria-hidden="true">
                <FaInstagram aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
