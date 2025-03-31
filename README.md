# E-commerce-backend
# E-commerce-backend# MERN E-Commerce Project

This is a **MERN stack e-commerce application** with **Admin Panel** functionality. It includes **user authentication**, **product management**, **order management**, and more.

## Features
- User authentication (Login/Register)
- Admin Dashboard (Manage users, products, and orders)
- Add, update, and delete products
- Place orders and manage stock
- Responsive UI

---

## 📌 Technologies Used
### Frontend (React)
- React.js (with Redux for state management)
- React Router
- Bootstrap (for styling)

### Backend (Node.js & Express)
- Node.js with Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT) Authentication

---

## ⚡ Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud via MongoDB Atlas)
- [Git](https://git-scm.com/)

---

## 🚀 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/mern-ecommerce.git
cd mern-ecommerce
```

### 2️⃣ Backend Setup (Server)
1. Navigate to the backend folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file and add the following variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    PORT=5000
    ```
4. Start the backend server:
    ```bash
    npm start
    ```
   The server will run at `http://localhost:5000`.

---

### 3️⃣ Frontend Setup (Client)
1. Open a new terminal and navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React app:
    ```bash
    npm start
    ```
   The frontend will run at `http://localhost:3000`.

---

## 🛠️ API Routes
### Authentication
- `POST /api/auth/register` → Register a new user
- `POST /api/auth/login` → Login user

### Products
- `GET /api/products` → Get all products
- `POST /api/products` → Add new product (Admin only)
- `PUT /api/products/:id` → Update product (Admin only)
- `DELETE /api/products/:id` → Delete product (Admin only)

### Users (Admin)
- `GET /api/users` → Get all users
- `DELETE /api/users/:id` → Delete a user

---

## 🎯 Admin Credentials
Use the following **admin** credentials to log in:
```plaintext
Email: admin@example.com
Password: admin123
```

---

## 🔥 Troubleshooting
1. **MongoDB not connecting?**
   - Check if MongoDB is running locally or update `.env` with the correct MongoDB Atlas URI.

2. **CORS issues?**
   - In `backend/server.js`, ensure CORS is properly configured:
     ```javascript
     const cors = require("cors");
     app.use(cors());
     ```

3. **Login issues?**
   - Ensure JWT token is stored and sent in requests.

---

## ✨ Contributors
- **Your Name** – [GitHub Profile](https://github.com/yourusername)

---

## 📜 License
This project is licensed under the MIT License.

---

Happy Coding! 🚀
