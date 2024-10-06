import style from "./style.module.css";
import navbarData from "../../data/navbar.json";
import Link from "next/link";
import ThemeToggle from "../themeToggle";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.nav_items_row}>
        <ThemeToggle />
        {navbarData.map((navItem) => {
          return (
            <Link href={navItem.path} className={style.navbar_item}>
              {navItem.title}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
