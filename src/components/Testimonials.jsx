import { Star } from 'lucide-react';
import { testimonials } from '../data/site';

function Stars({ rating }) {
  return (
    <div className="testimonial__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={16}
          strokeWidth={1.5}
          fill={index < rating ? 'currentColor' : 'none'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">04 — From the Boutique</p>
          <h2 className="section-title" id="testimonials-title">
            Customer Testimonials
          </h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <figure className="testimonial" key={item.id}>
              <Stars rating={item.rating} />
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <figcaption>
                <span className="testimonial__name">{item.name}</span>
                <span className="testimonial__place">{item.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
