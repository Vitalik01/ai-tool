# AI Tool Project

## Description

This project consists of a backend and a frontend, where the backend is built using Python with Flask, and the frontend is a React application. Follow the steps below to set up and run the project locally.

## Prerequisites

- Python 3.x
- Node.js
- npm
- A code editor like [VSCode](https://code.visualstudio.com/)

## Setup Instructions

### Step 1: Clone repository

1.  Start by cloning the repository to your local machine:

git clone https://github.com/Vitalik01/ai-tool
cd ai-tool

### Step 2: Set up the backend

1.  Navigate to the backend directory: Go to the backend directory where the backend code is located.

    cd backend

2.  Create a virtual environment: This step creates a virtual environment for the backend dependencies.

    python3 -m venv venv

3.  Activate the virtual environment:

    On macOS/Linux:
    source venv/bin/activate

    On Windows:
    .\venv\Scripts\activate

4.  Install the required Python packages: Install the necessary dependencies listed in the requirements.txt file.

    pip install -r requirements.txt

5.  Set up the environment variables:

        Create a .env file in the backend directory.
        Add your Anthropic API key and Open Api key to this file as follows:

        ANTHROPIC_API_KEY=your_anthropic_api_key
        OPENAI_API_KEY=your_openai_api_key

        Replace your_anthropic_api_key and your_openai_api_key with your actual API key for Anthropic and OpenAI.

### Step 3: Set up the frontend

1. Navigate to the frontend directory: Go to the frontend directory where the frontend code is located.

   cd ../frontend

2. Install the required Node.js packages: Install the frontend dependencies using npm.

   npm install

### Step 4: Run the backend

1. Navigate back to the backend directory (if you are in the frontend directory).

   cd ../backend

2. Start the Flask backend server: Run the Flask application to start the backend server.

   python app.py

### Step 5: Run the frontend

1. Navigate to the frontend directory (if you are not there already).

   cd ../frontend

2. Start the frontend development server: Use npm to start the frontend server.

   npm start

### Step 6: Access the application

Open your browser and navigate to http://localhost:3000/ to use the application.
The frontend will interact with the backend running at http://127.0.0.1:5000/.
