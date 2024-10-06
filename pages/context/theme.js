import { useContext, createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("isLightMode");
      return storedTheme ? JSON.parse(storedTheme) : true;
    }
    return true;
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    applyTheme();
  }, [isLight]);

  const setTheme = () => setIsLight(!isLight);

  const applyTheme = () => {
    localStorage.setItem("isLightMode", JSON.stringify(isLight));
    if (isLight) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ isLight, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
