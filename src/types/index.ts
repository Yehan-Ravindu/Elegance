export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'gents' | 'ladies' | 'kids';
  size?: string[];
  color?: string[];
  featured?: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  size?: string;
  color?: string;
}

export type UserRole = 'admin' | 'delivery' | 'customer';

export interface User {
  id: string;
  username: string;
  role: UserRole;
}