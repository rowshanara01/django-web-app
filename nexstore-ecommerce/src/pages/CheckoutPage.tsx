import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ShippingAddress } from '../types';
import { CheckCircle2, ShieldCheck, Truck, CreditCard, Banknote, Smartphone, ArrowLeft, Printer } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { 
    cart, 
    cartTotal, 
    placeOrder, 
    currentUser, 
    setCurrentRoute, 
    lastPlacedOrder,
    setLastPlacedOrder 
  } = useStore();

  const [formData, setFormData] = useState<ShippingAddress>({
    fullName: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    street: currentUser?.address?.street || '',
    city: currentUser?.address?.city || 'Dhaka',
    state: currentUser?.address?.state || 'Dhaka Division',
    postalCode: currentUser?.address?.postalCode || '',
    country: 'Bangladesh',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'Cash on Delivery' | 'bKash / Mobile Banking' | 'Credit / Debit Card'>('Cash on Delivery');
  const [bKashNumber, setBkashNumber] = useState('');
  const [bKashTrxId, setBkashTrxId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If order was just placed, display the confirmation view
  if (lastPlacedOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10 space-y-8">
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              Order Verified & Confirmed
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Thank You for Your Order!
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              We have received order <strong className="text-slate-900 font-mono">#{lastPlacedOrder.orderNumber}</strong>. A confirmation email has been sent to <strong>{lastPlacedOrder.customerEmail}</strong>.
            </p>
          </div>

          {/* Invoice Summary Card */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-4 text-xs">
            <div className="flex flex-col sm:flex-row justify-between pb-3 border-b border-slate-200 gap-2">
              <div>
                <span className="text-slate-500">Order Number:</span>
                <span className="font-bold text-slate-900 font-mono ml-1.5">{lastPlacedOrder.orderNumber}</span>
              </div>
              <div>
                <span className="text-slate-500">Placed Date:</span>
                <span className="font-medium text-slate-900 ml-1.5">
                  {new Date(lastPlacedOrder.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div>
                <span className="text-slate-500">Payment:</span>
                <span className="font-semibold text-slate-900 ml-1.5">{lastPlacedOrder.paymentMethod}</span>
              </div>
            </div>

            {/* Itemized List */}
            <div className="space-y-3">
              <span className="font-semibold text-slate-700 block">Ordered Items:</span>
              {lastPlacedOrder.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.imageUrl}
                      alt={item.productTitle}
                      className="w-9 h-9 rounded object-cover border border-slate-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="font-semibold text-slate-900 truncate max-w-xs sm:max-w-md">
                        {item.productTitle}
                      </p>
                      <p className="text-slate-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-mono font-medium text-slate-900 tabular-nums">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Delivery address */}
            <div className="pt-3 border-t border-slate-200 space-y-1">
              <span className="font-semibold text-slate-700 block">Delivery Address:</span>
              <p className="text-slate-600">
                {lastPlacedOrder.shippingAddress.fullName} · {lastPlacedOrder.shippingAddress.phone}
              </p>
              <p className="text-slate-600">
                {lastPlacedOrder.shippingAddress.street}, {lastPlacedOrder.shippingAddress.city}, {lastPlacedOrder.shippingAddress.postalCode}
              </p>
            </div>

            {/* Total calculation */}
            <div className="pt-3 border-t border-slate-200 space-y-1.5 text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums">${lastPlacedOrder.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="font-mono tabular-nums">
                  {lastPlacedOrder.shippingFee === 0 ? 'Free' : `$${lastPlacedOrder.shippingFee.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (5%)</span>
                <span className="font-mono tabular-nums">${lastPlacedOrder.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-950 pt-2 border-t border-slate-200">
                <span>Total Amount</span>
                <span className="font-mono tabular-nums text-base">${lastPlacedOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                setLastPlacedOrder(null);
                setCurrentRoute('user-dashboard');
              }}
              className="flex-1 py-3 px-4 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors text-center"
            >
              Track in User Dashboard
            </button>
            <button
              onClick={() => {
                setLastPlacedOrder(null);
                setCurrentRoute('shop');
              }}
              className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg transition-colors text-center"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Invoice</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // If cart is empty and no placed order
  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Your Cart is Empty</h2>
        <p className="text-xs text-slate-500">
          Please add items from the catalog before proceeding to checkout.
        </p>
        <button
          onClick={() => setCurrentRoute('shop')}
          className="px-5 py-2.5 bg-slate-950 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 transition-colors"
        >
          Explore Products
        </button>
      </div>
    );
  }

  const subtotal = cartTotal;
  const shippingFee = subtotal > 150 ? 0 : 15;
  const tax = Math.round(subtotal * 0.05 * 100) / 100;
  const grandTotal = subtotal + shippingFee + tax;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      placeOrder(formData, paymentMethod);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Back button */}
      <button
        onClick={() => setCurrentRoute('shop')}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Shop</span>
      </button>

      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
          Complete Your Purchase
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Checkout & Order Confirmation
        </h1>
      </div>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Customer and Shipping Information */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Customer Details */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Truck className="w-4 h-4 text-slate-900" />
              <h2 className="text-sm font-bold text-slate-900">1. Shipping & Customer Details</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Full Customer Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahim Chowdhury"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rahim@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Phone Number (Courier Contact) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +880 1712-345678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1212"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Street Address / House / Flat <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="House 42, Road 11, Block D"
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  City / District <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  State / Division
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Delivery Notes / Special Instructions
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please leave with the building receptionist or call before noon."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
              />
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <CreditCard className="w-4 h-4 text-slate-900" />
              <h2 className="text-sm font-bold text-slate-900">2. Select Payment Method</h2>
            </div>

            <div className="space-y-3">
              {/* Cash on Delivery */}
              <label
                className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-all ${
                  paymentMethod === 'Cash on Delivery'
                    ? 'border-slate-950 bg-slate-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'Cash on Delivery'}
                  onChange={() => setPaymentMethod('Cash on Delivery')}
                  className="mt-1 text-slate-950 focus:ring-slate-950"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-emerald-600" />
                      <span>Cash on Delivery (COD)</span>
                    </span>
                    <span className="text-[11px] font-medium text-emerald-700">Most Popular</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Pay securely in cash to the delivery agent upon receiving and inspecting your parcel.
                  </p>
                </div>
              </label>

              {/* bKash / Mobile Banking */}
              <label
                className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-all ${
                  paymentMethod === 'bKash / Mobile Banking'
                    ? 'border-slate-950 bg-slate-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'bKash / Mobile Banking'}
                  onChange={() => setPaymentMethod('bKash / Mobile Banking')}
                  className="mt-1 text-slate-950 focus:ring-slate-950"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-pink-600" />
                      <span>bKash / Nagad / Rocket (Mobile Banking)</span>
                    </span>
                    <span className="text-[11px] font-medium text-pink-600">Instant</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Send merchant payment to <strong>01712-345678</strong> (NexStore Merchant Account).
                  </p>

                  {paymentMethod === 'bKash / Mobile Banking' && (
                    <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-slate-700 mb-1">
                          Sender Wallet Number
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 017XXXXXXXX"
                          value={bKashNumber}
                          onChange={(e) => setBkashNumber(e.target.value)}
                          className="w-full px-2.5 py-1.5 border border-slate-200 rounded text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-slate-700 mb-1">
                          Transaction ID (TrxID)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. BKT9849204"
                          value={bKashTrxId}
                          onChange={(e) => setBkashTrxId(e.target.value)}
                          className="w-full px-2.5 py-1.5 border border-slate-200 rounded text-xs font-mono"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </label>

              {/* Credit / Debit Card */}
              <label
                className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-all ${
                  paymentMethod === 'Credit / Debit Card'
                    ? 'border-slate-950 bg-slate-50/70 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'Credit / Debit Card'}
                  onChange={() => setPaymentMethod('Credit / Debit Card')}
                  className="mt-1 text-slate-950 focus:ring-slate-950"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-indigo-600" />
                      <span>Credit / Debit Card (Visa, Mastercard, Amex)</span>
                    </span>
                    <span className="text-[11px] text-slate-400">SSL Encrypted</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Secure 256-bit payment gateway tokenization.
                  </p>
                </div>
              </label>
            </div>
          </div>

        </div>

        {/* Right Column: Order Summary & Place Order */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-5 sticky top-24">
            <h2 className="text-sm font-bold text-slate-900 pb-3 border-b border-slate-200">
              Order Summary ({cart.reduce((sum, i) => sum + i.quantity, 0)} Items)
            </h2>

            {/* Itemized preview */}
            <div className="max-h-60 overflow-y-auto divide-y divide-slate-200/60 pr-1">
              {cart.map((item) => (
                <div key={item.product.id} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.title}
                      className="w-10 h-10 rounded object-cover border border-slate-200 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="truncate">
                      <p className="font-semibold text-slate-900 truncate max-w-44">
                        {item.product.title}
                      </p>
                      <p className="text-slate-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-mono font-medium text-slate-900 tabular-nums">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums text-slate-900 font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Delivery</span>
                <span className="font-mono tabular-nums">
                  {shippingFee === 0 ? (
                    <strong className="text-emerald-700">Free</strong>
                  ) : (
                    `$${shippingFee.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5% VAT)</span>
                <span className="font-mono tabular-nums">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-slate-950 pt-3 border-t border-slate-200">
                <span>Total Due</span>
                <span className="font-mono tabular-nums text-lg">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 px-4 bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-70 cursor-wait' : ''
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isSubmitting ? 'Confirming Order...' : 'Confirm & Place Order'}</span>
            </button>

            <p className="text-[11px] text-slate-500 text-center leading-relaxed">
              By confirming your order, you agree to NexStore terms of sale and privacy policy. No credit card details stored.
            </p>
          </div>
        </div>

      </form>

    </div>
  );
};
