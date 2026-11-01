import React, { useState } from 'react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { ShoppingBag, Star, ImageOff, Check, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenQuickView }) => {
  const { addToCart, categories, brands } = useStore();
  const [imageError, setImageError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const category = categories.find((c) => c.id === product.categoryId);
  const brand = brands.find((b) => b.id === product.brandId);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <div 
      onClick={() => onOpenQuickView && onOpenQuickView(product)}
      className="group flex flex-col bg-white border border-slate-200/70 rounded-2xl overflow-hidden hover:border-slate-400/80 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Product Image Showcase Frame */}
      <div className="relative aspect-4/3 w-full bg-slate-100/80 overflow-hidden">
        {!imageError ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-4 text-center">
            <ImageOff className="w-8 h-8 mb-2 stroke-1" />
            <span className="text-xs font-medium">{product.title}</span>
          </div>
        )}

        {/* Ambient Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-xs border border-slate-200/50">
            {product.stock > 0 ? `${product.stock} in stock` : 'Sold Out'}
          </span>
          {product.isFeatured && (
            <span className="bg-slate-950 text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs">
              Curated
            </span>
          )}
        </div>

        {/* Floating Quick Action Overlay */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleAddToCart}
            disabled={product.stock <= 0}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 ${
              product.stock <= 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : isAdding
                ? 'bg-emerald-600 text-white scale-98'
                : 'bg-slate-950 text-white hover:bg-slate-800'
            }`}
            title="Add to cart"
          >
            {isAdding ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details Block */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata line with typographic separators */}
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-600 font-semibold mb-1">
            <span>{brand?.name || 'Exclusive'}</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>{category?.name || 'Accessories'}</span>
          </div>

          <h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-950 transition-colors line-clamp-1 leading-snug">
            {product.title}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* Price & Rating Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-extrabold text-slate-950 font-mono tabular-nums">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-xs text-slate-400 line-through font-mono tabular-nums">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs text-slate-600 font-mono tabular-nums">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-slate-900">{product.rating.toFixed(1)}</span>
            <span className="text-slate-400 text-[11px]">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};
