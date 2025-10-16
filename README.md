HNG13 Backend Stage 0 - Profile Endpoint

👤 Author

Name: Festus Okagbare
Email: festiveokotieboh@gmail.com
Stack: Node.js / Express

Project Description

This project is a simple RESTful API that returns basic profile information, a random cat fact fetched from an external API, and a timestamp in ISO 8601 format.
It is part of the HNG13 Backend Stage 0 task.

Deployed URL

Base URL:
https://hng-backend-968246076033.us-central1.run.app

Endpoint:
GET /me:
https://hng-backend-968246076033.us-central1.run.app/me


Example Response
{
  "status": "success",
  "user": {
    "email": "festiveokotieboh@gmail.com",
    "name": "Festus Okagbare",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-16T15:28:19.229Z",
  "fact": "The oldest cat on record was Crème Puff from Austin, Texas, who lived from 1967 to 2005, reaching 38 years of age."
}


 Tech Stack

Node.js – JavaScript runtime environment
Express.js – Web framework for building APIs
Axios – For fetching random cat facts from an external API


Setup Instructions

1. Clone the repository
git clone https://github.com/festiveokotieboh/hng-backend-stage0.git


2. Navigate into the project folder
cd hng-backend-stage0

3. Install dependencies
npm install

4. Run the server locally
npm start

5. Access your API
http://localhost:3000/me

Contact

For inquiries or collaborations:
Email: festiveokotieboh@gmail.com

GitHub Profile: https://github.com/Festiveokagbare