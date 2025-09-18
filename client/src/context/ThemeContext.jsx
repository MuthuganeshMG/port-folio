// import { createContext, useState, useEffect, ReactNode } from 'react';

// type Theme = 'light' | 'dark';

// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
// }

// export const ThemeContext = createContext<ThemeContextType>({
//   theme: 'light',
//   toggleTheme: () => {},
// });

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export const ThemeProvider = ({ children }: ThemeProviderProps) => {
//   const [theme, setTheme] = useState<Theme>('dark');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') as Theme | null;
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (savedTheme) {
//       setTheme(savedTheme);
//     } else if (prefersDark) {
//       setTheme('dark');
//     }
//   }, []);

//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }

//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };


// import { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext({
//   theme: "light",
//   toggleTheme: () => {},
// });

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//     if (savedTheme) {
//       setTheme(savedTheme);
//     } else if (prefersDark) {
//       setTheme("dark");
//     }
//   }, []);

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }

//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Load theme from localStorage OR fallback to "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply theme class to <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
