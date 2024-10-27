// Helper function to check if a string is base64 encoded
const isBase64 = (str) => {
  try {
    return btoa(atob(str)) === str;
  } catch {
    return false;
  }
};

// Get an item from encrypted local storage
export const getEncryptedLocalStorageItem = (key) => {
  const value = localStorage.getItem(key);
  if (value && isBase64(value)) {
    try {
      return JSON.parse(atob(value));
    } catch {
      console.error("Failed to parse decrypted value.");
      return null;
    }
  }
  return null;
};

// Set an item in encrypted local storage
export const setEncryptedLocalStorageItem = (key, value) => {
  try {
    const encodedValue = btoa(JSON.stringify(value));
    localStorage.setItem(key, encodedValue);
    console.log(`Set ${key} in localStorage:`, value);
  } catch {
    console.error("Failed to set encrypted local storage.");
  }
};

// Get the token from local storage
export const getToken = () => getEncryptedLocalStorageItem("token");

// Set the token in local storage
export const setToken = (token) => {
  setEncryptedLocalStorageItem("token", token);
  console.log("Token set in localStorage:", token);
};

// Clear the token from local storage
export const clearToken = () => {
  localStorage.removeItem("token");
  console.log("Token cleared from localStorage.");
};

// Clear an encrypted local storage item
export const clearEncryptedLocalStorageItem = (key) => {
  localStorage.removeItem(key);
  console.log(`Cleared ${key} from localStorage.`);
};
