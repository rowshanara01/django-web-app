import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateCartQuantity, 
    cartTotal, 
    setCurrentRoute 
  } = useStore();

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 150;
  const progressToFreeShipping = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setCurrentRoute('checkout');
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
    setCurrentRoute('shop');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-slate-900" />
              <h2 className="text-base font-bold text-slate-900">Your Shopping Cart</h2>
              <span className="text-xs text-slate-500 font-mono tabular-nums">
                ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="px-6 py-3 bg-slate-50 border-b border-slate-200/80">
            <div className="flex items-center justify-between text-xs text-slate-600 mb-1.5 font-medium">
              {remainingForFreeShipping > 0 ? (
                <span>Add <strong className="text-slate-900 font-mono tabular-nums">${remainingForFreeShipping.toFixed(2)}</strong> for free delivery</span>
              ) : (
                <span className="text-emerald-700 font-semibold">Free shipping unlocked!</span>
              )}
              <span className="font-mono tabular-nums text-slate-500">{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-slate-900 rounded-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-slate-100">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500">
                <ShoppingBag className="w-12 h-12 text-slate-300 mb-3 stroke-1" />
                <p className="text-sm font-semibold text-slate-800">Your cart is empty</p>
                <p className="text-xs text-slate-500 mt-1 mb-6 max-w-xs">
                  Discover our crafted audio gear, watches, and leather accessories.
                </p>
                <button
                  onClick={handleContinueShopping}
                  className="px-5 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="py-4 flex gap-4 items-center">
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.title}
                    className="w-18 h-18 rounded-lg object-cover bg-slate-100 border border-slate-200 shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-slate-900 truncate">
                      {item.product.title}
                    </h4>
                    <p className="text-xs text-slate-950 font-mono font-medium tabular-nums mt-0.5">
                      ${item.product.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2.5">
                      <div className="flex items-center border border-slate-200 rounded-md bg-white">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center text-xs font-mono font-semibold text-slate-900 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50/50 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 font-medium">Subtotal</span>
                <span className="text-base font-bold text-slate-950 font-mono tabular-nums">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Taxes and delivery charges calculated at checkout.
              </p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-3 px-4 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleContinueShopping}
                  className="w-full py-2 px-4 bg-transparent hover:bg-slate-200/60 text-slate-700 text-xs font-medium rounded-lg transition-colors text-center"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
