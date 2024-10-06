import { useContext, createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isLight, setIsLight] = useState(true);

  const setTheme = () => setIsLight(!isLight);

  const applyTheme = () => {
    if (isLight) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  };

  useEffect(() => {
    applyTheme();
  }, [isLight]);

  return (
    <ThemeContext.Provider value={{ isLight, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
