import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, Truck, RefreshCw, Headphones } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentRoute } = useStore();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Trust & Guarantee Strip */}
      <div className="border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">Express Delivery</h4>
              <p className="text-xs text-slate-400 mt-0.5">Free nationwide shipping on orders over $150</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">Secure Shopping Guarantee</h4>
              <p className="text-xs text-slate-400 mt-0.5">256-bit encrypted checkout & verified delivery tracking</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">30-Day Hassle-Free Returns</h4>
              <p className="text-xs text-slate-400 mt-0.5">Complimentary pick-up for all catalog products</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Headphones className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white">Dedicated Support</h4>
              <p className="text-xs text-slate-400 mt-0.5">24/7 client care team via email and direct phone</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-white text-slate-950 flex items-center justify-center text-xs font-black">
              NX
            </span>
            <span className="text-lg font-bold tracking-tight text-white">NexStore</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Curated precision electronics, horology timepieces, and heritage leather essentials engineered to outlast disposable consumerism.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Dhaka, Bangladesh</span>
            <span>·</span>
            <span>Est. 2026</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <h5 className="text-xs font-semibold text-white uppercase tracking-wider">Store Navigation</h5>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <button 
                onClick={() => setCurrentRoute('home')} 
                className="hover:text-white transition-colors"
              >
                Home Showcase
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentRoute('shop')} 
                className="hover:text-white transition-colors"
              >
                Shop All Products
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentRoute('about')} 
                className="hover:text-white transition-colors"
              >
                About Our Brand
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentRoute('contact')} 
                className="hover:text-white transition-colors"
              >
                Customer Contact & FAQ
              </button>
            </li>
          </ul>
        </div>

        {/* Account & Services */}
        <div className="space-y-3">
          <h5 className="text-xs font-semibold text-white uppercase tracking-wider">Account & Services</h5>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <button 
                onClick={() => setCurrentRoute('user-dashboard')} 
                className="hover:text-white transition-colors"
              >
                My Profile & Orders
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentRoute('auth')} 
                className="hover:text-white transition-colors"
              >
                Sign In / Register
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentRoute('admin-dashboard')} 
                className="hover:text-white transition-colors"
              >
                Admin Control Console
              </button>
            </li>
            <li>
              <a 
                href="/django-next-ecommerce.zip"
                download="django-next-ecommerce.zip"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                <span>Download Source ZIP (Django + Next)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h5 className="text-xs font-semibold text-white uppercase tracking-wider">Contact & Inquiries</h5>
          <p className="text-xs text-slate-400 leading-relaxed">
            Need assistance with an order or product consultation?
          </p>
          <div className="space-y-1 text-xs text-slate-300">
            <p>Email: support@nexstore.dev</p>
            <p>Hotline: +880 1712-345678</p>
            <p>Hours: Sat – Thu (9:00 AM – 9:00 PM BST)</p>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NexStore E-Commerce Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Verified Authentic</span>
            <span>·</span>
            <span>Cash on Delivery Available</span>
            <span>·</span>
            <span>256-Bit SSL Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
