import style from "./style.module.css";
import navbarData from "../../data/navbar.json";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      {navbarData.map((navItem) => {
        return (
          <Link href={navItem.path} className={style.navbar_item}>
            {navItem.title}
          </Link>
        );
      })}
    </header>
  );
}
