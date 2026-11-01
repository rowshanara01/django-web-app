import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    orderNumber: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Your message has been dispatched to our client care team!', 'success');
  };

  const faqs = [
    {
      q: 'How does Cash on Delivery (COD) work?',
      a: 'We offer Cash on Delivery across all 64 districts in Bangladesh. You simply place the order with your delivery address, inspect the sealed parcel package upon delivery, and pay the exact amount in cash directly to the courier agent.',
    },
    {
      q: 'Can I pay via bKash or Mobile Banking?',
      a: 'Yes! We support instant mobile banking payments via bKash, Nagad, and Rocket during checkout. You will receive an instant payment confirmation and invoice receipt.',
    },
    {
      q: 'How can I track my shipment?',
      a: 'Once your order is confirmed, you can track fulfillment progress directly from your Customer Dashboard under "My Orders". We also send courier dispatch updates via SMS and email.',
    },
    {
      q: 'What is your return & warranty policy?',
      a: 'We offer a 30-day hassle-free return policy. If your product does not meet expectations, we will provide a prepaid return slip or dispatch a courier for pickup.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title */}
      <div className="max-w-2xl space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Client Care & Inquiries
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Contact Support & Consultation
        </h1>
        <p className="text-sm text-slate-600">
          Have a question about an order, custom mechanical keyboard build, or technical specification? Our specialists are available 6 days a week.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Thank You for Reaching Out</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                We have received your ticket and assigned a support specialist. You will receive an email response at <strong>{formData.email}</strong> within 4 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', orderNumber: '', message: '' });
                }}
                className="mt-4 px-5 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">Direct Support Ticket</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahim Chowdhury"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Product Warranty Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Order Reference (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. NX-1042"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Message Description <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Detail your question, inquiry, or delivery instructions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs focus:ring-1 focus:ring-slate-950 focus:border-slate-950"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Ticket</span>
              </button>
            </form>
          )}
        </div>

        {/* Location & Support Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900">Headquarters & Showroom</h3>
            
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                <span>NexStore Flagship Tower, Level 14, Gulshan Avenue, Dhaka-1212, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-700 shrink-0" />
                <span className="font-mono tabular-nums">+880 1712-345678 / +880 1819-000000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-700 shrink-0" />
                <span>support@nexstore.dev / care@nexstore.dev</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-slate-700 shrink-0" />
                <span>Saturday – Thursday: 9:00 AM – 9:00 PM BST</span>
              </div>
            </div>
          </div>

          {/* Quick FAQ Accordion */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 mb-2">Frequently Asked Questions</h3>
            <div className="divide-y divide-slate-100">
              {faqs.map((faq, idx) => (
                <div key={idx} className="py-2.5">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-xs font-semibold text-slate-800 hover:text-slate-950"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                        openFaq === idx ? 'rotate-180 text-slate-900' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
