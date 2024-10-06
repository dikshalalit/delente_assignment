import { useEffect, useState } from "react";
import { callApi } from "../utils/api";
import Loader from "../component/loader";
import style from "./style.module.css";

export default function Todos() {
  const [list, setList] = useState([]);

  useEffect(() => {
    callApi("https://jsonplaceholder.typicode.com/todos", "GET")
      .then((res) => {
        setList(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="app_container">
      {list.length ? (
        list.slice(0, 10).map((item, index) => {
          return <ListItem key={item.id} item={item} serialNum={index + 1} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}

function ListItem({ item, serialNum }) {
  return (
    <div className={style.todo_list_item}>
      <span>{serialNum}. </span>
      <p>{item.title}</p>
    </div>
  );
}
