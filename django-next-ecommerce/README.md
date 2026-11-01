# 📦 Django + Next.js / React E-Commerce Platform (NexStore)

A production-grade, full-stack e-commerce repository cleanly separated into standalone **frontend** and **backend** workspaces.

---

## 📁 Repository Architecture

```text
django-next-ecommerce/
├── 🌐 frontend/                # Modern React / TypeScript Storefront & Control Panel
│   ├── src/                    # Components, pages, store context, checkout, admin CRUD
│   ├── public/                 # Static assets & icons
│   ├── package.json            # NPM dependencies (React 19, Tailwind CSS v4, Lucide)
│   ├── tsconfig.json           # Strict TypeScript configuration
│   ├── vite.config.ts          # Vite build & bundler configuration
│   ├── index.html              # HTML5 entrypoint
│   └── README.md               # Complete Frontend setup & deployment guide
│
└── 🐍 backend/                 # Python Django REST Framework Service
    ├── manage.py               # Django administrative CLI
    ├── requirements.txt        # Python dependencies (Django 5, DRF, CORS, Pillow)
    ├── nexstore_core/          # Global Django configuration (settings, routing, WSGI)
    ├── store_api/              # E-Commerce app (models, serializers, views, admin)
    │   ├── models.py           # Custom User, Category, Brand, Product, Order
    │   ├── serializers.py      # Non-escalating role enforcement & serializers
    │   ├── views.py            # ModelViewSets & authentication views
    │   ├── urls.py             # REST API routing
    │   ├── admin.py            # Visual Django Admin integration
    │   └── management/commands/createsuperuser_once.py # 1-time master admin lock
    └── README.md               # Complete Backend virtualenv & database guide
```

---

## 🚀 Quick Start

### 1. Run the Backend (Python / Django)
```bash
cd backend
python -m venv venv
source venv/bin/activate       # On Windows: venv\Scriptsctivate
pip install -r requirements.txt
python manage.py migrate

# Initialize 1-time master admin
python manage.py createsuperuser_once --email=admin@nexstore.dev --password=SecurePassword123!

python manage.py runserver 8000
```

### 2. Run the Frontend (React / Vite)
```bash
cd frontend
npm install
npm run dev
```
Visit http://localhost:3000 to view the storefront!
