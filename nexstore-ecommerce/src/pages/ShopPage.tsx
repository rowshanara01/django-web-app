import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, RotateCcw, PackageSearch } from 'lucide-react';

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
    setSearchQuery 
  } = useStore();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [inStockOnly, setInStockOnly] = useState(false);

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
  }, [products, searchQuery, selectedCategoryFilter, selectedBrandFilter, inStockOnly, sortBy, categories, brands]);

  const clearAllFilters = () => {
    setSelectedCategoryFilter(null);
    setSelectedBrandFilter(null);
    setSearchQuery('');
    setInStockOnly(false);
    setSortBy('featured');
  };

  const hasActiveFilters = Boolean(
    selectedCategoryFilter || selectedBrandFilter || searchQuery || inStockOnly || sortBy !== 'featured'
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header & Breadcrumb */}
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
          Catalog & Equipment
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Shop Catalog
          </h1>
          <div className="text-xs text-slate-500 font-mono tabular-nums">
            Showing {filteredProducts.length} of {products.length} Products
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Search Bar */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products by title, spec, or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedCategoryFilter || ''}
              onChange={(e) => setSelectedCategoryFilter(e.target.value || null)}
              className="w-full py-2 px-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-slate-950"
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Brand Dropdown */}
          <div className="md:col-span-2">
            <select
              value={selectedBrandFilter || ''}
              onChange={(e) => setSelectedBrandFilter(e.target.value || null)}
              className="w-full py-2 px-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-slate-950"
            >
              <option value="">All Brands</option>
              {brands.map((b) => (
                <option key={b.id} value={b.slug}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sorting Dropdown */}
          <div className="md:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full py-2 px-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-slate-950 font-medium"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* Secondary Filter Row: In stock toggle + Active pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200/60 text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-slate-700">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="rounded border-slate-300 text-slate-950 focus:ring-slate-950"
            />
            <span>Show In-Stock Items Only</span>
          </label>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-slate-600 hover:text-slate-950 font-medium flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center justify-center bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
          <PackageSearch className="w-12 h-12 text-slate-400 mb-3 stroke-1" />
          <h3 className="text-base font-semibold text-slate-800">No products matched your criteria</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
            Try adjusting your category, brand filter, or clear your search term.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-4 px-4 py-2 bg-slate-950 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
};
