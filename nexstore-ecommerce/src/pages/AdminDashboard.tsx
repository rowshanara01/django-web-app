import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Product, Category, Brand, OrderStatus } from '../types';
import { 
  Package, 
  Layers, 
  Bookmark, 
  ShoppingBag, 
  Plus, 
  Pencil, 
  Trash2, 
  Check, 
  X, 
  ShieldAlert, 
  DollarSign, 
  TrendingUp, 
  Users, 
  ArrowUpRight 
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { 
    currentUser, 
    setCurrentRoute, 
    products, 
    categories, 
    brands, 
    orders, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    addCategory, 
    updateCategory, 
    deleteCategory, 
    addBrand, 
    updateBrand, 
    deleteBrand,
    updateOrderStatus,
    updatePaymentStatus,
    allUsers 
  } = useStore();

  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'categories' | 'brands' | 'orders'>('overview');

  // Modals state
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const [brandModalOpen, setBrandModalOpen] = useState(false);
  const [editingBrand, setEditingBrand] = useState<Brand | null>(null);

  // Product Form State
  const [prodForm, setProdForm] = useState({
    title: '',
    slug: '',
    description: '',
    price: 99.00,
    compareAtPrice: 120.00,
    categoryId: categories[0]?.id || '',
    brandId: brands[0]?.id || '',
    stock: 20,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    sku: 'NX-PROD-001',
    isFeatured: true,
  });

  // Category Form State
  const [catForm, setCatForm] = useState({
    name: '',
    slug: '',
    description: '',
  });

  // Brand Form State
  const [brandForm, setBrandForm] = useState({
    name: '',
    slug: '',
    description: '',
    origin: '',
  });

  // Role Gate: Must be Admin
  if (!currentUser || currentUser.role !== 'admin') {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Restricted Administration Zone</h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          Access to this dashboard requires verified Superadmin credentials. Your current account does not have administrative permissions.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
          <button
            onClick={() => setCurrentRoute('auth')}
            className="px-4 py-2 bg-slate-950 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Sign In as Admin
          </button>
          <button
            onClick={() => setCurrentRoute('home')}
            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors"
          >
            Return to Storefront
          </button>
        </div>
      </div>
    );
  }

  // Analytics Metrics
  const totalRevenue = orders.reduce((sum, o) => sum + (o.paymentStatus === 'Paid' ? o.total : 0), 0);
  const pendingOrders = orders.filter((o) => o.status === 'Pending').length;

  // Handlers for Products
  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProdForm({
      title: '',
      slug: '',
      description: '',
      price: 149.00,
      compareAtPrice: 179.00,
      categoryId: categories[0]?.id || '',
      brandId: brands[0]?.id || '',
      stock: 25,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      sku: `NX-${Math.floor(100 + Math.random() * 900)}`,
      isFeatured: false,
    });
    setProductModalOpen(true);
  };

  const handleOpenEditProduct = (prod: Product) => {
    setEditingProduct(prod);
    setProdForm({
      title: prod.title,
      slug: prod.slug,
      description: prod.description,
      price: prod.price,
      compareAtPrice: prod.compareAtPrice || prod.price,
      categoryId: prod.categoryId,
      brandId: prod.brandId,
      stock: prod.stock,
      imageUrl: prod.imageUrl,
      sku: prod.sku,
      isFeatured: !!prod.isFeatured,
    });
    setProductModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(editingProduct.id, {
        title: prodForm.title,
        slug: prodForm.slug || prodForm.title.toLowerCase().replace(/\s+/g, '-'),
        description: prodForm.description,
        price: Number(prodForm.price),
        compareAtPrice: Number(prodForm.compareAtPrice),
        categoryId: prodForm.categoryId,
        brandId: prodForm.brandId,
        stock: Number(prodForm.stock),
        imageUrl: prodForm.imageUrl,
        sku: prodForm.sku,
        isFeatured: prodForm.isFeatured,
      });
    } else {
      addProduct({
        title: prodForm.title,
        slug: prodForm.slug || prodForm.title.toLowerCase().replace(/\s+/g, '-'),
        description: prodForm.description,
        price: Number(prodForm.price),
        compareAtPrice: Number(prodForm.compareAtPrice),
        categoryId: prodForm.categoryId,
        brandId: prodForm.brandId,
        stock: Number(prodForm.stock),
        imageUrl: prodForm.imageUrl,
        sku: prodForm.sku,
        isFeatured: prodForm.isFeatured,
      });
    }
    setProductModalOpen(false);
  };

  // Handlers for Categories
  const handleOpenAddCategory = () => {
    setEditingCategory(null);
    setCatForm({ name: '', slug: '', description: '' });
    setCategoryModalOpen(true);
  };

  const handleOpenEditCategory = (cat: Category) => {
    setEditingCategory(cat);
    setCatForm({ name: cat.name, slug: cat.slug, description: cat.description });
    setCategoryModalOpen(true);
  };

  const handleSaveCategory = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = catForm.slug || catForm.name.toLowerCase().replace(/\s+/g, '-');
    if (editingCategory) {
      updateCategory(editingCategory.id, {
        name: catForm.name,
        slug,
        description: catForm.description,
      });
    } else {
      addCategory({
        name: catForm.name,
        slug,
        description: catForm.description,
      });
    }
    setCategoryModalOpen(false);
  };

  // Handlers for Brands
  const handleOpenAddBrand = () => {
    setEditingBrand(null);
    setBrandForm({ name: '', slug: '', description: '', origin: 'Germany' });
    setBrandModalOpen(true);
  };

  const handleOpenEditBrand = (b: Brand) => {
    setEditingBrand(b);
    setBrandForm({ name: b.name, slug: b.slug, description: b.description, origin: b.origin || '' });
    setBrandModalOpen(true);
  };

  const handleSaveBrand = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = brandForm.slug || brandForm.name.toLowerCase().replace(/\s+/g, '-');
    if (editingBrand) {
      updateBrand(editingBrand.id, {
        name: brandForm.name,
        slug,
        description: brandForm.description,
        origin: brandForm.origin,
      });
    } else {
      addBrand({
        name: brandForm.name,
        slug,
        description: brandForm.description,
        origin: brandForm.origin,
      });
    }
    setBrandModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-1">
            <span>Django ModelAdmin Control Center</span>
            <span>·</span>
            <span>Superadmin Master Session</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Admin Management Console
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            Complete CRUD governance for Products, Categories, Brands, and Customer Order Status.
          </p>
        </div>

        <button
          onClick={() => setCurrentRoute('django-code')}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg border border-slate-700 flex items-center gap-2 whitespace-nowrap transition-colors"
        >
          <span>View Django admin.py</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap border-b border-slate-200 gap-2 sm:gap-6 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('overview')}
          className={`py-3 px-2 border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'overview'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>System Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('products')}
          className={`py-3 px-2 border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'products'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Products CRUD ({products.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('categories')}
          className={`py-3 px-2 border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'categories'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Categories CRUD ({categories.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('brands')}
          className={`py-3 px-2 border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'brands'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Brands CRUD ({brands.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('orders')}
          className={`py-3 px-2 border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'orders'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Orders Management ({orders.length})</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW METRICS */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-2">
              <span className="text-xs font-medium text-slate-500">Collected Revenue</span>
              <p className="text-2xl font-bold font-mono text-slate-950 tabular-nums">
                ${totalRevenue.toFixed(2)}
              </p>
              <span className="text-[11px] text-emerald-600 font-medium">All verified transactions</span>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-2">
              <span className="text-xs font-medium text-slate-500">Total Orders</span>
              <p className="text-2xl font-bold font-mono text-slate-950 tabular-nums">
                {orders.length}
              </p>
              <span className="text-[11px] text-amber-600 font-medium">
                {pendingOrders} Pending Fulfillment
              </span>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-2">
              <span className="text-xs font-medium text-slate-500">Active Inventory Items</span>
              <p className="text-2xl font-bold font-mono text-slate-950 tabular-nums">
                {products.length}
              </p>
              <span className="text-[11px] text-slate-500">Across {categories.length} Categories</span>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-2">
              <span className="text-xs font-medium text-slate-500">Registered Accounts</span>
              <p className="text-2xl font-bold font-mono text-slate-950 tabular-nums">
                {allUsers.length}
              </p>
              <span className="text-[11px] text-slate-500">
                1 Locked Superadmin · {allUsers.filter((u) => u.role === 'customer').length} Customers
              </span>
            </div>
          </div>

          {/* Quick Actions Strip */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Quick Administrative Operations</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleOpenAddProduct}
                className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Product</span>
              </button>

              <button
                onClick={handleOpenAddCategory}
                className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Category</span>
              </button>

              <button
                onClick={handleOpenAddBrand}
                className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Brand</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PRODUCTS CRUD */}
      {activeTab === 'products' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Manage Catalog Products</h2>
              <p className="text-xs text-slate-500">Create, update stock & price, or delete product models.</p>
            </div>
            <button
              onClick={handleOpenAddProduct}
              className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">SKU</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Stock</th>
                    <th className="py-3 px-4">Featured</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {products.map((p) => {
                    const cat = categories.find((c) => c.id === p.categoryId);
                    return (
                      <tr key={p.id} className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 flex items-center gap-3">
                          <img
                            src={p.imageUrl}
                            alt={p.title}
                            className="w-10 h-10 rounded object-cover border border-slate-200 shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="min-w-0">
                            <p className="font-semibold text-slate-900 truncate max-w-xs">{p.title}</p>
                            <p className="text-slate-400 text-[11px] truncate max-w-xs">{p.slug}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono">{p.sku}</td>
                        <td className="py-3 px-4">{cat?.name || '—'}</td>
                        <td className="py-3 px-4 font-mono font-medium tabular-nums">${p.price.toFixed(2)}</td>
                        <td className="py-3 px-4 font-mono tabular-nums">{p.stock}</td>
                        <td className="py-3 px-4">
                          {p.isFeatured ? (
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                              Yes
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400">No</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button
                            onClick={() => handleOpenEditProduct(p)}
                            className="p-1.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded"
                            title="Edit Product"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Are you sure you want to delete product "${p.title}"?`)) {
                                deleteProduct(p.id);
                              }
                            }}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                            title="Delete Product"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CATEGORIES CRUD */}
      {activeTab === 'categories' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Manage Product Categories</h2>
              <p className="text-xs text-slate-500">Create, edit, or remove catalog taxonomies.</p>
            </div>
            <button
              onClick={handleOpenAddCategory}
              className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Category</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Category Name</th>
                  <th className="py-3 px-4">Slug Identifier</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Product Count</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {categories.map((c) => {
                  const count = products.filter((p) => p.categoryId === c.id).length;
                  return (
                    <tr key={c.id} className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">{c.name}</td>
                      <td className="py-3 px-4 font-mono text-slate-500">{c.slug}</td>
                      <td className="py-3 px-4 text-slate-600 max-w-sm truncate">{c.description}</td>
                      <td className="py-3 px-4 font-mono tabular-nums">{count} items</td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <button
                          onClick={() => handleOpenEditCategory(c)}
                          className="p-1.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded"
                          title="Edit Category"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete category "${c.name}"?`)) {
                              deleteCategory(c.id);
                            }
                          }}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                          title="Delete Category"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: BRANDS CRUD */}
      {activeTab === 'brands' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Manage Partner Brands</h2>
              <p className="text-xs text-slate-500">Create, update, or remove verified brand profiles.</p>
            </div>
            <button
              onClick={handleOpenAddBrand}
              className="px-4 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Brand</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Brand Name</th>
                  <th className="py-3 px-4">Slug</th>
                  <th className="py-3 px-4">Country Origin</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Products</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {brands.map((b) => {
                  const count = products.filter((p) => p.brandId === b.id).length;
                  return (
                    <tr key={b.id} className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-semibold text-slate-900">{b.name}</td>
                      <td className="py-3 px-4 font-mono text-slate-500">{b.slug}</td>
                      <td className="py-3 px-4">{b.origin || 'Studio'}</td>
                      <td className="py-3 px-4 text-slate-600 max-w-sm truncate">{b.description}</td>
                      <td className="py-3 px-4 font-mono tabular-nums">{count} items</td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <button
                          onClick={() => handleOpenEditBrand(b)}
                          className="p-1.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded"
                          title="Edit Brand"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete brand "${b.name}"?`)) {
                              deleteBrand(b.id);
                            }
                          }}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded"
                          title="Delete Brand"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 5: ORDERS MANAGEMENT */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">Manage Customer Orders</h2>
            <p className="text-xs text-slate-500">Update fulfillment lifecycle (Pending, Processing, Shipped, Delivered) and payment confirmation.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Order #</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Items</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Payment</th>
                    <th className="py-3 px-4">Delivery Address</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.map((o) => (
                    <tr key={o.id} className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-mono font-bold text-slate-900">
                        #{o.orderNumber}
                        <span className="block text-[10px] text-slate-400 font-normal">
                          {new Date(o.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <p className="font-semibold text-slate-900">{o.customerName}</p>
                        <p className="text-slate-500 text-[11px] font-mono">{o.customerEmail}</p>
                        <p className="text-slate-500 text-[11px]">{o.shippingAddress.phone}</p>
                      </td>
                      <td className="py-3 px-4">
                        {o.items.map((i, idx) => (
                          <div key={idx} className="text-[11px] text-slate-700">
                            {i.productTitle} <strong className="font-mono">× {i.quantity}</strong>
                          </div>
                        ))}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-950 tabular-nums">
                        ${o.total.toFixed(2)}
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={o.status}
                          onChange={(e) => updateOrderStatus(o.id, e.target.value as OrderStatus)}
                          className="py-1 px-2 border border-slate-200 rounded text-xs font-medium focus:ring-1 focus:ring-slate-950"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={o.paymentStatus}
                          onChange={(e) => updatePaymentStatus(o.id, e.target.value as 'Paid' | 'Unpaid')}
                          className={`py-1 px-2 border rounded text-xs font-medium ${
                            o.paymentStatus === 'Paid'
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                              : 'bg-amber-50 border-amber-200 text-amber-800'
                          }`}
                        >
                          <option value="Unpaid">Unpaid ({o.paymentMethod})</option>
                          <option value="Paid">Paid ({o.paymentMethod})</option>
                        </select>
                      </td>
                      <td className="py-3 px-4 text-slate-600 text-[11px] max-w-xs">
                        <p className="truncate">{o.shippingAddress.street}</p>
                        <p>{o.shippingAddress.city}, {o.shippingAddress.postalCode}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCT CREATE / EDIT MODAL */}
      {productModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-base font-bold text-slate-900">
                {editingProduct ? 'Edit Catalog Product' : 'Add New Product'}
              </h3>
              <button
                onClick={() => setProductModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Product Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={prodForm.title}
                  onChange={(e) => setProdForm({ ...prodForm, title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Description <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={prodForm.description}
                  onChange={(e) => setProdForm({ ...prodForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Price ($ USD) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={prodForm.price}
                    onChange={(e) => setProdForm({ ...prodForm, price: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Compare at Price ($ USD)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={prodForm.compareAtPrice}
                    onChange={(e) => setProdForm({ ...prodForm, compareAtPrice: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Category <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={prodForm.categoryId}
                    onChange={(e) => setProdForm({ ...prodForm, categoryId: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Brand <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={prodForm.brandId}
                    onChange={(e) => setProdForm({ ...prodForm, brandId: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                  >
                    {brands.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Inventory Stock Quantity <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={prodForm.stock}
                    onChange={(e) => setProdForm({ ...prodForm, stock: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    SKU Identifier <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={prodForm.sku}
                    onChange={(e) => setProdForm({ ...prodForm, sku: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Product Image URL <span className="text-rose-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  value={prodForm.imageUrl}
                  onChange={(e) => setProdForm({ ...prodForm, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={prodForm.isFeatured}
                  onChange={(e) => setProdForm({ ...prodForm, isFeatured: e.target.checked })}
                  className="rounded border-slate-300 text-slate-950 focus:ring-slate-950"
                />
                <span className="font-semibold text-slate-800">Feature this product on homepage</span>
              </label>

              <div className="flex gap-2 pt-4 border-t border-slate-200">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-slate-950 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                >
                  {editingProduct ? 'Save Changes' : 'Create Product'}
                </button>
                <button
                  type="button"
                  onClick={() => setProductModalOpen(false)}
                  className="py-2.5 px-4 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CATEGORY CREATE / EDIT MODAL */}
      {categoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-base font-bold text-slate-900">
                {editingCategory ? 'Edit Category' : 'Create New Category'}
              </h3>
              <button
                onClick={() => setCategoryModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCategory} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Category Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ergonomic Hardware"
                  value={catForm.name}
                  onChange={(e) => setCatForm({ ...catForm, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  URL Slug
                </label>
                <input
                  type="text"
                  placeholder="e.g. ergonomic-hardware"
                  value={catForm.slug}
                  onChange={(e) => setCatForm({ ...catForm, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe items falling under this category..."
                  value={catForm.description}
                  onChange={(e) => setCatForm({ ...catForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div className="flex gap-2 pt-2 border-t border-slate-200">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-slate-950 text-white font-semibold rounded-lg hover:bg-slate-800"
                >
                  {editingCategory ? 'Update Category' : 'Add Category'}
                </button>
                <button
                  type="button"
                  onClick={() => setCategoryModalOpen(false)}
                  className="py-2.5 px-4 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* BRAND CREATE / EDIT MODAL */}
      {brandModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-base font-bold text-slate-900">
                {editingBrand ? 'Edit Brand' : 'Create New Brand'}
              </h3>
              <button
                onClick={() => setBrandModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBrand} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Brand Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Master Acoustics"
                  value={brandForm.name}
                  onChange={(e) => setBrandForm({ ...brandForm, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  URL Slug
                </label>
                <input
                  type="text"
                  placeholder="e.g. master-acoustics"
                  value={brandForm.slug}
                  onChange={(e) => setBrandForm({ ...brandForm, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Origin Country / Studio
                </label>
                <input
                  type="text"
                  placeholder="e.g. Switzerland"
                  value={brandForm.origin}
                  onChange={(e) => setBrandForm({ ...brandForm, origin: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Brand craftsmanship legacy..."
                  value={brandForm.description}
                  onChange={(e) => setBrandForm({ ...brandForm, description: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div className="flex gap-2 pt-2 border-t border-slate-200">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-slate-950 text-white font-semibold rounded-lg hover:bg-slate-800"
                >
                  {editingBrand ? 'Update Brand' : 'Add Brand'}
                </button>
                <button
                  type="button"
                  onClick={() => setBrandModalOpen(false)}
                  className="py-2.5 px-4 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
