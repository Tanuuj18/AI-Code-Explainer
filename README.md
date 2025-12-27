# AI-Code-Explainer
This is a full-stack web application built using a client–server architecture, where the frontend is developed with React and the backend with Node.js and Express. The backend handles API requests, business logic, and database interactions, while the frontend provides a responsive user interface. The project is designed to be modular and scalable.

Tech Stack

Frontend
React
JavaScript
HTML
CSS

Backend
Node.js
Express.js
MongoDB

Project Structure

project root
client folder contains frontend code
server folder contains backend code

How to Run the Project

Step 1 Clone the repository from GitHub

Step 2 Backend setup
Go to the server folder
Run npm install
Run npm start

Step 3 Frontend setup
Go to the client folder
Run npm install
Run npm start

Environment Variables

Create a file named .env inside the server folder and add the following

PORT equals 5000
MONGO_URI equals your MongoDB connection string

The environment file is not pushed to GitHub for security reasons

Database Usage

MongoDB is used in the backend to store and manage application data. The Express server connects to MongoDB and performs create read update and delete operations. The frontend communicates with the backend using REST APIs to fetch and update data.

Key Features

Client server architecture
REST API based communication
Secure environment variable handling
Scalable and maintainable code structure
