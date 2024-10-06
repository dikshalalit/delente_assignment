import style from "./style.module.css";

export default function Loader() {
  return (
    <div className={style.loader_container}>
      <div className={style.loader_box}>Loading.....</div>
    </div>
  );
}
