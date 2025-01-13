import React, { useState } from "react";
import ResetButton from "./ResetButton";
import SubmitButton from "./SubmittButton";

export default function Footer({ resetSelection, submitHandler, soal }) {
  const [isSubmitted, setSubmitted] = useState(false);
  const totalAnswered = soal.filter(
    (item) => item.selectedAnswer !== null
  ).length;
  const totalQuestions = soal.length;
  const percentage = Math.round((totalAnswered / totalQuestions) * 100);
  function claculateScore(soal) {
    let score = 0;
    soal.forEach((item) => {
      if (item.isCorrect === true) {
        score += 10;
      } else {
        score += 0;
      }
    });
    return score;
  }
  function handleSubmit() {
    soal.some((item) => {
      if (item.isCorrect !== null) {
        setSubmitted(true);
      }
    });
  }
  const score = claculateScore(soal);
  // console.log(score);
  return (
    <div className="footer">
      <ResetButton
        resetSelection={resetSelection}
        aria-label="Reset Selection"
      />
      <SubmitButton submitHandler={submitHandler} aria-label="Submit Answer" />
      <div className="result-footer">
        <p>
          Assignment Answered: {totalAnswered}/{totalQuestions}
        </p>
        {/* <p>score : {score}</p> */}
        {soal.every((item) => item.isCorrect !== null) && (
          <p>Total Score: {score}</p>
        )}
      </div>
    </div>
  );
}
