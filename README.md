# Haut Logistics

## Overview

Haut Logistics is a web application developed for Haut Logistics, located in North York, Canada. It serves as a platform for customers to track their deliveries and learn more about the Haut brand. The application is built with React.js and utilizes Bootstrap and Material-UI for styling and components.

The web application allows customers to enter their tracking number to track their deliveries. It provides a user-friendly interface for easy navigation and access to delivery information.

The project is currently deployed and accessible at ```https://hautlogistics.vercel.app```

## Features

### 1. Delivery Tracking

- Customers can enter their tracking number to track their deliveries.
- The application provides real-time updates on delivery status.

### 2. Information Pages

- Users can access information about the Haut brand.
- Pages include details about Haut Logistics, its services, and its clients.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Bootstrap: A front-end framework for developing responsive and mobile-first websites.
- Material-UI: A popular React UI framework for building web applications with Material Design components.
- Vercel: Deployment platform used for hosting the web application.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository from GitHub: `git clone <repository-url>`
2. Navigate to the project directory: `cd haut-logistics`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure

The project structure follows a standard React application layout:

```
haut-logistics/
│
├── public/               # Public assets and index.html
│   ├── index.html
│   └── ...
│
├── src/                  # Source files
│   ├── assets/           # Images, CSS, and other assets
│   │   ├── images/
│   │   ├── css/
│   │   └── ...
│   ├── components/       # React components
│   │   ├── About.jsx
        ├── Banner.jsx
        ├── Contact.jsx
        ├── FAQs.jsx
        ├── Footer.jsx
        ├── Header.jsx
        ├── Services.jsx
│   │   ├── Track.jsx
│   │   └── ...
│   ├── navigation/           # Routes using React Router Dom
│   │   ├── index.jsx
│   │   └── ...
│   ├── pages/           # The web application is configured to be a one-page site. Links with ScrollLink for smooth scrolling
│   │   ├── Home
│   │   └── ...
│   ├── App.js            # Main application component
│   └── index.js          # Entry point
│
├── .gitignore            # Git ignore file
├── package.json          # npm package configuration
└── README.md             # Project README file
```

## Deployment

The web application is deployed using Vercel. Deployment is triggered automatically upon pushing changes to the main branch of the GitHub repository.

## Contributors

- Opeyemi Oduyemi (https://github.com/oduyemi)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
