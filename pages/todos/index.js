import { useEffect, useState } from "react";
import { callApi } from "../utils/api";

export default function Todos() {
  const [list, setList] = useState([]);

  useEffect(() => {
    callApi("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setList(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      {list.slice(0, 10).map((item) => {
        return <ListItem item={item} />;
      })}
    </div>
  );
}

function ListItem({ item }) {
  return (
    <div key={item.id}>
      <p>{item.title}</p>
    </div>
  );
}
