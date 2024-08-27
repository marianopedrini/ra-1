import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const useTheme = () => {
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme((prev) => !prev);
        document.body.classList.toggle('dark');
    };

    return { theme, toggleTheme };
};
