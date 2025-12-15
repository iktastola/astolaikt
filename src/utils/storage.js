export const getStoredValue = (key, defaultValue) => {
    if (typeof window === "undefined") return defaultValue;
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.warn(`Error reading localStorage key “${key}”:`, e);
        return defaultValue;
    }
};

export const setStoredValue = (key, value) => {
    if (typeof window === "undefined") return;
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.warn(`Error setting localStorage key “${key}”:`, e);
    }
};
