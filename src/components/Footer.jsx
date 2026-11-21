import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import { brand, navItems } from '../data/site';
import { useShop } from '../context/ShopContext';
import { readList, writeJSON } from '../utils/storage';

const NEWSLETTER_KEY = 'malabar-threads-newsletter';

export default function Footer() {
  const { setActiveCategory } = useShop();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const value = email.trim();
    if (!value) {
      setSuccess('');
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setSuccess('');
      setError('Enter a valid email, like name@email.com.');
      return;
    }

    const list = readList(NEWSLETTER_KEY).filter((item) => item && typeof item.email === 'string');
    const already = list.some((item) => item.email.toLowerCase() === value.toLowerCase());
    if (!already) {
      writeJSON(NEWSLETTER_KEY, [...list, { email: value, savedAt: new Date().toISOString() }]);
    }
    setEmail('');
    setError('');
    setSuccess(
      already
        ? 'This address is already saved in this browser. No email was sent.'
        : 'Saved in this browser only. This preview does not send email or join a mailing list.',
    );
  }

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="logo logo--light" href="#top" onClick={() => setActiveCategory('all')}>
            <strong>Malabar</strong>
            <small>Threads</small>
          </a>
          <p>{brand.description}</p>
          <p className="footer__tagline">{brand.tagline}</p>
          <div className="socials">
            <a href={brand.instagram} target="_blank" rel="noreferrer" aria-label="Malabar Threads on Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
            <a href={brand.facebook} target="_blank" rel="noreferrer" aria-label="Malabar Threads on Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <p className="footer-title">Quick Links</p>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => {
                    if (item.category) setActiveCategory(item.category);
                    if (item.id === 'home') setActiveCategory('all');
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-title">Shop Categories</p>
          <ul>
            {[
              ['sarees', 'Sarees'],
              ['kurtis', 'Kurtis'],
              ['festive', 'Festive Wear'],
              ['bridal', 'Bridal Wear'],
            ].map(([slug, label]) => (
              <li key={slug}>
                <a href="#collections" onClick={() => setActiveCategory(slug)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-title">Contact</p>
          <ul className="footer-contact">
            <li>{brand.location}</li>
            <li>
              <a href={`tel:${brand.phoneTel}`}>{brand.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`}>{brand.email}</a>
            </li>
            {brand.hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container newsletter-wrap">
        <div>
          <p className="footer-title">Newsletter</p>
          <p>Save an address on this device for a future list. Nothing is emailed from this preview.</p>
        </div>
        {success ? (
          <p className="form-success" role="status">
            {success}
          </p>
        ) : (
          <form className="newsletter" onSubmit={handleSubmit} noValidate>
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email address"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError('');
              }}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'newsletter-error' : undefined}
            />
            <button type="submit" className="btn btn-light">
              Save email
            </button>
            {error && (
              <p id="newsletter-error" className="form-error" role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>

      <div className="container footer__legal">
        <p>© {new Date().getFullYear()} Malabar Threads. Pala, Kottayam.</p>
        <p>Photography via Unsplash and Pexels.</p>
      </div>
    </footer>
  );
}
