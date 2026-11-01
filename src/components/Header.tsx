import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingBag, User as UserIcon, Shield, Menu, X, LogOut, ChevronDown, Search, ArrowRight, Download } from 'lucide-react';
import { PageRoute } from '../types';

export const Header: React.FC = () => {
  const { 
    currentRoute, 
    setCurrentRoute, 
    cartCount, 
    setIsCartOpen, 
    currentUser, 
    logout,
    searchQuery,
    setSearchQuery,
    products
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const navLinks = [
    { label: 'Home', route: 'home' as const },
    { label: 'Shop', route: 'shop' as const },
    { label: 'About', route: 'about' as const },
    { label: 'Contact', route: 'contact' as const },
  ];

  const handleNavClick = (route: PageRoute) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
    setSearchModalOpen(false);
  };

  const searchResults = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 4)
    : [];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-[11px] py-2 px-4 border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-300">Complimentary nationwide delivery on orders over $150</span>
          </div>
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 text-slate-400">
            <span>Cash on Delivery & bKash Supported</span>
            <span>·</span>
            <a 
              href="/django-next-ecommerce.zip"
              download="django-next-ecommerce.zip"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold hover:bg-emerald-500/30 transition-colors"
              title="Download standalone frontend & backend source code"
            >
              <Download className="w-3 h-3" />
              <span>Download Project (ZIP)</span>
            </a>
            <span>·</span>
            <button 
              onClick={() => handleNavClick('contact')}
              className="hover:text-white transition-colors"
            >
              Support: 24/7 Hotline
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-extrabold text-xs tracking-wider shadow-xs group-hover:scale-105 transition-transform">
              NX
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-950 block leading-tight">
                NexStore
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-600 font-semibold block">
                Contemporary Retail
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 text-left ${
                    isActive
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-950 rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Search, Cart, User) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Search Trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2 text-xs"
              aria-label="Open search dialog"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline text-slate-600">Search products...</span>
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1.5 flex items-center justify-center text-xs font-semibold text-white bg-slate-950 rounded-full shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct Admin Console Button if logged in as Admin */}
            {currentUser?.role === 'admin' && (
              <button
                onClick={() => handleNavClick('admin-dashboard')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-900 rounded-lg text-xs font-bold hover:bg-indigo-100 transition-colors shadow-xs"
              >
                <Shield className="w-3.5 h-3.5 text-indigo-600" />
                <span>Admin Console</span>
              </button>
            )}

            {/* User Account / Auth Dropdown */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 pl-2.5 rounded-lg border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition-all text-left"
                >
                  {currentUser.avatarUrl ? (
                    <img
                      src={currentUser.avatarUrl}
                      alt={currentUser.name}
                      className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="hidden lg:block text-left pr-1">
                    <div className="text-xs font-semibold text-slate-900 truncate max-w-28">
                      {currentUser.name}
                    </div>
                    <div className="text-[11px] text-slate-500 capitalize leading-none mt-0.5">
                      {currentUser.role}
                    </div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white border border-slate-200/90 rounded-xl shadow-xl py-2 z-50 text-sm animate-in fade-in zoom-in-95">
                    <div className="px-4 py-2.5 border-b border-slate-100">
                      <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Signed in as</p>
                      <p className="text-xs font-bold text-slate-900 truncate mt-0.5">
                        {currentUser.email}
                      </p>
                      <p className="text-[11px] text-slate-400 capitalize mt-0.5">
                        Role: {currentUser.role === 'admin' ? 'Master Admin' : 'Verified Customer'}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setCurrentRoute('user-dashboard');
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-slate-950 flex items-center gap-2.5 transition-colors text-xs font-medium"
                    >
                      <UserIcon className="w-4 h-4 text-slate-400" />
                      <span>My Orders & Profile</span>
                    </button>

                    {currentUser.role === 'admin' && (
                      <button
                        onClick={() => {
                          setCurrentRoute('admin-dashboard');
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-indigo-50 text-indigo-900 flex items-center gap-2.5 transition-colors border-t border-slate-100 text-xs font-semibold"
                      >
                        <Shield className="w-4 h-4 text-indigo-600" />
                        <span>Admin Dashboard</span>
                      </button>
                    )}

                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <button
                        onClick={() => {
                          logout();
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-rose-50 text-rose-600 flex items-center gap-2.5 transition-colors text-xs font-medium"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Log Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => handleNavClick('auth')}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                Sign In
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg ${
                  currentRoute === link.route
                    ? 'bg-slate-100 text-slate-950 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                {link.label}
              </button>
            ))}
            {currentUser && (
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <button
                  onClick={() => handleNavClick('user-dashboard')}
                  className="block w-full text-left px-3 py-2 text-sm font-medium rounded-lg text-slate-700 hover:bg-slate-50"
                >
                  My Profile & Orders
                </button>
                {currentUser.role === 'admin' && (
                  <button
                    onClick={() => handleNavClick('admin-dashboard')}
                    className="block w-full text-left px-3 py-2 text-sm font-semibold text-indigo-700 rounded-lg hover:bg-indigo-50"
                  >
                    Admin Dashboard
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </header>

      {/* Modern Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-4 shadow-2xl border border-slate-200 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Search catalog products (e.g. Headphones, Watch, Leather)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden focus:ring-1 focus:ring-slate-950"
              />
              <button
                onClick={() => setSearchModalOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {searchQuery.trim() && (
              <div className="space-y-2 pt-1 border-t border-slate-100">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block px-1">
                  Matching Products ({searchResults.length})
                </span>
                {searchResults.length === 0 ? (
                  <p className="text-xs text-slate-500 py-4 text-center">No products found matching "{searchQuery}".</p>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {searchResults.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setSearchModalOpen(false);
                          setCurrentRoute('shop');
                        }}
                        className="w-full py-2 px-2 flex items-center justify-between hover:bg-slate-50 rounded-lg text-left transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={p.imageUrl}
                            alt={p.title}
                            className="w-9 h-9 rounded object-cover border border-slate-200"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <p className="text-xs font-semibold text-slate-900 truncate max-w-xs">{p.title}</p>
                            <p className="text-[11px] text-slate-500 font-mono">${p.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => {
                    setSearchModalOpen(false);
                    setCurrentRoute('shop');
                  }}
                  className="w-full py-2 text-center text-xs font-semibold text-slate-900 hover:bg-slate-100 rounded-lg transition-colors mt-2"
                >
                  View All Search Results in Shop →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
