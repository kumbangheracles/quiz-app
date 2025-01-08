import React from "react";
import { Radio } from "antd"; // Impor komponen Radio dari Ant Design

export default function AnswerTest({
  item,
  selectedAnswer,
  handleSelectAnswer,
}) {
  return (
    <>
      <span>
        <Radio.Group
          className="option-list"
          onChange={(e) => handleSelectAnswer(e.target.value)} // Ambil nilai yang dipilih
          value={selectedAnswer} // Pastikan nilai yang dipilih sesuai dengan selectedAnswer
        >
          <Radio className=".input" value={item.option1}>
            {item.option1}
          </Radio>
          <Radio className=".input" value={item.option2}>
            {item.option2}
          </Radio>
          <Radio className=".input" value={item.option3}>
            {item.option3}
          </Radio>
          <Radio className=".input" value={item.option4}>
            {item.option4}
          </Radio>
        </Radio.Group>
      </span>
    </>
  );
}
