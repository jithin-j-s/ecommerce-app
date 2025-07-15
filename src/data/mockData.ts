import { Product } from '../types';

export const VALID_CREDENTIALS = {
  username: 'user',
  password: '123456'
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    description: 'Premium wireless headphones with noise cancellation'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    description: 'Advanced smartwatch with health monitoring'
  },
  {
    id: 3,
    name: 'Laptop',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
    description: 'High-performance laptop for work and gaming'
  },
  {
    id: 4,
    name: 'Smartphone',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
    description: 'Latest smartphone with advanced camera'
  },
  {
    id: 5,
    name: 'Tablet',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop',
    description: 'Portable tablet for work and entertainment'
  },
  {
    id: 6,
    name: 'Gaming Console',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop',
    description: 'Next-gen gaming console with 4K support'
  }
];