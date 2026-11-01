import React from 'react';
import { useStore } from '../context/StoreContext';
import { Shield, Sparkles, Cpu, Layers, CheckCircle, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentRoute } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header / Mission */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          About NexStore
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Where Industrial Precision Meets Artisanal Craftsmanship.
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Founded in 2026, NexStore is dedicated to bringing together exceptional hardware, acoustic audio equipment, and vegetable-tanned leather goods. Every item in our catalog is rigorously verified for durability, ethical provenance, and architectural design purity.
        </p>
      </div>

      {/* 2. Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Modern Architecture</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Backed by a robust Python Django REST Framework backend with Next.js frontend design principles. Secure role-based authorization with strict 1-time admin initialization safeguards.
          </p>
        </div>

        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Uncompromising Quality</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            From 6063 CNC anodized aluminum keyboards to Tuscan vegetable-tanned leathers, our materials are selected to develop a timeless patina rather than degrade.
          </p>
        </div>

        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Zero Privilege Escalation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Built with strict security invariant: Public registration is restricted to customer accounts only. Superadmin creation occurs strictly once through verified initialization.
          </p>
        </div>
      </div>

      {/* 3. Story & Manufacturing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-6 border-t border-slate-200">
        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Our Standards
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Engineered to Outlast Disposable Consumerism
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In an era of mass plastic obsolescence, NexStore takes the opposing stance. We partner directly with small-batch workshops across Germany, Switzerland, Italy, and Japan. Each partner adheres to certified fair-labor practices and sustainable production cycles.
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full component modularity and repair manuals provided for all audio gear.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero micro-plastic packaging; 100% recyclable molded fiber boxing.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Lifetime repair warranty on all full-grain leather seams and brass buckles.</span>
            </li>
          </ul>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
            alt="Handcrafted leather workshop"
            referrerPolicy="no-referrer"
            className="w-full aspect-4/3 object-cover"
          />
        </div>
      </div>

      {/* 4. Action CTA */}
      <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold">Ready to explore our catalog?</h3>
          <p className="text-xs text-slate-300 mt-1">
            Browse our full selection of audio, horology, and artisan hardware.
          </p>
        </div>
        <button
          onClick={() => setCurrentRoute('shop')}
          className="px-6 py-3 bg-white text-slate-950 font-semibold text-xs rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <span>Go to Shop</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
