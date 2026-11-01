import React from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Sparkles, Shield, Layers, Award } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    products, 
    categories, 
    brands, 
    setCurrentRoute, 
    setSelectedCategoryFilter,
    setSelectedBrandFilter,
    isSuperAdminInitialized
  } = useStore();

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

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Hero Showcase Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Ambient subtle backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-90" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text & Primary Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-300">
                <span className="text-amber-400 font-semibold">2026 Collection</span>
                <span aria-hidden="true">·</span>
                <span>Django Backend Architecture</span>
                <span aria-hidden="true">·</span>
                <span>Next.js Frontend</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
                Precision Hardware & Handcrafted Goods.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Engineered audio monitors, Grade-5 titanium horology, full-grain Italian leather, and mechanical keyboards built to last a lifetime.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentRoute('shop')}
                  className="px-6 py-3.5 bg-white text-slate-950 hover:bg-slate-100 rounded-lg text-xs font-bold tracking-wide uppercase transition-all shadow-md flex items-center gap-2"
                >
                  <span>Explore Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentRoute('django-code')}
                  className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 rounded-lg text-xs font-semibold transition-all"
                >
                  View Django Code
                </button>
              </div>

              {/* Security Pill-Free Trust Footnote */}
              <div className="pt-4 flex items-center gap-3 text-xs text-slate-400">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Admin setup locked once ({isSuperAdminInitialized ? 'Master Admin Initialized' : 'Setup Pending'}) · Public registration is customer-only.
                </span>
              </div>
            </div>

            {/* Visual Hero Feature Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-800/50 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
                  alt="Acoustica Studio Pro Headphones"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/3 object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="p-6 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Featured Release
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5">
                      Acoustica Studio Pro
                    </h3>
                    <p className="text-xs text-slate-300 font-mono tabular-nums mt-0.5">
                      $349.00 USD
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const prod = products.find((p) => p.id === 'prod-1');
                      if (prod) {
                        setCurrentRoute('shop');
                      }
                    }}
                    className="px-4 py-2 bg-white text-slate-950 hover:bg-slate-200 text-xs font-semibold rounded-lg transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Category Browse Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Curated Collections
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Browse by Specialty
            </h2>
          </div>
          <button
            onClick={() => {
              setSelectedCategoryFilter(null);
              setCurrentRoute('shop');
            }}
            className="text-xs font-semibold text-slate-900 hover:text-slate-700 flex items-center gap-1 self-start sm:self-auto"
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
                className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-900 hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-slate-950 group-hover:text-white transition-colors flex items-center justify-center text-slate-700 mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-slate-950">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono tabular-nums">{count} Products</span>
                  <span className="font-semibold text-slate-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Shop Category →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Products Grid (With Add to Cart!) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Top Rated Hardware
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Featured Products
            </h2>
          </div>
          <button
            onClick={() => setCurrentRoute('shop')}
            className="text-xs font-semibold text-slate-900 hover:text-slate-700 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>See Complete Shop Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Brand Showcase Strip */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Verified Manufacturers
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">
              Partner Brands & Workshops
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => handleBrandClick(brand.slug)}
                className="p-5 bg-white border border-slate-200 rounded-xl hover:border-slate-400 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 group-hover:text-slate-950 text-sm">
                    {brand.name}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {brand.origin || 'Studio'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                  {brand.description}
                </p>
                <div className="mt-3 text-[11px] font-semibold text-slate-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View Brand Products →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recent Arrivals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              Fresh Inventory
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              New Additions
            </h2>
          </div>
          <button
            onClick={() => setCurrentRoute('shop')}
            className="text-xs font-semibold text-slate-900 hover:text-slate-700 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. Django Architecture Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
              <Award className="w-4 h-4" />
              <span>Full-Stack Architecture & Zero-Escalation Auth</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Django 5.x REST API + Next.js Component System
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore the exact Python Django backend implementation: one-time superuser command, custom user model, ModelViewSets, permission classes, and admin registration.
            </p>
          </div>
          <button
            onClick={() => setCurrentRoute('django-code')}
            className="px-6 py-3 bg-white text-slate-950 hover:bg-slate-100 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-colors shadow-sm"
          >
            Inspect Django Source Code
          </button>
        </div>
      </section>

    </div>
  );
};
