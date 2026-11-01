# 🐍 NexStore — Python Django REST Framework Backend

A production-ready Python Django backend powering the **NexStore E-Commerce Platform**. Implements secure role-based access control, strict one-time master superadmin initialization, product/category/brand ModelViewSets, order fulfillment, and profile management.

---

## ✨ Security & Architecture Invariants

- **🔒 Strict 1-Time Superadmin Initialization**: 
  - Master administrative credentials (email & password) can strictly be generated **only once** using the custom management command `createsuperuser_once`.
  - Any subsequent attempts to create or escalate to superadmin will raise a security lock exception.
- **🛡️ Non-Escalating Customer Registration**:
  - The public registration endpoint (`/api/auth/register/`) hardcodes `role='customer'`, `is_staff=False`, and `is_superuser=False`.
  - Public users cannot assign themselves administrative privileges.
- **⚡ Full REST API (DRF)**:
  - `ProductViewSet` with full CRUD for admins and read-only storefront access for guests/customers.
  - `CategoryViewSet` and `BrandViewSet` with slug lookup and product counters.
  - `OrderViewSet` with itemized relations, fulfillment state transitions, and payment logging.
- **🖼️ Profile Management**:
  - Custom `User` model with avatar image upload, phone number, and physical courier delivery addresses.

---

## 🛠️ Tech Stack & Requirements

- **Python**: 3.10+ / 3.11 / 3.12
- **Framework**: Django 5.x
- **API Engine**: Django REST Framework (DRF)
- **CORS**: `django-cors-headers` (for Next.js / React frontend connection)
- **Image Processing**: `Pillow` (for user avatars and product catalog photos)
- **Database**: PostgreSQL (production) or SQLite3 (local development)

---

## 📁 Backend Directory Layout

```text
backend/
├── manage.py
├── requirements.txt            # Python dependencies
├── nexstore_core/              # Project settings & root routing
│   ├── __init__.py
│   ├── settings.py             # CORS, AUTH_USER_MODEL, Media configuration
│   ├── urls.py                 # Root router with /api/ prefix
│   ├── wsgi.py
│   └── asgi.py
└── store_api/                  # Core E-Commerce application
    ├── __init__.py
    ├── models.py               # Custom User, Category, Brand, Product, Order
    ├── serializers.py          # DRF serializers with role validation
    ├── views.py                # ModelViewSets & Permission classes
    ├── urls.py                 # REST router registration
    ├── admin.py                # Django ModelAdmin configurations
    └── management/
        └── commands/
            └── createsuperuser_once.py  # 1-time admin initialization command
```

---

## 🚀 Step-by-Step Setup Guide

### 1. Clone the repository & create a virtual environment
```bash
git clone https://github.com/your-username/nexstore-backend.git
cd nexstore-backend

# Create virtualenv
python -m venv venv

# Activate virtualenv (Linux/macOS)
source venv/bin/activate
# Or on Windows:
# venv\Scripts\activate
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

#### Sample `requirements.txt`:
```txt
django>=5.0.0
djangorestframework>=3.14.0
django-cors-headers>=4.3.0
pillow>=10.0.0
python-dotenv>=1.0.0
gunicorn>=21.2.0
```

### 3. Run database migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

---

## 🔐 1-Time Superadmin Initialization

As per the platform security requirement (*"admin email and password matro 1 bar e toiri hobe"*), initialize the master administrator **strictly once** with:

```bash
python manage.py createsuperuser_once --email=admin@nexstore.dev --password=YourSecurePassword123!
```

> ⚠️ **Note**: Running this command a second time will fail with:  
> `CommandError: SECURITY LOCK ACTIVE: Master superadmin has already been initialized!`

---

## 🏃 Running the Local Server

```bash
python manage.py runserver 8000
```
- API Base: [http://localhost:8000/api/](http://localhost:8000/api/)
- Django Admin: [http://localhost:8000/admin/](http://localhost:8000/admin/)

---

## 📡 REST API Reference

| Method | Endpoint | Description | Permissions |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register/` | Register new customer account | Public (Customer only) |
| `POST` | `/api/auth/login/` | Token / Session login | Public |
| `GET / PUT` | `/api/auth/profile/` | Manage profile details & avatar upload | Authenticated User |
| `GET` | `/api/products/` | List all catalog products | Public |
| `POST / PUT / DELETE`| `/api/products/` | Create, update, delete products | **Admin Only** |
| `GET` | `/api/categories/` | List categories | Public |
| `POST / PUT / DELETE`| `/api/categories/` | Create, update, delete categories | **Admin Only** |
| `GET` | `/api/brands/` | List partner brands | Public |
| `POST / PUT / DELETE`| `/api/brands/` | Create, update, delete brands | **Admin Only** |
| `POST` | `/api/orders/` | Place a new customer order | Public / Customer |
| `GET` | `/api/orders/` | View order history | Customer (Own) / Admin (All)|
| `PATCH`| `/api/orders/{id}/` | Update status (*Shipped/Delivered*) | **Admin Only** |

---

## 🌐 Deploying to Render / Railway

1. Push this repository to GitHub.
2. Create a new **Web Service** on [Render](https://render.com/) or [Railway](https://railway.app/).
3. Connect your `nexstore-backend` repository.
4. Set Build Command: `pip install -r requirements.txt && python manage.py migrate`
5. Set Start Command: `gunicorn nexstore_core.wsgi:application`
6. Add Environment Variables:
   - `SECRET_KEY=your_production_secret`
   - `DEBUG=False`
   - `CORS_ALLOWED_ORIGINS=https://your-frontend-domain.vercel.app`
7. In the server shell / SSH, execute the 1-time admin command:
   ```bash
   python manage.py createsuperuser_once --email=admin@yourdomain.com --password=StrongPassword!
   ```

---

## 📄 License
This project is open-source under the MIT License.
