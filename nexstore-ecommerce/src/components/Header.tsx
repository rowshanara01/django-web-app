import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingBag, User as UserIcon, Shield, Code2, Menu, X, LogOut, ChevronDown } from 'lucide-react';

import { PageRoute } from '../types';

export const Header: React.FC = () => {
  const { 
    currentRoute, 
    setCurrentRoute, 
    cartCount, 
    setIsCartOpen, 
    currentUser, 
    logout 
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Home', route: 'home' as const },
    { label: 'Shop', route: 'shop' as const },
    { label: 'About', route: 'about' as const },
    { label: 'Contact', route: 'contact' as const },
    { label: 'Django Code', route: 'django-code' as const },
  ];

  const handleNavClick = (route: PageRoute) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-xl font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity flex items-center gap-2 text-left"
        >
          <span className="w-8 h-8 rounded-md bg-slate-950 text-white flex items-center justify-center text-sm font-black tracking-tighter">
            NX
          </span>
          <span>NexStore</span>
        </button>

        {/* Zone 2: Navigation Links (Clean text with subtle underlines) */}
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
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-950 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Cart + Account) */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2"
            aria-label="View shopping cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1.5 flex items-center justify-center text-xs font-semibold text-white bg-slate-950 rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Account / Auth Dropdown */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 p-1.5 pl-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-left"
              >
                {currentUser.avatarUrl ? (
                  <img
                    src={currentUser.avatarUrl}
                    alt={currentUser.name}
                    className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="hidden lg:block text-left pr-1">
                  <div className="text-xs font-semibold text-slate-900 truncate max-w-28">
                    {currentUser.name}
                  </div>
                  <div className="text-[11px] text-slate-500 capitalize">
                    {currentUser.role}
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 text-sm animate-in fade-in zoom-in-95">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-medium text-slate-500">Signed in as</p>
                    <p className="text-xs font-semibold text-slate-900 truncate">
                      {currentUser.email}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5 capitalize">
                      Role: {currentUser.role === 'admin' ? 'Superadmin' : 'Customer'}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentRoute('user-dashboard');
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-slate-950 flex items-center gap-2.5 transition-colors"
                  >
                    <UserIcon className="w-4 h-4 text-slate-400" />
                    <span>My Dashboard & Profile</span>
                  </button>

                  {currentUser.role === 'admin' && (
                    <button
                      onClick={() => {
                        setCurrentRoute('admin-dashboard');
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-slate-950 flex items-center gap-2.5 transition-colors border-t border-slate-100"
                    >
                      <Shield className="w-4 h-4 text-indigo-600" />
                      <span className="font-medium text-indigo-900">Admin Dashboard</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setCurrentRoute('django-code');
                      setProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-slate-950 flex items-center gap-2.5 transition-colors border-t border-slate-100"
                  >
                    <Code2 className="w-4 h-4 text-slate-400" />
                    <span>Django Codebase</span>
                  </button>

                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <button
                      onClick={() => {
                        logout();
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-rose-50 text-rose-600 flex items-center gap-2.5 transition-colors"
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
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
            >
              Sign In / Register
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
              className={`block w-full text-left px-3 py-2 text-base font-medium rounded-lg ${
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
                className="block w-full text-left px-3 py-2 text-base font-medium rounded-lg text-slate-700 hover:bg-slate-50"
              >
                User Dashboard
              </button>
              {currentUser.role === 'admin' && (
                <button
                  onClick={() => handleNavClick('admin-dashboard')}
                  className="block w-full text-left px-3 py-2 text-base font-semibold text-indigo-700 rounded-lg hover:bg-indigo-50"
                >
                  Admin Dashboard
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
};
