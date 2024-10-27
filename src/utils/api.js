import axios from 'axios';
import { getToken, setToken, clearToken } from './localStorage';

const BASE_URL = 'https://assignment.stage.crafto.app';

// Helper function to add authorization headers
const getAuthHeaders = () => {
    const token = getToken();
    if (!token) {
        console.error('No token found in localStorage.');
        throw new Error('No token found. Please login again.');
    }
    return { Authorization: `Bearer ${token}` };
};

// API for User Login
export const login = async (username, otp) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/login`,
            { username, otp },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );

        // Save the token to local storage after successful login
        if (response.data && response.data.token) {
            setToken(response.data.token);
            console.log("Token successfully set in localStorage:", response.data.token);
            return response.data;
        } else {
            console.error('Token not received in response.');
            throw new Error('Failed to receive token.');
        }
    } catch (error) {
        console.error('Login API Error:', error.response?.data || error.message);
        throw error;
    }
};

// API for Fetching Quotes
export const getQuotes = async (limit = 20, offset = 0) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/getQuotes?limit=${limit}&offset=${offset}`,
            {
                headers: getAuthHeaders(),
            }
        );
        return response.data;
    } catch (error) {
        if (error.response?.status === 401) {
            console.warn('Unauthorized access. Please login again.');
            // Notify user to re-login without clearing the token
            throw new Error('Unauthorized access. Please login again.');
        }
        console.error('Get Quotes API Error:', error.response?.data || error.message);
        throw error;
    }
};

// API for Creating a New Quote
export const createQuote = async (text, mediaUrl) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/postQuote`,
            { text, mediaUrl },
            {
                headers: {
                    ...getAuthHeaders(),
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.data && response.data.success) {
            console.log("Quote created successfully:", response.data);
            return response.data;
        } else {
            console.error("Quote creation failed:", response.data);
            throw new Error("Quote creation failed.");
        }
    } catch (error) {
        if (error.response?.status === 401) {
            console.warn('Unauthorized access. Please login again.');
            // Notify user to re-login without clearing the token
            throw new Error('Unauthorized access. Please login again.');
        }
        console.error('Create Quote API Error:', error.response?.data || error.message);
        throw error;
    }
};

// API for Uploading an Image
export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(
            'https://crafto.app/crafto/v1.0/media/assignment/upload',
            formData,
            {
                headers: {
                    ...getAuthHeaders(),
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        if (response.data && response.data[0]?.url) {
            console.log("Image uploaded successfully:", response.data[0]);
            return response.data[0];
        } else {
            console.error("Image upload failed. No URL returned.");
            throw new Error("Image upload failed. No URL returned.");
        }
    } catch (error) {
        if (error.response?.status === 401) {
            console.warn('Unauthorized access. Please login again.');
            // Notify user to re-login without clearing the token
            throw new Error('Unauthorized access. Please login again.');
        }
        console.error('Image Upload API Error:', error.response?.data || error.message);
        throw error;
    }
};

// API for Logging Out
export const logout = () => {
    clearToken();
    console.log("User logged out. Token cleared from localStorage.");
};
