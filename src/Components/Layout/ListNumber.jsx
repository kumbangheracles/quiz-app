import React, { useState } from "react";
import Quest from "../../Data/DataTest2";
export default function ({ soal, selectedAnswer }) {
  const [active, setActive] = useState(false);
  function handleActive() {
    setActive((prev) => !prev);
  }
  return (
    <div className="list-number">
      {soal.map((item) => (
        <button
          key={item.id}
          onClick={handleActive}
          className={` ${active ? "active" : "number-item"}`}
        >
          {item.id}
        </button>
      ))}
    </div>
  );
}
