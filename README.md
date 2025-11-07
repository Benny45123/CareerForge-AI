# CareerForge-AI
CareerForge-AI 🚀

An AI-powered cover letter generator and job application assistant built with React and the Gemini API.

CareerForge-AI is a modern web application designed to streamline and accelerate the job application process. It goes beyond simple text editing by leveraging the Google Gemini API to intelligently craft tailored cover letters, find recipient information, and help you put your best foot forward.

✨ Key Features

AI Cover Letter Generation: Automatically generates a professional, tailored cover letter based on a job description, your resume text, and key skills.

AI Recipient Finder: Uses Google Search grounding via the Gemini API to analyze a job description and find the hiring manager's name and company details.

Modern, Responsive UI: A clean, beautiful, and fully responsive interface built with React and Tailwind CSS.

Slide-Out Navigation: A smooth, animated sidebar for easy navigation.

Dynamic Form: An interactive, multi-part form to guide you through the creation process.

🛠️ Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS

AI: Google Gemini API (gemini-2.5-flash)

Routing: React Router

Icons: Bootstrap Icons

🚀 Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites

Node.js (v18.0.0 or later)

npm or yarn

Installation

Clone the repository:

git clone [reponame]


Install NPM packages:

npm install


Run the development server:

npm run dev


The app will be running at http://localhost:5173.

How It Works

This application is built as a single-page app (SPA) using React. The App.jsx file contains all components and logic.

AI Features

Find Recipient Info:

The user pastes a job description.

When the "Find Recipient" button is clicked, the app sends the job description to the Gemini API with Google Search grounding enabled.

It requests a JSON response containing the recipientName, companyName, and companyAddress, which are then used to pre-fill the "To:" section of the form.

Generate Cover Letter:

The user fills out their information ("From:"), the recipient information ("To:"), the job description, their resume text, and any focus skills.

When the "Generate Cover Letter" button is clicked, all this data is compiled into a detailed system prompt.

This prompt is sent to the Gemini API, which generates a complete, professional cover letter draft based on all the provided context.

The draft is then displayed in a text area, ready for the user to review, edit, and use.

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.