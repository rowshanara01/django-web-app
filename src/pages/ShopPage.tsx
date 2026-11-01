import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { 
  Search, 
  RotateCcw, 
  PackageSearch, 
  SlidersHorizontal, 
  X, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Check, 
  ChevronRight,
  Filter
} from 'lucide-react';

export const ShopPage: React.FC = () => {
  const { 
    products, 
    categories, 
    brands, 
    selectedCategoryFilter, 
    setSelectedCategoryFilter,
    selectedBrandFilter,
    setSelectedBrandFilter,
    searchQuery,
    setSearchQuery,
    addToCart
  } = useStore();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(600);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [modalQty, setModalQty] = useState(1);
  const [modalAdded, setModalAdded] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Search filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = product.title.toLowerCase().includes(q);
          const matchDesc = product.description.toLowerCase().includes(q);
          const matchSku = product.sku.toLowerCase().includes(q);
          if (!matchTitle && !matchDesc && !matchSku) return false;
        }

        // Category filter
        if (selectedCategoryFilter) {
          const cat = categories.find((c) => c.slug === selectedCategoryFilter);
          if (cat && product.categoryId !== cat.id) return false;
        }

        // Brand filter
        if (selectedBrandFilter) {
          const brand = brands.find((b) => b.slug === selectedBrandFilter);
          if (brand && product.brandId !== brand.id) return false;
        }

        // Price filter
        if (product.price > maxPrice) {
          return false;
        }

        // In-stock filter
        if (inStockOnly && product.stock <= 0) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default: featured first, then newest
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [products, searchQuery, selectedCategoryFilter, selectedBrandFilter, maxPrice, inStockOnly, sortBy, categories, brands]);

  const clearAllFilters = () => {
    setSelectedCategoryFilter(null);
    setSelectedBrandFilter(null);
    setSearchQuery('');
    setInStockOnly(false);
    setMaxPrice(600);
    setSortBy('featured');
  };

  const hasActiveFilters = Boolean(
    selectedCategoryFilter || selectedBrandFilter || searchQuery || inStockOnly || maxPrice < 600 || sortBy !== 'featured'
  );

  const handleOpenQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setModalQty(1);
    setModalAdded(false);
  };

  const handleModalAddToCart = () => {
    if (!quickViewProduct) return;
    addToCart(quickViewProduct, modalQty);
    setModalAdded(true);
    setTimeout(() => {
      setModalAdded(false);
      setQuickViewProduct(null);
    }, 900);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-slate-200/80 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-600 block mb-1">
            Official Store Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            All Products & Equipment
          </h1>
        </div>
        <div className="text-xs text-slate-500 font-mono font-medium">
          Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> of {products.length} Items
        </div>
      </div>

      {/* Main Shop Layout: Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-24 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 font-medium transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Search Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Search</label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Product, brand, spec..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-slate-950"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Categories</label>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedCategoryFilter(null)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                  selectedCategoryFilter === null
                    ? 'bg-slate-950 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span>All Categories</span>
                <span className="font-mono text-[11px] opacity-70">{products.length}</span>
              </button>
              {categories.map((c) => {
                const count = products.filter((p) => p.categoryId === c.id).length;
                const active = selectedCategoryFilter === c.slug;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategoryFilter(c.slug)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      active
                        ? 'bg-slate-950 text-white font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="truncate mr-2">{c.name}</span>
                    <span className="font-mono text-[11px] opacity-70">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Brands</label>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedBrandFilter(null)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedBrandFilter === null
                    ? 'bg-slate-950 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                All Brands
              </button>
              {brands.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBrandFilter(b.slug)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                    selectedBrandFilter === b.slug
                      ? 'bg-slate-950 text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate mr-2">{b.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{b.origin}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider">
              <span>Max Price</span>
              <span className="font-mono text-slate-950 font-bold">${maxPrice}</span>
            </div>
            <input
              type="range"
              min="50"
              max="600"
              step="25"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-slate-950 cursor-pointer"
            />
          </div>

          {/* In-Stock Toggle */}
          <div className="pt-2 border-t border-slate-100">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded border-slate-300 text-slate-950 focus:ring-slate-950"
              />
              <span>In-Stock Only</span>
            </label>
          </div>

        </aside>

        {/* Right Content Area: Toolbar + Product Grid */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Top Sort Bar */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-xs">
            
            {/* Mobile Filter Trigger */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl flex items-center gap-2"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters {hasActiveFilters && '(Active)'}</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-medium">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-1.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-950"
              >
                <option value="featured">Curated & Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-slate-500 hover:text-slate-900 font-medium flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center flex flex-col items-center justify-center bg-white border border-dashed border-slate-200 rounded-3xl p-8 space-y-3">
              <PackageSearch className="w-12 h-12 text-slate-300 stroke-1" />
              <h3 className="text-base font-bold text-slate-800">No items match your criteria</h3>
              <p className="text-xs text-slate-500 max-w-sm">
                Try widening your price range, clearing your search query, or selecting all categories.
              </p>
              <button
                onClick={clearAllFilters}
                className="mt-2 px-5 py-2.5 bg-slate-950 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onOpenQuickView={handleOpenQuickView}
                />
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Mobile Filters Slide-over / Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Filter Products</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">Category</label>
              <select
                value={selectedCategoryFilter || ''}
                onChange={(e) => setSelectedCategoryFilter(e.target.value || null)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
              >
                <option value="">All Categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Brand Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">Brand</label>
              <select
                value={selectedBrandFilter || ''}
                onChange={(e) => setSelectedBrandFilter(e.target.value || null)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
              >
                <option value="">All Brands</option>
                {brands.map((b) => (
                  <option key={b.id} value={b.slug}>{b.name}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-800 uppercase">
                <span>Max Price</span>
                <span className="font-mono font-bold">${maxPrice}</span>
              </div>
              <input
                type="range"
                min="50"
                max="600"
                step="25"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-slate-950"
              />
            </div>

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full py-3 bg-slate-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Quick View Interactive Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={quickViewProduct.imageUrl}
                  alt={quickViewProduct.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    SKU: {quickViewProduct.sku}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-950 leading-snug">
                    {quickViewProduct.title}
                  </h3>
                  <p className="text-xl font-bold font-mono text-slate-950 pt-1">
                    ${quickViewProduct.price.toFixed(2)}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50">
                    <button
                      onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                      className="p-2 text-slate-600 hover:text-slate-950 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold font-mono text-slate-950">
                      {modalQty}
                    </span>
                    <button
                      onClick={() => setModalQty(modalQty + 1)}
                      className="p-2 text-slate-600 hover:text-slate-950 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={handleModalAddToCart}
                    disabled={quickViewProduct.stock <= 0}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      modalAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-950 text-white hover:bg-slate-800 shadow-md'
                    }`}
                  >
                    {modalAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart (${(quickViewProduct.price * modalQty).toFixed(2)})</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span>Stock: {quickViewProduct.stock} available</span>
                  <span className="text-emerald-700 font-semibold">Immediate Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
