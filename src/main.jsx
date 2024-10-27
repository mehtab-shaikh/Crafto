import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/montserrat";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { StrictMode } from 'react';


// Render the App with ToastContainer
createRoot(document.getElementById("root")).render(
    <>
        {/* <StrictMode> */}
            <App />
            <ToastContainer limit={1} /> {/* Initialize ToastContainer */}
        {/* </StrictMode> */}
    </>
);
