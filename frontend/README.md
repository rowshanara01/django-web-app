# 🛍️ NexStore — Modern E-Commerce Frontend

A contemporary, high-performance E-Commerce frontend interface built with **React**, **TypeScript**, and **Tailwind CSS**. Designed with an editorial luxury aesthetic, zero-pill discipline, smooth cart drawer interactions, and role-based customer and administration panels.

---

## ✨ Key Features

- **🎨 Modern Luxury Retail UI**: Powered by *Plus Jakarta Sans* typography, balanced letter-spacing, subtle glassmorphic navigation, and refined micro-interactions.
- **🛒 Interactive Shopping Cart & Quick View**:
  - Instant *Add to Bag* directly from Home and Shop grids.
  - Slide-over Cart Drawer with item stepper (+ / -), item removal, and free shipping threshold calculator.
  - Quick View Modal with full product photography, specifications, and instant purchase actions.
- **💳 Complete Customer Checkout**:
  - All-inclusive delivery form: Full Name, Courier Mobile Number, Address, City/District, and Delivery Notes.
  - Multi-payment support: Cash on Delivery (COD), bKash / Mobile Banking, and Credit / Debit Cards.
  - Printable invoice receipt with unique order number (`#NX-XXXX`).
- **👤 Customer Dashboard**:
  - Instant Profile Photo upload with live local preview and persistence.
  - Secure Password Change / Reset section.
  - Live Order History with fulfillment status tracking (*Pending*, *Processing*, *Shipped*, *Delivered*).
- **🛡️ Master Admin Control Console**:
  - **Product CRUD**: Create, update price/stock/SKU/images, and delete catalog products.
  - **Category CRUD**: Full taxonomy creation, editing, and deletion.
  - **Brand CRUD**: Partner brand studio profiles and origins management.
  - **Order Management**: Fulfill customer orders and toggle payment verification statuses.
- **🔒 Anti-Privilege Escalation**: Public customer registration is strictly locked to `customer` privileges only.

---

## 🛠️ Tech Stack

- **Framework**: React 19 / Next.js architecture
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Build Tool**: Vite 8.x

---

## 🚀 Quick Start Guide

### 1. Clone the repository
```bash
git clone https://github.com/your-username/nexstore-frontend.git
cd nexstore-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist` directory.

---

## 📁 Project Structure

```text
frontend/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx      # 3-Zone glassmorphism navbar & search modal
│   │   ├── Footer.tsx      # Clean commercial footer & trust badges
│   │   ├── CartDrawer.tsx  # Slide-over cart with shipping calculator
│   │   ├── ProductCard.tsx # Contemporary retail product card
│   │   └── Toast.tsx       # Floating alert notification system
│   ├── pages/              # Main route views
│   │   ├── HomePage.tsx    # Editorial hero, collections & bento story
│   │   ├── ShopPage.tsx    # Filter sidebar (categories, brands, price)
│   │   ├── AboutPage.tsx   # Brand craftsmanship & quality standards
│   │   ├── ContactPage.tsx # Direct support ticket form, hotline & FAQ
│   │   ├── CheckoutPage.tsx# Customer shipping & payment confirmation
│   │   ├── AuthPage.tsx    # Customer sign-in & non-escalating register
│   │   ├── UserDashboard.tsx  # Profile photo upload & order history
│   │   └── AdminDashboard.tsx # Product, Category, Brand & Order CRUD
│   ├── context/
│   │   └── StoreContext.tsx# Persistent state management & CRUD logic
│   ├── data/
│   │   └── initialData.ts  # Curated initial catalog items & categories
│   ├── types.ts            # TypeScript interfaces and contracts
│   ├── App.tsx             # Root router and layout container
│   ├── index.css           # Tailwind v4 import & typography definitions
│   └── main.tsx            # DOM root mounting
├── index.html              # HTML entry point with Plus Jakarta Sans
├── package.json
└── vite.config.ts
```

---

## 🌐 Deploying to Vercel (1-Click)

1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `nexstore-frontend` repository.
4. Framework Preset: **Vite** (or Next.js).
5. Click **"Deploy"**. Your site is now live with free SSL!

---

## 📄 License
This project is open-source under the MIT License.
