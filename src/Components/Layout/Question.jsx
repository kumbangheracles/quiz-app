import React from "react";
import Result from "./Result";
import Answer from "./Answer";
import { dataNumber } from "../../Data/DataAnswer";
export default function Question({
  isCorrect,
  isSubmitted,
  selectedAnswer,
  handleSelectedAnswer,
}) {
  return (
    <div className="question">
      {dataNumber.map((number) => (
        <div className="question-number" key={number.id}>
          <h3>1.{number.id} </h3>
          <p>What is the founder of abbasid caliphate?</p>
          <div className="question-result">
            <Result isCorrect={isSubmitted ? isCorrect : null} />
          </div>
        </div>
      ))}
    </div>
  );
}
