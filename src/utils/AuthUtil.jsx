// src/utils/AuthUtil.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { getEncryptedLocalStorageItem } from './localStorage';

// Define a Private Route for logged-in users
export const PrivateRoute = () => {
    return getEncryptedLocalStorageItem("token") ? <Outlet /> : <Navigate to="/login" />;
};

// Define a Private Route for admin users (if needed)
export const PrivateAdminRoute = () => {
    const isAdmin = getEncryptedLocalStorageItem("isAdmin"); // Assuming 'isAdmin' is saved in localStorage
    return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

// Define a route that should be accessed only when not logged in
export const PrivateLoginRoute = () => {
    return !getEncryptedLocalStorageItem("token") ? <Outlet /> : <Navigate to="/" />;
};
