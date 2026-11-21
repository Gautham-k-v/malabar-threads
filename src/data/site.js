import { asset } from '../utils/asset';

export const brand = {
  name: 'MALABAR THREADS',
  tagline: 'Tradition Woven with Elegance',
  location: 'Pala, Kottayam, Kerala',
  phoneDisplay: '+91 98765 43210',
  phoneTel: '+919876543210',
  email: 'hello@malabarthreads.in',
  instagram: 'https://www.instagram.com/malabarthreads.in',
  facebook: 'https://www.facebook.com/malabarthreads.in',
  hours: [
    'Monday – Saturday: 10:00 AM – 8:00 PM',
    'Sunday: 11:00 AM – 6:00 PM',
  ],
  description:
    'A women’s fashion boutique in Pala, editing sarees, kurtis, festive wear, and bridal clothing for the ceremonies and ordinary days of Kerala.',
};

export const navItems = [
  { id: 'home', label: 'Home', href: '#top' },
  { id: 'collections', label: 'Collections', href: '#collections', category: 'all' },
  { id: 'sarees', label: 'Sarees', href: '#collections', category: 'sarees' },
  { id: 'kurtis', label: 'Kurtis', href: '#collections', category: 'kurtis' },
  { id: 'festive', label: 'Festive Wear', href: '#collections', category: 'festive' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const categories = [
  {
    slug: 'sarees',
    name: 'Elegant Sarees',
    image: asset('images/saree-purple.jpg'),
    alt: 'Woman in a plum silk saree with a broad gold border against a red studio backdrop',
  },
  {
    slug: 'kurtis',
    name: 'Kurti Collections',
    image: asset('images/kurti-studio.jpg'),
    alt: 'Woman in a fuchsia kurti set with a sheer dupatta in a studio',
  },
  {
    slug: 'festive',
    name: 'Festive Wear',
    image: asset('images/lehenga.jpg'),
    alt: 'Woman in a rose and gold embroidered lehenga with a flowing dupatta',
  },
  {
    slug: 'bridal',
    name: 'Bridal Elegance',
    image: asset('images/bridal-pink.jpg'),
    alt: 'Close view of a blush bridal lehenga with jasmine strings and henna-painted hands',
  },
];

export const categoryCopy = {
  all: {
    eyebrow: 'The Shop',
    title: 'The Collection',
    text: 'Sarees, kurtis, and occasion wear edited in Pala for the way Kerala dresses — temple mornings, weddings, and an ordinary beautiful day.',
  },
  sarees: {
    eyebrow: 'Sarees',
    title: 'Sarees',
    text: 'Silks, kasavu, and brocade, chosen for drape and border. For a wedding morning, Onam, or the saree you keep for years.',
  },
  kurtis: {
    eyebrow: 'Kurtis',
    title: 'Kurtis',
    text: 'Sets for the week: threadwork, soft cotton, and colours that still feel considered after breakfast.',
  },
  festive: {
    eyebrow: 'Festive Wear',
    title: 'Festive Wear',
    text: 'Anarkalis, lehengas, and sarees for Onam, sangeet, and the evenings that ask for a little more.',
  },
  bridal: {
    eyebrow: 'Bridal',
    title: 'Bridal Elegance',
    text: 'Bridal lehengas, temple-border silks, and Kerala wedding gowns, pulled for the ceremonies that mark a family.',
  },
};

export const testimonials = [
  {
    id: 'anjali',
    quote: 'I absolutely loved the collection! The quality and design were beautiful.',
    name: 'Anjali Thomas',
    place: 'Kottayam',
    rating: 5,
  },
  {
    id: 'meera',
    quote: 'Perfect outfits for every occasion. The staff was incredibly helpful.',
    name: 'Meera Krishnan',
    place: 'Pala',
    rating: 5,
  },
  {
    id: 'riya',
    quote: 'One of the best boutiques in Pala. Definitely coming back!',
    name: 'Riya Mathew',
    place: 'Ettumanoor',
    rating: 5,
  },
];

export const instagramImages = [
  {
    src: asset('images/hero.jpg'),
    alt: 'Woman in a red and gold silk saree seated between trees',
  },
  {
    src: asset('images/silk-green.jpg'),
    alt: 'Close portrait of a woman draped in a sage silk saree with a temple border',
  },
  {
    src: asset('images/lehenga.jpg'),
    alt: 'Festive lehenga in rose and gold, worn with a sheer dupatta',
  },
  {
    src: asset('images/kurti-pink.jpg'),
    alt: 'Woman in a pink embroidered kurti on a city street',
  },
  {
    src: asset('images/saree-ivory.jpg'),
    alt: 'Woman in an ivory and gold zari saree in warm evening light',
  },
  {
    src: asset('images/portrait.jpg'),
    alt: 'Close portrait of a woman in a saffron saree pallu',
  },
];
