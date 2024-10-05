import { useEffect, useState } from "react";
import { callApi } from "../utils/api";
import Loader from "../component/loader";

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
    <div>
      {list.length ? (
        list.slice(0, 10).map((item) => {
          return <ListItem key={item.id} item={item} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
}

function ListItem({ item }) {
  return (
    <div>
      <p>{item.title}</p>
    </div>
  );
}
