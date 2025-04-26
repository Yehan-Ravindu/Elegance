import { Product } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const products: Product[] = [
  {
    id: uuidv4(),
    name: 'Classic Leather Jacket',
    description: 'A timeless leather jacket crafted from premium materials. Perfect for any casual occasion.',
    price: 199.99,
    imageUrl: 'https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'gents',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Black', 'Brown'],
    featured: true
  },
  {
    id: uuidv4(),
    name: 'Slim-Fit Dress Shirt',
    description: 'A sophisticated dress shirt designed for a modern, slim fit. Made from breathable cotton.',
    price: 59.99,
    imageUrl: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'gents',
    size: ['S', 'M', 'L', 'XL'],
    color: ['White', 'Blue', 'Black']
  },
  {
    id: uuidv4(),
    name: 'Tailored Suit',
    description: 'Expertly tailored suit made from premium wool blend. Perfect for formal occasions.',
    price: 349.99,
    imageUrl: 'https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'gents',
    size: ['48R', '50R', '52R', '54R'],
    color: ['Navy', 'Charcoal', 'Black'],
    featured: true
  },
  {
    id: uuidv4(),
    name: 'Elegant Evening Gown',
    description: 'A stunning floor-length evening gown with delicate embellishments. Perfect for special occasions.',
    price: 249.99,
    imageUrl: 'https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'ladies',
    size: ['XS', 'S', 'M', 'L'],
    color: ['Black', 'Red', 'Navy'],
    featured: true
  },
  {
    id: uuidv4(),
    name: 'Designer Handbag',
    description: 'A luxury handbag crafted from genuine leather with gold-tone hardware.',
    price: 179.99,
    imageUrl: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'ladies',
    color: ['Black', 'Tan', 'Red']
  },
  {
    id: uuidv4(),
    name: 'Cashmere Sweater',
    description: 'Luxuriously soft cashmere sweater. Elegant, comfortable, and warm.',
    price: 129.99,
    imageUrl: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'ladies',
    size: ['XS', 'S', 'M', 'L'],
    color: ['Cream', 'Gray', 'Black', 'Navy']
  },
  {
    id: uuidv4(),
    name: 'Children\'s Party Dress',
    description: 'A charming party dress for special occasions. Features delicate details and a comfortable fit.',
    price: 49.99,
    imageUrl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kids',
    size: ['2T', '3T', '4T', '5'],
    color: ['Pink', 'Blue', 'White'],
    featured: true
  },
  {
    id: uuidv4(),
    name: 'Boys\' Denim Jeans',
    description: 'Durable denim jeans perfect for active kids. Features reinforced knees and adjustable waist.',
    price: 34.99,
    imageUrl: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kids',
    size: ['4', '5', '6', '7', '8'],
    color: ['Blue', 'Black']
  },
  {
    id: uuidv4(),
    name: 'Kids\' Sneakers',
    description: 'Comfortable and durable sneakers perfect for everyday wear and play.',
    price: 39.99,
    imageUrl: 'https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kids',
    size: ['10', '11', '12', '13', '1', '2', '3'],
    color: ['Blue/White', 'Black/Red', 'Pink/Purple']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};