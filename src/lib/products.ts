import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

import type { Product } from './store';

export const products: Product[] = [
  {
    id: '1',
    name: 'Lavender Ceramic Mug',
    price: 34.99,
    description: 'Handcrafted ceramic mug with a beautiful lavender glaze. Perfect for your morning coffee or evening tea.',
    image: product1,
    category: 'Ceramics',
  },
  {
    id: '2',
    name: 'Macrame Wall Hanging',
    price: 79.99,
    description: 'Elegant handwoven macrame wall hanging with lavender accents. Adds a bohemian touch to any room.',
    image: product2,
    category: 'Home Decor',
  },
  {
    id: '3',
    name: 'Lavender Soy Candle',
    price: 28.99,
    description: 'Hand-poured soy wax candle with natural lavender essential oils. Burns clean for up to 40 hours.',
    image: product3,
    category: 'Candles',
  },
  {
    id: '4',
    name: 'Amethyst Crystal Bracelet',
    price: 45.99,
    description: 'Stunning handcrafted bracelet featuring genuine amethyst gemstones with gold accents.',
    image: product4,
    category: 'Jewelry',
  },
];
