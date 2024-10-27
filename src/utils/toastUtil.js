import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Configuration options for react-toastify
const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

// Initialize toast container, ideally in the root component
export const ToastContainer = toast.ToastContainer;

// Utility functions to show different types of toasts
export const showSuccessToast = (message) => {
    toast.success(message, toastConfig);
};

export const showErrorToast = (message) => {
    toast.error(message || 'Something Went Wrong!', toastConfig);
};

export const showInfoToast = (message) => {
    toast.info(message, toastConfig);
};

export const showWarningToast = (message) => {
    toast.warn(message, toastConfig);
};
