import React, { useState, useRef } from 'react';
import { useStore } from '../context/StoreContext';
import { User, Camera, Lock, Package, MapPin, KeyRound, CheckCircle, Clock, Truck, Eye, ArrowRight } from 'lucide-react';
import { Order } from '../types';

export const UserDashboard: React.FC = () => {
  const { 
    currentUser, 
    updateUserProfile, 
    changePassword, 
    orders, 
    setCurrentRoute, 
    showToast 
  } = useStore();

  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'security'>('orders');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Profile Edit State
  const [name, setName] = useState(currentUser?.name || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [street, setStreet] = useState(currentUser?.address?.street || '');
  const [city, setCity] = useState(currentUser?.address?.city || '');
  const [state, setState] = useState(currentUser?.address?.state || '');
  const [postalCode, setPostalCode] = useState(currentUser?.address?.postalCode || '');

  // Password Change State
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pwError, setPwError] = useState('');

  // File input ref for avatar upload
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!currentUser) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Sign in to Access Your Dashboard</h2>
        <p className="text-xs text-slate-500">
          Please log in to manage your profile, view orders, and change security credentials.
        </p>
        <button
          onClick={() => setCurrentRoute('auth')}
          className="px-5 py-2.5 bg-slate-950 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
        >
          Go to Sign In
        </button>
      </div>
    );
  }

  // Filter orders placed by current user
  const userOrders = orders.filter(
    (o) => o.userId === currentUser.id || o.customerEmail.toLowerCase() === currentUser.email.toLowerCase()
  );

  // Handle Profile Image Upload (FileReader Data URL)
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file (PNG, JPG, WebP).', 'error');
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      showToast('Image size exceeds 3MB limit.', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      updateUserProfile({ avatarUrl: result });
      showToast('Profile image updated successfully!', 'success');
    };
    reader.readAsDataURL(file);
  };

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name,
      phone,
      address: {
        street,
        city,
        state,
        postalCode,
        country: 'Bangladesh',
      },
    });
  };

  const handlePasswordChangeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPwError('');

    if (newPassword !== confirmPassword) {
      setPwError('New passwords do not match.');
      return;
    }

    if (newPassword.length < 6) {
      setPwError('New password must be at least 6 characters.');
      return;
    }

    const res = changePassword(oldPassword, newPassword);
    if (res.success) {
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      setPwError(res.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Header Card with User Avatar & Role */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-md">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          
          {/* Avatar with Camera Upload Overlay */}
          <div className="relative group shrink-0">
            {currentUser.avatarUrl ? (
              <img
                src={currentUser.avatarUrl}
                alt={currentUser.name}
                className="w-20 h-20 rounded-full object-cover ring-4 ring-slate-800"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-slate-800 text-white text-2xl font-bold flex items-center justify-center ring-4 ring-slate-800">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
            )}
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 bg-black/60 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white cursor-pointer"
              title="Upload new profile picture"
            >
              <Camera className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] font-semibold">Change</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageFileChange}
              className="hidden"
            />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-white">{currentUser.name}</h1>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 capitalize">
                {currentUser.role}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">{currentUser.email}</p>
            <p className="text-xs text-slate-400">
              Customer since {new Date(currentUser.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium flex items-center gap-2 transition-colors border border-slate-700"
        >
          <Camera className="w-4 h-4" />
          <span>Upload Profile Photo</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-4 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('orders')}
          className={`py-3 px-2 border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'orders'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>My Orders ({userOrders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('profile')}
          className={`py-3 px-2 border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'profile'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <User className="w-4 h-4" />
          <span>Profile & Address</span>
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`py-3 px-2 border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === 'security'
              ? 'border-slate-950 text-slate-950 font-bold'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>Password & Security</span>
        </button>
      </div>

      {/* TAB 1: USER ORDERS */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          {userOrders.length === 0 ? (
            <div className="py-16 text-center bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <Package className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-sm font-bold text-slate-900">No orders placed yet</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore our catalog to place your first order with instant cash on delivery or mobile banking.
              </p>
              <button
                onClick={() => setCurrentRoute('shop')}
                className="mt-2 px-4 py-2 bg-slate-950 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {userOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-xs transition-shadow space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold font-mono text-slate-900">
                        #{order.orderNumber}
                      </span>
                      <span className="text-xs text-slate-500">
                        Placed on {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                          order.status === 'Delivered'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : order.status === 'Shipped'
                            ? 'bg-sky-50 text-sky-700 border border-sky-200'
                            : order.status === 'Cancelled'
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {order.status}
                      </span>

                      <span className="text-[11px] text-slate-500 font-mono">
                        {order.paymentMethod} ({order.paymentStatus})
                      </span>
                    </div>
                  </div>

                  {/* Order items preview */}
                  <div className="divide-y divide-slate-100">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="py-2 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.imageUrl}
                            alt={item.productTitle}
                            className="w-10 h-10 rounded object-cover border border-slate-200"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <p className="font-semibold text-slate-900">{item.productTitle}</p>
                            <p className="text-slate-500 font-mono tabular-nums">
                              Qty: {item.quantity} × ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <span className="font-mono font-medium text-slate-900 tabular-nums">
                          ${(item.quantity * item.price).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="text-xs font-medium text-slate-700 hover:text-slate-950 flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Invoice & Shipping Receipt</span>
                    </button>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 mr-2">Total Amount:</span>
                      <span className="text-sm font-bold font-mono text-slate-950 tabular-nums">
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: PROFILE & ADDRESS */}
      {activeTab === 'profile' && (
        <form onSubmit={handleProfileSave} className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1 pb-4 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900">Personal & Delivery Information</h3>
            <p className="text-xs text-slate-500">
              Update your contact details and default courier delivery address.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Full Customer Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Mobile Number (For Courier Delivery)
              </label>
              <input
                type="tel"
                placeholder="+880 1712-345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Street Address / Apartment
            </label>
            <input
              type="text"
              placeholder="e.g. House 42, Road 11, Banani"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                City / District
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                State / Division
              </label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-slate-950 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Save Profile Changes
          </button>
        </form>
      )}

      {/* TAB 3: PASSWORD RESET & SECURITY */}
      {activeTab === 'security' && (
        <form onSubmit={handlePasswordChangeSubmit} className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-5 max-w-xl">
          <div className="space-y-1 pb-4 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900">Change Account Password</h3>
            <p className="text-xs text-slate-500">
              Ensure your account uses a secure password to prevent unauthorized access.
            </p>
          </div>

          {pwError && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800">
              {pwError}
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              New Password (min 6 characters)
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-slate-950 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Update Password
          </button>
        </form>
      )}

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                Order Invoice #{selectedOrder.orderNumber}
              </h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-xs font-bold text-slate-400 hover:text-slate-800"
              >
                ✕ Close
              </button>
            </div>

            <div className="text-xs space-y-2 text-slate-600">
              <p><strong>Customer:</strong> {selectedOrder.customerName} ({selectedOrder.customerEmail})</p>
              <p><strong>Shipping Address:</strong> {selectedOrder.shippingAddress.street}, {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.postalCode}</p>
              <p><strong>Phone:</strong> {selectedOrder.shippingAddress.phone}</p>
              <p><strong>Payment Method:</strong> {selectedOrder.paymentMethod} ({selectedOrder.paymentStatus})</p>
              <p><strong>Current Status:</strong> <span className="font-semibold text-slate-900">{selectedOrder.status}</span></p>
            </div>

            <div className="border-t border-slate-100 pt-3 space-y-2 text-xs">
              <span className="font-bold text-slate-800 block">Item Breakdown:</span>
              {selectedOrder.items.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>{item.productTitle} × {item.quantity}</span>
                  <span className="font-mono tabular-nums font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-3 text-xs space-y-1">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-mono tabular-nums">${selectedOrder.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-mono tabular-nums">${selectedOrder.shippingFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span className="font-mono tabular-nums">${selectedOrder.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-slate-950 pt-2 border-t">
                <span>Grand Total:</span>
                <span className="font-mono tabular-nums">${selectedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedOrder(null)}
              className="w-full py-2 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold hover:bg-slate-200"
            >
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
