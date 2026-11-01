import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Award, 
  Truck, 
  RefreshCw, 
  Headphones, 
  X, 
  Plus, 
  Minus, 
  ShoppingBag,
  Check
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    products, 
    categories, 
    brands, 
    setCurrentRoute, 
    setSelectedCategoryFilter,
    setSelectedBrandFilter,
    addToCart
  } = useStore();

  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [modalQty, setModalQty] = useState(1);
  const [modalAdded, setModalAdded] = useState(false);

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 4);
  const recentProducts = products.slice(0, 4);

  const handleCategoryClick = (slug: string) => {
    setSelectedCategoryFilter(slug);
    setCurrentRoute('shop');
  };

  const handleBrandClick = (slug: string) => {
    setSelectedBrandFilter(slug);
    setCurrentRoute('shop');
  };

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
    <div className="space-y-20 pb-20">
      
      {/* 1. Contemporary Editorial Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        {/* Subtle radial glow for modern depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Autumn / Winter 2026 Collection</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span className="text-white font-semibold">Limited Batch Run</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                The Art of Modern Utility & Precision.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
                Engineered acoustic monitors, Grade-5 titanium horology, full-grain Italian leather, and custom mechanical keyboards built to last a lifetime.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={() => setCurrentRoute('shop')}
                  className="px-7 py-4 bg-white text-slate-950 hover:bg-slate-100 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-xl hover:shadow-2xl hover:scale-102 flex items-center gap-2"
                >
                  <span>Explore Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setSelectedCategoryFilter('audio-acoustics');
                    setCurrentRoute('shop');
                  }}
                  className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/15 rounded-xl text-xs font-semibold tracking-wide transition-all"
                >
                  Featured Audio Gear
                </button>
              </div>

              {/* Clean Trust Indicators */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-400">
                <div>
                  <strong className="block text-white font-semibold text-sm">100% Certified</strong>
                  <span>Authentic workshops</span>
                </div>
                <div>
                  <strong className="block text-white font-semibold text-sm">Express Courier</strong>
                  <span>Free over $150</span>
                </div>
                <div>
                  <strong className="block text-white font-semibold text-sm">30-Day Guarantee</strong>
                  <span>Hassle-free returns</span>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Hero Product Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-4 backdrop-blur-xl shadow-2xl group">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
                    alt="Acoustica Studio Pro Headphones"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white">
                    Showcase Edition
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold block">
                      Acoustica Labs
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      Studio Pro Wireless
                    </h3>
                    <p className="text-xs text-slate-300 font-mono font-medium tabular-nums mt-0.5">
                      $349.00 USD
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const prod = products.find((p) => p.id === 'prod-1');
                      if (prod) handleOpenQuickView(prod);
                    }}
                    className="px-5 py-2.5 bg-white text-slate-950 hover:bg-slate-200 text-xs font-bold rounded-xl transition-colors shadow-sm"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Visual Category Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 block mb-1">
              Curated Collections
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Browse by Department
            </h2>
          </div>
          <button
            onClick={() => {
              setSelectedCategoryFilter(null);
              setCurrentRoute('shop');
            }}
            className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1.5 self-start sm:self-auto uppercase tracking-wider"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const count = products.filter((p) => p.categoryId === category.id).length;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.slug)}
                className="group p-6 bg-white border border-slate-200/80 rounded-2xl hover:border-slate-900 hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300 flex items-center justify-center text-slate-800 mb-5 shadow-xs">
                    <Layers className="w-6 h-6 stroke-1.5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-950">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono tabular-nums font-semibold text-slate-700">{count} Items</span>
                  <span className="font-bold text-slate-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Shop Now →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 block mb-1">
              Handpicked Releases
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Featured Essentials
            </h2>
          </div>
          <button
            onClick={() => setCurrentRoute('shop')}
            className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1.5 self-start sm:self-auto uppercase tracking-wider"
          >
            <span>See Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOpenQuickView={handleOpenQuickView}
            />
          ))}
        </div>
      </section>

      {/* 4. Luxury Bento Editorial Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white space-y-10 shadow-2xl">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Craftsmanship & Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Discerning Collectors Choose NexStore
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Every creation in our workshop and partner studios adheres to uncompromising principles of material purity and repairability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-xs">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-white">Planar Acoustic Monitors</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                40mm custom magnetic planar drivers delivering distortion-free frequency response from 10Hz to 45kHz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-xs">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-white">Tuscan Full-Grain Leather</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Slow-vegetable tanned with natural chestnut extracts. Develops an authentic, unique patina over decades of daily carry.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-xs">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-white">Aerospace Titanium</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Grade-5 titanium chassis CNC milled from solid ingots. Lightweight, biocompatible, and impervious to saltwater corrosion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Brand Showcase Strip */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
              Verified Independent Studios
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Partner Workshops & Manufacturers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => handleBrandClick(brand.slug)}
                className="p-6 bg-white border border-slate-200/80 rounded-2xl hover:border-slate-900 hover:shadow-lg transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 group-hover:text-slate-950 text-sm">
                    {brand.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded">
                    {brand.origin || 'Studio'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                  {brand.description}
                </p>
                <div className="mt-4 text-xs font-bold text-slate-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Collection →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Recent Arrivals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 block mb-1">
              Fresh Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              New Arrivals
            </h2>
          </div>
          <button
            onClick={() => setCurrentRoute('shop')}
            className="text-xs font-bold text-slate-900 hover:text-slate-700 flex items-center gap-1.5 self-start sm:self-auto uppercase tracking-wider"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOpenQuickView={handleOpenQuickView}
            />
          ))}
        </div>
      </section>

      {/* 7. Collector Program Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-slate-800">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Award className="w-4 h-4" />
              <span>Priority Collector Privileges</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Join Our Exclusive VIP Circle
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Receive complimentary courier delivery on your first order, private invitations to limited-edition drops, and lifetime repair service coverage.
            </p>
          </div>
          <button
            onClick={() => setCurrentRoute('shop')}
            className="px-8 py-4 bg-white text-slate-950 hover:bg-slate-100 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-transform hover:scale-102 shadow-xl"
          >
            Explore Catalog
          </button>
        </div>
      </section>

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
