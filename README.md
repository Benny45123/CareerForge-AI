# 🚀 CareerForge AI — The Intelligent Job Assistant

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Gemini_2.0_Flash-8E75B2?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

---

### 💡 Elevate Your Career Hunt
**CareerForge AI** is a high-performance assistant designed to bridge the gap between candidates and recruiters. By leveraging **Gemini 2.0 Flash** and **Google Search Grounding**, it doesn't just write letters—it researches companies in real-time.

---

## ✨ Key Features

* **🧠 AI Cover Letter Generation:** Crafts high-impact, tailored letters by analyzing the intersection of your unique skills and the specific job requirements.
* **🔍 AI Recipient Finder:** *Industry-leading feature.* Uses Google Search grounding to scan the web and identify the correct hiring manager and company details from just a job link.
* **💎 Glassmorphism UI:** A sleek, futuristic interface built with React and Tailwind CSS, featuring smooth slide-out navigations and intuitive animations.
* **📊 Interactive Dashboard:** A centralized "Command Center" to manage, view, and organize your generated career assets.
* **📝 Multi-Step Flow:** A guided, frictionless wizard that makes inputting complex resume data simple and fast.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React (Vite), Tailwind CSS, React Router |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Atlas) |
| **AI Intelligence** | Google Gemini 2.0 Flash |
| **Live Search** | Google Search Grounding |

---

## 🚀 Getting Started

### 📋 Prerequisites
- Node.js (v18.0.0+)
- MongoDB Atlas account
- Google AI Studio API Key

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Benny45123/CareerForge-AI.git](https://github.com/Benny45123/CareerForge-AI.git)
    cd CareerForge-AI
    ```

2.  **Setup Backend:**
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` folder:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    GEMINI_API_KEY=your_gemini_key_here
    ```
    Start the backend:
    ```bash
    npm start
    ```

3.  **Setup Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```
    Start the frontend:
    ```bash
    npm run dev
    ```

## 📁 Project Structure

```text
├── backend/            # Express.js server & MongoDB models
│   ├── models/         # Database schemas
│   └── server.js       # API endpoints & Gemini integration
├── frontend/           # React application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   └── App.jsx     # Main application logic
└── vercel.json         # Deployment configuration
```

## 🔒 Security & Optimization 
* **CORS Config:** Optimized for secure cross-origin resource sharing between Render and Vercel.

* **Dynamic Grounding:** Ensures the AI doesn't "hallucinate" company info by verifying facts via Google Search.

<p align="center"> Developed by <strong>Benny</strong><br/>
<em>Next-gen tools for the next-gen workforce.</em> </p>
