import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { brand } from '../data/site';
import { MAPS_DIRECTIONS_URL, whatsappLink } from '../utils/format';
import { readList, writeJSON } from '../utils/storage';

const ENQUIRY_KEY = 'malabar-threads-enquiries';

const emptyForm = { name: '', phone: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  const digits = values.phone.replace(/\D/g, '');
  if (digits.length < 10) errors.phone = 'Enter a 10-digit mobile number.';
  if (values.message.trim().length < 12) errors.message = 'Tell us a little more — at least a sentence.';
  return errors;
}

export default function ContactSection() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSuccess('');
      return;
    }

    const notes = readList(ENQUIRY_KEY);
    writeJSON(ENQUIRY_KEY, [
      ...notes,
      {
        name: values.name.trim(),
        phone: values.phone.trim(),
        message: values.message.trim(),
        createdAt: new Date().toISOString(),
      },
    ]);
    setValues(emptyForm);
    setSuccess('Saved on this device. This preview does not send the note to the boutique.');
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">06 — Visit</p>
          <h2 className="section-title" id="contact-title">
            {brand.name}
          </h2>
          <p className="lede">The boutique is in Pala. Call, write, or send a note before you come by.</p>
        </div>

        <div className="contact__grid">
          <div>
            <ul className="contact-list">
              <li>
                <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <span>Location</span>
                  <strong>{brand.location}</strong>
                </div>
              </li>
              <li>
                <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <span>Phone</span>
                  <a href={`tel:${brand.phoneTel}`}>{brand.phoneDisplay}</a>
                </div>
              </li>
              <li>
                <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <span>Email</span>
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                </div>
              </li>
              <li>
                <Clock size={18} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <span>Business Hours</span>
                  {brand.hours.map((line) => (
                    <strong key={line}>{line}</strong>
                  ))}
                </div>
              </li>
            </ul>
            <div className="contact__actions">
              <a
                className="btn btn-primary"
                href={whatsappLink('Hello Malabar Threads, I would like to know more about your collection.')}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp Us
              </a>
              <a className="btn btn-ghost" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </div>
          </div>

          <div className="contact__aside">
            <div className="map-frame">
              <iframe
                title="Map showing Pala, Kottayam, Kerala"
                src="https://maps.google.com/maps?q=Pala%2C%20Kottayam%2C%20Kerala&z=13&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <form className="enquiry" onSubmit={handleSubmit} noValidate>
          <div className="enquiry__intro">
            <h3>Write to the boutique</h3>
            <p>Ask about a saree, a size, or a visit. The note stays in this browser until the boutique can receive it.</p>
          </div>
          <div className="enquiry__fields">
            <label>
              Name
              <input
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(event) => update('name', event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
              />
              {errors.name && (
                <span id="enquiry-name-error" className="form-error" role="alert">
                  {errors.name}
                </span>
              )}
            </label>
            <label>
              Phone
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={values.phone}
                onChange={(event) => update('phone', event.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
              />
              {errors.phone && (
                <span id="enquiry-phone-error" className="form-error" role="alert">
                  {errors.phone}
                </span>
              )}
            </label>
            <label className="enquiry__message">
              Message
              <textarea
                name="message"
                rows="4"
                value={values.message}
                onChange={(event) => update('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
              />
              {errors.message && (
                <span id="enquiry-message-error" className="form-error" role="alert">
                  {errors.message}
                </span>
              )}
            </label>
          </div>
          <div className="enquiry__submit">
            <button type="submit" className="btn btn-primary">
              Save a Note
            </button>
            {success && (
              <p className="form-success" role="status">
                {success}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
