# ✒️ Midnight Pens – Open Blog Platform

Welcome to **Midnight Pens**, a modern full-stack blog platform where **anyone can share their thoughts freely** just by entering their **name and email**. No accounts. No logins. Just words.

This project is built using **React** for the frontend and **Django** for the backend, crafted with love by **Rahul Bhatia**.

## 🌐 Live Demo

🔗 [midnight-pens.vercel.app](https://midnight-pens.vercel.app)

---

## 🧠 About Midnight Pens

In a world of noise, Midnight Pens offers a quiet corner for expression. Whether it’s poetry, tech, travel, or thoughts at 2 AM – this platform is for spontaneous writers and midnight thinkers.

Anyone can:
- ✍️ Publish a blog instantly
- 📖 Browse posts from others
- 🌒 Write without signups or distractions

---

## 🚀 Features

- 📝 Blog post creation with just name & email
- 📚 Read all blogs on a clean UI
- 🎨 Responsive design with smooth UX
- 🧠 Backend API powered by Django REST Framework
- 🔐 Basic data validation and sanitation
- 🌍 Deployed using **Vercel** (Frontend) and **Render** (Backend)

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios (for API requests)

### Backend
- Django
- Django REST Framework
- CORS Headers
- SQLite (development DB)

---

## 📦 Installation

### Backend (Django)

```bash
git clone https://github.com/rahulbhatia775/midnightpens-backend.git
cd midnightpens-backend
python -m venv env
source env/bin/activate  # Use `env\Scripts\activate` on Windows
pip install -r requirements.txt
python manage.py runserver
git clone https://github.com/rahulbhatia775/midnightpens-frontend.git
cd midnightpens-frontend
npm install
npm start
