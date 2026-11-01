export type UserRole = 'customer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  avatarUrl?: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount?: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  website?: string;
  origin?: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  categoryId: string;
  brandId: string;
  stock: number;
  imageUrl: string;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
  sku: string;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface OrderItem {
  productId: string;
  productTitle: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  notes?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  tax: number;
  total: number;
  status: OrderStatus;
  shippingAddress: ShippingAddress;
  paymentMethod: 'Cash on Delivery' | 'bKash / Mobile Banking' | 'Credit / Debit Card';
  paymentStatus: 'Unpaid' | 'Paid';
  createdAt: string;
}

export type PageRoute = 
  | 'home' 
  | 'shop' 
  | 'about' 
  | 'contact' 
  | 'cart' 
  | 'checkout' 
  | 'user-dashboard' 
  | 'admin-dashboard' 
  | 'auth' 
  | 'django-code';
