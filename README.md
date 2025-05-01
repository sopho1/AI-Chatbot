# AI Chatbot
A modern, responsive AI-powered chatbot built with React and the Hugging Face Inference API. This project allows users to interact with a conversational AI model (mistralai/Mixtral-8x7B-Instruct-v0.1) in a sleek, user-friendly interface featuring light/dark theme toggling, smooth animations, and mobile responsiveness. Perfect for developers exploring AI integration or building interactive chat applications without billing requirements.

# Features

1. AI-Powered Conversations: Leverages Hugging Face’s free Inference API for natural, context-aware responses.

2. Modern UI: Clean design with animated messages, custom scrollbars, and a responsive layout.

3. Theme Toggle: Switch between light and dark themes for accessibility and user preference.

4. Real-Time Feedback: Loading animations and error handling for a seamless experience.

5. No Billing Required: Uses Hugging Face’s free tier, ideal for prototyping and hobbyist projects.

6. Extensible: Easily swap AI models or add features like conversation history or avatars.

# Tech Stack

Frontend: React (v18.x), JavaScript, CSS3

API: Hugging Face Inference API (mistralai/Mixtral-8x7B-Instruct-v0.1)

Dependencies: Axios (HTTP requests), dotenv (environment variables)

Tools: Node.js, npm, Create React App

Styling: Custom CSS with Inter font, animations, and theme toggling

# Prerequisites
Before running the project, ensure you have:
Node.js (v16 or higher) and npm installed. Download here.

A Hugging Face account and API key (free, no billing required).

A code editor like VS Code.

Basic knowledge of React and JavaScript.

# Setup Instructions

Follow these steps to get the chatbot running locally:
Clone the Repository:
bash

1. git clone https://github.com/your-username/ai-chatbot.git
2. cd ai-chatbot

# Install Dependencies:

npm install

# Get a Hugging Face API Key:

Sign up at huggingface.co.

Go to Profile > Settings > Access Tokens.

Create a new token with Read access and copy it.

# Configure Environment Variables:

1. Create a .env file in the project root:

touch .env

2. Add your API key:

REACT_APP_HF_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

3. Run the App:

npm start

The app will open at http://localhost:3000 in your browser.

Interact with the Chatbot:
Type a message (e.g., “What’s the capital of France?”) and press Enter or click “Send.”

Toggle between light and dark themes using the / button.

# License

This project is licensed under the MIT License (LICENSE). See the LICENSE file for details.

# Acknowledgments

Hugging Face: For providing a free, accessible Inference API.

React: For powering the frontend.

Inter Font: For clean typography.

Inspired by modern chat UI designs and open-source AI projects.

