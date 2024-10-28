
# Crafto - A React-based Quote Management Application

Crafto is a frontend application built using React, Vite, and Material UI, designed to manage quotes efficiently. It allows users to log in, create, view, and manage quotes with a dynamic and responsive user interface. The application supports both light and dark themes and includes features such as notifications, user profile management, and toast notifications for enhanced user interaction.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Tech Stack](#tech-stack)
- [Component Details](#component-details)
- [License](#license)

## Project Structure

```
CRAFTO/
│
├── .firebase/                 # Firebase configuration files
├── .vscode/                   # VSCode settings for the project
├── dist/                      # Distribution folder
├── public/                    # Public assets
├── src/                       # Main source code
│   ├── assets/                # Images, logos, and other assets
│   ├── components/            # React components
│   │   ├── forms/             # Form components for various operations
│   │   │   ├── QuoteCreationComponent.jsx
│   │   ├── shared/            # Shared components across the app
│   │   │   ├── DialogComponent.jsx
│   │   │   ├── HeaderComponent.jsx
│   │   │   ├── HelmetComponent.jsx
│   │   ├── LayoutComponent.jsx
│   │   ├── LoginComponent.jsx
│   │   ├── NotificationComponent.jsx
│   │   ├── ProfileComponent.jsx
│   │   ├── QuoteListComponent.jsx
│   ├── utils/                 # Utility files
│   │   ├── api.js
│   │   ├── AuthUtil.jsx
│   │   ├── localStorage.js
│   │   ├── toastUtil.js
│   ├── App.jsx                # Main App component
│   ├── index.css              # Global styles
│   ├── main.jsx               # Entry point for React
│
├── index.html                 # HTML template
├── package.json               # Project dependencies
└── README.md                  # Project README
```

## Features

- **User Authentication**: Includes login functionality with token-based authentication.
- **Theme Support**: Toggle between light and dark modes using `DarkModeSwitch`.
- **Quote Management**:
  - View a list of quotes with infinite scrolling and lazy loading.
  - Add new quotes with text and media uploads.
- **Profile Management**: Users can view and edit their profile information.
- **Notifications**: Displays real-time notifications with mock data.
- **Toast Notifications**: Success, error, info, and warning messages are displayed using `react-toastify`.
- **Protected Routes**: Implements route protection using React Router and localStorage.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd CRAFTO
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at: `http://localhost:3000`

## Running the Application

1. **Start the development server**:

   ```bash
   npm run dev
   ```

   This will launch the app locally on a Vite server.

2. **Build for production**:

   ```bash
   npm run build
   ```

   This command generates a production build in the `dist` directory.

## Tech Stack

- **React.js**: Frontend library for building user interfaces.
- **Vite**: Fast build tool for modern web development.
- **Material UI**: Component library for styling and UI components.
- **React Router**: For client-side routing.
- **React Toastify**: For toast notifications.
- **Axios**: For making API requests.
- **JavaScript (ES6+)**: Primary programming language.
- **CSS**: Styling with CSS and Tailwind CSS for utility classes.

## Component Details

- **`App.jsx`**: The main component that handles routing, theme switching, and authentication.
- **`LoginComponent.jsx`**: Allows users to log in using their username and OTP.
- **`QuoteListComponent.jsx`**: Displays a list of quotes with lazy loading and pagination.
- **`QuoteCreationComponent.jsx`**: Enables users to create new quotes.
- **`NotificationComponent.jsx`**: Shows a list of notifications.
- **`ProfileComponent.jsx`**: Displays user profile details with an option to edit.
- **`DialogComponent.jsx`**: A reusable dialog component for various forms.
- **`HeaderComponent.jsx`**: Navigation header with options for notifications, profile, theme toggle, and logout.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
