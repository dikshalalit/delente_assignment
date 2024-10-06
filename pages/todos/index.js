import { useEffect, useState } from "react";
import callApi from "../../utils/api";
import Loader from "../component/loader";
import style from "./style.module.css";

export default function Todos() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    callApi("https://jsonplaceholder.typicode.com/todos", "GET")
      .then((res) => {
        setList(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setError("Failed to load todos.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="app_container">
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        list.length &&
        list.slice(0, 10).map((item, index) => {
          return <ListItem key={item.id} item={item} serialNum={index + 1} />;
        })
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
