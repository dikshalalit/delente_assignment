import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi2";
import { FiMinus } from "react-icons/fi";

import style from "./style.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={style.counter_box}>
      <p className={style.counter_heading}>Simple Counter</p>

      <div className={style.counter_row}>
        <button onClick={handleDecrement} disabled={count <= 0}>
          <FiMinus color="black" size={18} />
        </button>
        <p className={style.counter_count}> {count}</p>
        <button onClick={handleIncrement}>
          <HiOutlinePlus color="black" size={18} />
        </button>
      </div>
    </div>
  );
}
