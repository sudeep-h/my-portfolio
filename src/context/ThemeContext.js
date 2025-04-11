import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Read from localStorage if available
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#1e1e1e';
      document.body.classList.add('text-light');
      document.body.classList.remove('text-dark');
    } else {
      document.body.style.backgroundColor = '#f8f9fa';
      document.body.classList.remove('text-light');
      document.body.classList.add('text-dark');
    }
  }, [darkMode]);
  
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
