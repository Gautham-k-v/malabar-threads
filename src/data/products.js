import { asset } from '../utils/asset';

export const products = [
  {
    id: 'floral-anarkali',
    name: 'Floral Anarkali Set',
    price: 2499,
    originalPrice: 3299,
    category: 'Festive Wear',
    groups: ['new', 'festive'],
    image: asset('images/kurti-print.jpg'),
    imagePosition: 'center 20%',
    fabric: 'Cotton silk with dupatta',
    alt: 'Woman in a colourful festive kurti and bright green dupatta with traditional jewellery',
    description:
      'A printed festive set with a soft dupatta, chosen for Onam evenings and family gatherings. The colours are lively without shouting, and the fall is comfortable enough to wear through a long function.',
  },
  {
    id: 'premium-silk',
    name: 'Premium Silk Saree',
    price: 4999,
    originalPrice: 6499,
    category: 'Sarees',
    groups: ['new', 'sarees'],
    image: asset('images/saree-purple.jpg'),
    imagePosition: 'center 15%',
    fabric: 'Silk',
    alt: 'Woman standing in a plum silk saree with a wide gold border',
    description:
      'A deep plum silk with a broad gold border — the saree Pala families ask for when the invitation says wedding or temple. It drapes cleanly and holds its colour in daylight.',
  },
  {
    id: 'elegant-kurti',
    name: 'Elegant Kurti Set',
    price: 1899,
    originalPrice: 2499,
    category: 'Kurtis',
    groups: ['new', 'kurtis'],
    image: asset('images/kurti-studio.jpg'),
    imagePosition: 'center 30%',
    fabric: 'Silk blend with dupatta',
    alt: 'Full-length studio portrait of a woman in a fuchsia kurti set and dupatta',
    description:
      'An easy set with a straight kurti, narrow pants, and a sheer dupatta. Made for days that begin at home and end with a visit — polished, breathable, and simple to drape.',
  },
  {
    id: 'festive-lehenga',
    name: 'Festive Lehenga',
    price: 6999,
    originalPrice: 8499,
    category: 'Bridal & Festive',
    groups: ['new', 'festive', 'bridal'],
    image: asset('images/lehenga.jpg'),
    imagePosition: 'center 25%',
    fabric: 'Net and silk',
    alt: 'Woman in a rose and purple embroidered lehenga with a pink dupatta',
    description:
      'A flared lehenga in rose and gold, embroidered for sangeet nights and festive gatherings. The skirt moves, the blouse is finished, and the dupatta is light enough for a Kerala evening.',
  },
  {
    id: 'kasavu-saree',
    name: 'Kasavu Kerala Saree',
    price: 3599,
    originalPrice: 4299,
    category: 'Sarees',
    groups: ['sarees', 'festive'],
    image: asset('images/kasavu.jpg'),
    imagePosition: 'center 30%',
    fabric: 'Cotton silk',
    alt: 'Woman in a cream Kerala saree with a gold border, looking back in a garden',
    description:
      'Ivory with a gold border — the Kerala saree we keep for Onam, a first visit home, and the days that should feel unhurried. A quiet piece with a clear identity.',
  },
  {
    id: 'temple-border',
    name: 'Temple Border Silk',
    price: 8999,
    originalPrice: 10999,
    category: 'Sarees',
    groups: ['sarees', 'bridal'],
    image: asset('images/silk-green.jpg'),
    imagePosition: 'center 20%',
    fabric: 'Silk',
    alt: 'Woman wrapped in a sage silk saree with a dense red and gold temple border',
    description:
      'Sage silk framed by a dense zari border. It is the kind of saree pulled for a bridal morning or a muhurtham, when the border should be seen before the jewellery is.',
  },
  {
    id: 'ivory-zari',
    name: 'Ivory Zari Saree',
    price: 7499,
    originalPrice: 9299,
    category: 'Sarees',
    groups: ['sarees', 'festive'],
    image: asset('images/saree-ivory.jpg'),
    imagePosition: 'center 18%',
    fabric: 'Silk with sheer blouse',
    alt: 'Woman in an ivory and gold saree with a sheer embroidered blouse, standing in sunlight',
    description:
      'A luminous ivory saree with gold chevrons and a sheer embroidered sleeve. Reception light suits it. So does a late afternoon function outdoors.',
  },
  {
    id: 'teal-brocade',
    name: 'Teal Brocade Saree',
    price: 6299,
    originalPrice: 7999,
    category: 'Sarees',
    groups: ['sarees', 'festive'],
    image: asset('images/silk-teal.jpg'),
    imagePosition: 'center 15%',
    fabric: 'Brocade silk',
    alt: 'Woman in a teal and gold brocade saree at a decorated function',
    description:
      'Teal brocade shot with gold motifs. A reception saree that holds the light, with enough weight in the pallu to drape once and stay.',
  },
  {
    id: 'floral-kurti',
    name: 'Floral Cotton Kurti',
    price: 1499,
    originalPrice: 1999,
    category: 'Kurtis',
    groups: ['kurtis'],
    image: asset('images/kurti-red.jpg'),
    imagePosition: 'center 22%',
    fabric: 'Cotton',
    alt: 'Woman in a red floral kurti standing in a green garden',
    description:
      'A red cotton kurti scattered with small flowers and a neat embroidered placket. Everyday cloth, cut so it still looks dressed when you step out in Pala.',
  },
  {
    id: 'rose-kurti',
    name: 'Rose Threadwork Kurti',
    price: 1699,
    originalPrice: 2199,
    category: 'Kurtis',
    groups: ['kurtis'],
    image: asset('images/kurti-pink.jpg'),
    imagePosition: 'center 18%',
    fabric: 'Cotton',
    alt: 'Woman in a rose pink kurti with white thread embroidery',
    description:
      'Rose cotton with white threadwork down the front and hem. A kurti for workdays, college functions, and the errands that still deserve a good neckline.',
  },
  {
    id: 'blush-bridal',
    name: 'Blush Bridal Lehenga',
    price: 18999,
    originalPrice: 22999,
    category: 'Bridal',
    groups: ['bridal'],
    image: asset('images/bridal-pink.jpg'),
    imagePosition: 'center',
    fabric: 'Embroidered net',
    alt: 'Blush bridal lehenga with heavy embroidery, jasmine garlands, and henna',
    description:
      'A blush lehenga worked in silver thread, finished with jasmine. Made for the bridal function where the hands, the skirt, and the light should agree.',
  },
  {
    id: 'kerala-bridal',
    name: 'Kerala Bridal Gown',
    price: 12999,
    originalPrice: 15999,
    category: 'Bridal',
    groups: ['bridal'],
    image: asset('images/bridal-kerala.jpg'),
    imagePosition: 'center 20%',
    fabric: 'Lace',
    alt: 'Bride in a white lace gown and veil with henna on her hands',
    description:
      'For the Christian weddings of Kottayam — lace, a soft veil, and a quiet silhouette. Henna optional. The gown is cut to be worn through a long service and a longer lunch.',
  },
  {
    id: 'crimson-bridal',
    name: 'Crimson Bridal Lehenga',
    price: 24999,
    originalPrice: 28999,
    category: 'Bridal',
    groups: ['bridal', 'festive'],
    image: asset('images/banner.jpg'),
    imagePosition: 'center',
    fabric: 'Embroidered silk',
    alt: 'Bride in a crimson and gold lehenga, photographed from above',
    description:
      'A crimson bridal lehenga dense with gold. It is the piece we bring out when the wedding asks for red, and when the embroidery should be visible from across the mandap.',
  },
];

export function getProductsByGroup(group) {
  if (!group || group === 'all') return products;
  return products.filter((product) => product.groups.includes(group));
}

export function getProductById(id) {
  return products.find((product) => product.id === id) ?? null;
}
