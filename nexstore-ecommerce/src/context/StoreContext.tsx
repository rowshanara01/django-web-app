import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  User, 
  Product, 
  Category, 
  Brand, 
  Order, 
  CartItem, 
  PageRoute, 
  ShippingAddress, 
  OrderStatus 
} from '../types';
import { 
  INITIAL_CATEGORIES, 
  INITIAL_BRANDS, 
  INITIAL_PRODUCTS, 
  INITIAL_ORDERS, 
  INITIAL_USERS 
} from '../data/initialData';

interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface StoreContextType {
  // Navigation
  currentRoute: PageRoute;
  setCurrentRoute: (route: PageRoute) => void;
  selectedCategoryFilter: string | null;
  setSelectedCategoryFilter: (catSlug: string | null) => void;
  selectedBrandFilter: string | null;
  setSelectedBrandFilter: (brandSlug: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // Auth
  currentUser: User | null;
  allUsers: User[];
  isSuperAdminInitialized: boolean;
  setupSuperAdminOnce: (name: string, email: string, password: string) => { success: boolean; message: string };
  registerUser: (name: string, email: string, password: string) => { success: boolean; message: string };
  login: (email: string, password: string) => { success: boolean; message: string };
  logout: () => void;
  resetPassword: (email: string, newPassword: string) => { success: boolean; message: string };
  changePassword: (oldPassword: string, newPassword: string) => { success: boolean; message: string };
  updateUserProfile: (updates: Partial<User>) => void;
  resetSuperAdminStateForDemo: () => void;

  // Catalog State & CRUD
  products: Product[];
  categories: Category[];
  brands: Brand[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'rating' | 'reviewCount'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  addCategory: (category: Omit<Category, 'id' | 'itemCount'>) => void;
  updateCategory: (id: string, updates: Partial<Category>) => void;
  deleteCategory: (id: string) => void;

  addBrand: (brand: Omit<Brand, 'id'>) => void;
  updateBrand: (id: string, updates: Partial<Brand>) => void;
  deleteBrand: (id: string) => void;

  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;

  // Orders
  orders: Order[];
  placeOrder: (shippingAddress: ShippingAddress, paymentMethod: 'Cash on Delivery' | 'bKash / Mobile Banking' | 'Credit / Debit Card') => Order;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  updatePaymentStatus: (orderId: string, status: 'Paid' | 'Unpaid') => void;
  lastPlacedOrder: Order | null;
  setLastPlacedOrder: (order: Order | null) => void;

  // Toasts
  toasts: ToastMessage[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const STORAGE_KEYS = {
  USERS: 'nexstore_users_v1',
  CURRENT_USER: 'nexstore_current_user_v1',
  SUPERADMIN_INIT: 'nexstore_superadmin_initialized_v1',
  PRODUCTS: 'nexstore_products_v1',
  CATEGORIES: 'nexstore_categories_v1',
  BRANDS: 'nexstore_brands_v1',
  ORDERS: 'nexstore_orders_v1',
  CART: 'nexstore_cart_v1',
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation State
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart Drawer
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastPlacedOrder, setLastPlacedOrder] = useState<Order | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Auth & Users
  const [allUsers, setAllUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.USERS);
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return saved ? JSON.parse(saved) : null;
  });

  // Requirement: Admin credentials can only be initialized ONCE
  const [isSuperAdminInitialized, setIsSuperAdminInitialized] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SUPERADMIN_INIT);
    return saved !== null ? JSON.parse(saved) : true; // Default seeded with initial superadmin
  });

  // Products, Categories, Brands
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
  });

  const [brands, setBrands] = useState<Brand[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BRANDS);
    return saved ? JSON.parse(saved) : INITIAL_BRANDS;
  });

  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
    return saved ? JSON.parse(saved) : INITIAL_ORDERS;
  });

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CART);
    return saved ? JSON.parse(saved) : [];
  });

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(allUsers));
  }, [allUsers]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SUPERADMIN_INIT, JSON.stringify(isSuperAdminInitialized));
  }, [isSuperAdminInitialized]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BRANDS, JSON.stringify(brands));
  }, [brands]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  }, [cart]);

  // Requirement: One-time Superadmin initialization
  const setupSuperAdminOnce = (name: string, email: string, password: string) => {
    if (isSuperAdminInitialized) {
      showToast('Master Admin credentials have already been initialized and locked permanently!', 'error');
      return {
        success: false,
        message: 'Django Security Policy: Superadmin credentials can only be initialized once.',
      };
    }

    if (!email || !password || !name) {
      return { success: false, message: 'Please provide full name, email, and password.' };
    }

    const newAdmin: User = {
      id: `admin-${Date.now()}`,
      name,
      email: email.trim().toLowerCase(),
      password,
      role: 'admin', // Sole authorized path to create superadmin
      createdAt: new Date().toISOString(),
    };

    setAllUsers((prev) => [...prev.filter((u) => u.role !== 'admin'), newAdmin]);
    setIsSuperAdminInitialized(true);
    setCurrentUser(newAdmin);
    showToast('Superadmin master account successfully initialized & locked!', 'success');
    return { success: true, message: 'Admin account created successfully.' };
  };

  // Requirement: Public register MUST NOT allow creating admin accounts
  const registerUser = (name: string, email: string, password: string) => {
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !password || !name) {
      return { success: false, message: 'All fields are required.' };
    }

    const existingUser = allUsers.find((u) => u.email.toLowerCase() === cleanEmail);
    if (existingUser) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    // STRICT ENFORCEMENT: Role is always customer. No privilege escalation.
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      email: cleanEmail,
      password,
      role: 'customer',
      createdAt: new Date().toISOString(),
    };

    setAllUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    showToast(`Welcome to NexStore, ${newUser.name}!`, 'success');
    return { success: true, message: 'Registration successful.' };
  };

  const login = (email: string, password: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const user = allUsers.find((u) => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      return { success: false, message: 'No account found with this email.' };
    }

    if (user.password !== password) {
      return { success: false, message: 'Incorrect password. Please try again.' };
    }

    setCurrentUser(user);
    showToast(`Logged in successfully as ${user.name} (${user.role === 'admin' ? 'Admin' : 'Customer'})`, 'success');
    return { success: true, message: 'Logged in successfully.' };
  };

  const logout = () => {
    setCurrentUser(null);
    showToast('You have been logged out.', 'info');
    setCurrentRoute('home');
  };

  // Requirement: User password reset option
  const resetPassword = (email: string, newPassword: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const userIndex = allUsers.findIndex((u) => u.email.toLowerCase() === cleanEmail);

    if (userIndex === -1) {
      return { success: false, message: 'Account not found with this email address.' };
    }

    setAllUsers((prev) => {
      const copy = [...prev];
      copy[userIndex] = { ...copy[userIndex], password: newPassword };
      return copy;
    });

    if (currentUser?.email.toLowerCase() === cleanEmail) {
      setCurrentUser((prev) => (prev ? { ...prev, password: newPassword } : null));
    }

    showToast('Password reset successfully! You can now log in with your new password.', 'success');
    return { success: true, message: 'Password reset successful.' };
  };

  const changePassword = (oldPassword: string, newPassword: string) => {
    if (!currentUser) return { success: false, message: 'Not authenticated.' };

    if (currentUser.password && currentUser.password !== oldPassword) {
      return { success: false, message: 'Current password does not match.' };
    }

    setAllUsers((prev) =>
      prev.map((u) => (u.id === currentUser.id ? { ...u, password: newPassword } : u))
    );
    setCurrentUser((prev) => (prev ? { ...prev, password: newPassword } : null));
    showToast('Your password has been changed successfully.', 'success');
    return { success: true, message: 'Password changed successfully.' };
  };

  // Requirement: Profile image upload & details update
  const updateUserProfile = (updates: Partial<User>) => {
    if (!currentUser) return;
    const updated = { ...currentUser, ...updates };
    setCurrentUser(updated);
    setAllUsers((prev) => prev.map((u) => (u.id === currentUser.id ? updated : u)));
    showToast('Profile updated successfully!', 'success');
  };

  // Reset superadmin state for demonstration purposes if needed
  const resetSuperAdminStateForDemo = () => {
    setIsSuperAdminInitialized(false);
    setAllUsers((prev) => prev.filter((u) => u.role !== 'admin'));
    if (currentUser?.role === 'admin') {
      setCurrentUser(null);
    }
    showToast('Superadmin state reset. You can now test the 1-time setup flow!', 'info');
  };

  // Product CRUD
  const addProduct = (data: Omit<Product, 'id' | 'createdAt' | 'rating' | 'reviewCount'>) => {
    const newProduct: Product = {
      ...data,
      id: `prod-${Date.now()}`,
      rating: 5.0,
      reviewCount: 1,
      createdAt: new Date().toISOString(),
    };
    setProducts((prev) => [newProduct, ...prev]);
    showToast(`Product "${newProduct.title}" created!`, 'success');
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));
    showToast('Product updated successfully.', 'success');
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    showToast('Product deleted.', 'info');
  };

  // Category CRUD
  const addCategory = (data: Omit<Category, 'id' | 'itemCount'>) => {
    const newCategory: Category = {
      ...data,
      id: `cat-${Date.now()}`,
      itemCount: 0,
    };
    setCategories((prev) => [...prev, newCategory]);
    showToast(`Category "${newCategory.name}" added.`, 'success');
  };

  const updateCategory = (id: string, updates: Partial<Category>) => {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, ...updates } : c)));
    showToast('Category updated.', 'success');
  };

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
    showToast('Category deleted.', 'info');
  };

  // Brand CRUD
  const addBrand = (data: Omit<Brand, 'id'>) => {
    const newBrand: Brand = {
      ...data,
      id: `brand-${Date.now()}`,
    };
    setBrands((prev) => [...prev, newBrand]);
    showToast(`Brand "${newBrand.name}" added.`, 'success');
  };

  const updateBrand = (id: string, updates: Partial<Brand>) => {
    setBrands((prev) => prev.map((b) => (b.id === id ? { ...b, ...updates } : b)));
    showToast('Brand updated.', 'success');
  };

  const deleteBrand = (id: string) => {
    setBrands((prev) => prev.filter((b) => b.id !== id));
    showToast('Brand deleted.', 'info');
  };

  // Cart Operations
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.title}" to cart!`, 'success');
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart.', 'info');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Requirement: Order placement with full customer info
  const placeOrder = (
    shippingAddress: ShippingAddress,
    paymentMethod: 'Cash on Delivery' | 'bKash / Mobile Banking' | 'Credit / Debit Card'
  ): Order => {
    const subtotal = cartTotal;
    const shippingFee = subtotal > 150 ? 0 : 15;
    const tax = Math.round(subtotal * 0.05 * 100) / 100;
    const total = subtotal + shippingFee + tax;

    const orderNum = `NX-${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber: orderNum,
      userId: currentUser ? currentUser.id : 'guest',
      customerName: shippingAddress.fullName,
      customerEmail: shippingAddress.email,
      items: cart.map((item) => ({
        productId: item.product.id,
        productTitle: item.product.title,
        price: item.product.price,
        quantity: item.quantity,
        imageUrl: item.product.imageUrl,
      })),
      subtotal,
      shippingFee,
      tax,
      total,
      status: 'Pending',
      shippingAddress,
      paymentMethod,
      paymentStatus: paymentMethod === 'Cash on Delivery' ? 'Unpaid' : 'Paid',
      createdAt: new Date().toISOString(),
    };

    // Deduct stock from products
    setProducts((prev) =>
      prev.map((p) => {
        const cartItem = cart.find((c) => c.product.id === p.id);
        if (cartItem) {
          return { ...p, stock: Math.max(0, p.stock - cartItem.quantity) };
        }
        return p;
      })
    );

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setLastPlacedOrder(newOrder);
    showToast(`Order #${newOrder.orderNumber} placed successfully!`, 'success');
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
    showToast(`Order status updated to ${status}.`, 'info');
  };

  const updatePaymentStatus = (orderId: string, status: 'Paid' | 'Unpaid') => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, paymentStatus: status } : o))
    );
    showToast(`Payment marked as ${status}.`, 'info');
  };

  return (
    <StoreContext.Provider
      value={{
        currentRoute,
        setCurrentRoute,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        selectedBrandFilter,
        setSelectedBrandFilter,
        searchQuery,
        setSearchQuery,
        currentUser,
        allUsers,
        isSuperAdminInitialized,
        setupSuperAdminOnce,
        registerUser,
        login,
        logout,
        resetPassword,
        changePassword,
        updateUserProfile,
        resetSuperAdminStateForDemo,
        products,
        categories,
        brands,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory,
        updateCategory,
        deleteCategory,
        addBrand,
        updateBrand,
        deleteBrand,
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal,
        cartCount,
        orders,
        placeOrder,
        updateOrderStatus,
        updatePaymentStatus,
        lastPlacedOrder,
        setLastPlacedOrder,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
