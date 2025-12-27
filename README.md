# CareerForge AI 🚀

**CareerForge AI** is an intelligent job application assistant that helps candidates craft high-impact cover letters and optimize their applications using the power of the **Gemini API**. It features a modern, responsive UI with glassmorphism elements and deep integration with Google Search grounding for accurate company research.

## ✨ Key Features

* **AI Cover Letter Generation:** Automatically generates professional, tailored cover letters based on your resume, the job description, and your specific skills.
* **AI Recipient Finder:** Uses Gemini with Google Search grounding to automatically find the hiring manager's name and company details from a job link or description.
* **Interactive Dashboard:** A centralized place to manage your career documents.
* **Modern UI/UX:** Built with React and Tailwind CSS, featuring slide-out navigation and smooth animations.
* **Multi-Step Form:** An intuitive, guided experience for inputting job details and resume content.

## 🛠️ Tech Stack

### Frontend
* **React** (Vite)
* **Tailwind CSS** (Styling)
* **React Router** (Navigation)
* **Bootstrap Icons**

### Backend & AI
* **Node.js & Express**
* **MongoDB** (Database)
* **Google Gemini API** (`gemini-2.0-flash`)
* **Google Search Grounding** (For real-time recipient info)

## 🚀 Getting Started

### Prerequisites
* Node.js (v18.0.0 or later)
* MongoDB Atlas account
* Google AI Studio API Key

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

Developed by Benny