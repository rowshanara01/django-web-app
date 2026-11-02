
#### Django Web App ####

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)



## 📌 About ##

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features ##

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack  ##

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure ##

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

#### 🚀 Getting Started ####

###3 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

#### 1. Clone the repository ####

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

#### 2. Set up environment variables .####

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

#### 3. Run the back-end (Django) ####

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

#### 🔐 Environment Variables ####

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment ..
- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)


## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)## Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)## Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing  # Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)## Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)## Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)## Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01) Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)## Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)## Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)# Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)

🔗 **Live Demo:** [your-project-link.com](https://your-project-link.com)

## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01) Django Web App

A full-stack e-commerce web application with a **Django (Python)** back-end and a **TypeScript** front-end.

![TypeScript](https://img.shields.io/badge/TypeScript-94.9%25-3178c6)
![Python](https://img.shields.io/badge/Python-4.6%25-3776ab)
![Django](https://img.shields.io/badge/Django-092e20?logo=django&logoColor=white)



## 📌 About

Replace this paragraph with a short description of your store: what it sells, who it is for, and what makes it different.

## ✨ Features

- Product catalog with listing and detail pages
- Shopping cart and checkout flow
- User registration and login
- Django REST back-end serving a TypeScript front-end
- Responsive design for mobile, tablet and desktop
- Environment-based configuration with `.env`

> Edit this list so it matches the features your store really has.

## 🛠️ Tech Stack

**Front-end**
- **TypeScript** – type-safe application code
- **React / Next.js** – user interface (keep the one you use)
- **Vite** – dev server and bundler (remove if you use Next.js)

**Back-end**
- **Python** and **Django** – server, database models and API
- **SQLite / PostgreSQL / MySQL** – database (update to match your settings)

## 📁 Project Structure

```
django-web-app/
├── backend/                    # Django back-end (API, models, admin)
├── frontend/                   # TypeScript front-end
├── django-next-ecommerce/      # Django + Next.js e-commerce version
├── nexstore-ecommerce/         # NexStore e-commerce version
├── src/                        # Source code of the root front-end app
├── public/                     # Static assets
├── index.html                  # App entry page
├── metadata.json
├── package.json
├── tsconfig.json
├── .env.example                # Example environment variables
└── README.md
```

> Update the comments above so each folder's description is accurate.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher) and npm
- [Python 3.10+](https://www.python.org/downloads/) and pip
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rowshanara01/django-web-app.git
cd django-web-app
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

On Windows Command Prompt, use `copy .env.example .env`, then fill in your own values in `.env`.

### 3. Run the back-end (Django)

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The API will run at `http://127.0.0.1:8000`, and the admin panel at `http://127.0.0.1:8000/admin`.

### 4. Run the front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and set your own values. Typical variables include:

```env
SECRET_KEY=your_django_secret_key
DEBUG=True
DATABASE_URL=your_database_url
API_URL=http://127.0.0.1:8000
```

> Never commit your `.env` file to GitHub. It is already listed in `.gitignore`.

## 🌐 Deployment

- **Front-end:** deploy on **Vercel** or **Netlify** by importing the GitHub repository and setting the root directory to the front-end folder.
- **Back-end:** deploy Django on **Render**, **Railway** or a VPS. Set `DEBUG=False`, add your production environment variables, and run `python manage.py migrate`.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👩‍💻 Author

**Rowshanara Akhter**

- GitHub: [@rowshanara01](https://github.com/rowshanara01)
