import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute, PrivateLoginRoute } from "./utils/AuthUtil"; // Import private routes
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {
  getEncryptedLocalStorageItem,
  setEncryptedLocalStorageItem,
} from "./utils/localStorage";

// Lazy load components
const LayoutComponent = lazy(() => import("./components/LayoutComponent"));
const QuoteListComponent = lazy(() => import("./components/QuoteListComponent"));
const QuoteCreationComponent = lazy(() => import("./components/forms/QuoteCreationComponent"));
const NotificationComponent = lazy(() => import("./components/NotificationComponent"));
const ProfileComponent = lazy(() => import("./components/ProfileComponent"));
const LoginComponent = lazy(() => import("./components/LoginComponent"));

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return getEncryptedLocalStorageItem("dark-mode") ??
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!getEncryptedLocalStorageItem("token");
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const token = getEncryptedLocalStorageItem("token");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const currentTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      background: {
        default: isDarkMode ? "#000" : "#fff",
      },
      primary: {
        main: isDarkMode ? "#111216" : "#6200ee",
      },
      secondary: {
        main: isDarkMode ? "#1D2129" : "#03a9f4",
      },
    },
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    setEncryptedLocalStorageItem("dark-mode", newTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public Login Route */}
            <Route element={<PrivateLoginRoute />}>
              <Route
                path="/login"
                element={
                  <LoginComponent
                    currentTheme={isDarkMode}
                    toggleTheme={toggleTheme}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              />
            </Route>

            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/"
                element={
                  <LayoutComponent
                    currentTheme={isDarkMode}
                    toggleTheme={toggleTheme}
                  />
                }
              >
                <Route index element={<QuoteListComponent />} />
                <Route path="my-profile" element={<ProfileComponent />} />
                <Route path="quote/add" element={<QuoteCreationComponent />} />
                <Route path="notifications" element={<NotificationComponent />} />
              </Route>
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
