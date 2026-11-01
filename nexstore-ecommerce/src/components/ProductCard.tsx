import React, { useState } from 'react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { ShoppingBag, Star, ImageOff } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, categories, brands } = useStore();
  const [imageError, setImageError] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const category = categories.find((c) => c.id === product.categoryId);
  const brand = brands.find((b) => b.id === product.brandId);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div className="group flex flex-col bg-white border border-slate-200/80 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200">
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
        {!imageError ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-4 text-center">
            <ImageOff className="w-8 h-8 mb-2 stroke-1" />
            <span className="text-xs font-medium">{product.title}</span>
          </div>
        )}

        {/* Stock / Availability Indicator (Clean unboxed text, no candy pill) */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-1 rounded text-[11px] font-medium text-slate-700 shadow-xs">
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
        </div>

        {/* Quick Add Overlay on desktop */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock <= 0}
          className={`absolute bottom-3 right-3 p-2.5 rounded-lg shadow-md transition-all flex items-center justify-center ${
            product.stock <= 0
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : isAdding
              ? 'bg-emerald-600 text-white scale-95'
              : 'bg-slate-950 text-white hover:bg-slate-800'
          }`}
          aria-label={`Add ${product.title} to cart`}
          title="Add to cart"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata line with typographic separators (Anti-Pill discipline) */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
            <span className="font-medium text-slate-700">{brand?.name || 'Brand'}</span>
            <span aria-hidden="true">·</span>
            <span>{category?.name || 'Category'}</span>
          </div>

          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-slate-950 line-clamp-1 leading-snug">
            {product.title}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Rating Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-slate-950 font-mono tabular-nums">
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
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-slate-400">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};
