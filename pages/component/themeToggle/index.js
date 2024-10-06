import { useTheme } from "@/pages/context/theme";
import style from "./style.module.css";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [lightMode, setLightMode] = useState(null);
  const { isLight, setTheme } = useTheme();

  useEffect(() => {
    setLightMode(isLight);
  }, [isLight]);

  const updateTheme = () => {
    setTheme();
  };

  return (
    <div className={style.theme_toggle_container}>
      <button
        className={`${style.theme_toggle_btn} ${
          lightMode ? style.light_toogle_btn : style.dark_toogle_btn
        }`}
        onClick={updateTheme}
      ></button>
    </div>
  );
}
