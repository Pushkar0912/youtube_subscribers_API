checked on Site = https://youtube-subscribers-api-tau.vercel.app/


Introduction
The YouTube Subscribers Backend is a RESTful API designed to retrieve YouTube subscriber data from a MongoDB database. This project was created to address a specific problem statement, and it follows a modular coding approach for scalability and maintainability.

Features
Modular Codebase: The project is organized into separate files for different functionalities, enhancing code readability and maintainability.

Database Handling: Database operations are managed in a dedicated file, promoting separation of concerns and easier maintenance.

GET Routes: The API offers three main GET routes to retrieve subscriber data:

GET /subscribers: Returns an array of subscribers as an object.
GET /subscribers/names: Returns an array of subscribers with only two fields: name and subscribedChannel.
GET /subscribers/:id: Returns subscriber details (an object) based on the provided ID. If the ID does not match any subscriber, it responds with a 400 status code and an error message ({message: error.message}).
Usage
To use this API, follow these steps:

Clone the repository to your local machine.

Install the required dependencies using npm install.

Configure your MongoDB connection by setting the DATABASE_URI environment variable in a .env file.

Start the server using npm start.

Example Requests
Get All Subscribers
GET http://localhost:3000/subscribers
Get Subscribers with Names Only
GET http://localhost:3000/subscribers/names
Get Subscriber by ID
GET http://localhost:3000/subscribers/:id
Replace :id with the actual subscriber ID.

Feedback
If you have any feedback, suggestions, or issues with this project, please don't hesitate to [create an issue] on our GitHub repository.

Get Subscribers with Names Only http GET= http://localhost:3000/subscribers/names Get Subscriber by ID http GET= http://localhost:3000/subscribers/:id Replace :id with the actual subscriber ID.

Feedback If you have any feedback, suggestions, or issues with this project, please don't hesitate to create an issue on our GitHub repository.
