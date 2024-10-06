import { useTheme } from "@/pages/context/theme";
import style from "./style.module.css";

export default function ThemeToggle() {
  const theme = useTheme();
  const updateTheme = () => {
    theme.setTheme();
  };
  return (
    <div className={style.theme_toggle_container}>
      <button
        className={`${style.theme_toggle_btn} ${
          theme.isLight ? style.light_toogle_btn : style.dark_toogle_btn
        }`}
        onClick={() => updateTheme()}
      ></button>
    </div>
  );
}
