import React, { useState } from "react";
import ResetButton from "./ResetButton";
import SubmitButton from "./SubmittButton";
import BackButton from "../../assets/icon/backButton.svg";
import ListNumber from "./ListNumber";
import "../../2.0/load.css";
export default function Footer({
  resetSelection,
  submitHandler,
  soal,
  handleNavigation,
  isLoading,
}) {
  const totalAnswered = soal.filter(
    (item) => item.selectedAnswer !== null
  ).length;
  const totalQuestions = soal.length;
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

  const score = claculateScore(soal);
  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <div className="loader">{/* <p>loading. . . </p> */}</div>
        </div>
      )}

      {!isLoading && (
        <div className="footer">
          {/* <ListNumber soal={soal} selectedAnswer={selectedAnswer} /> */}
          <button onClick={() => handleNavigation("/")} className="back-button">
            <img src={BackButton} alt="" /> Back
          </button>
          <ResetButton
            resetSelection={resetSelection}
            aria-label="Reset Selection"
          />
          <SubmitButton
            submitHandler={submitHandler}
            aria-label="Submit Answer"
          />
          <div className="result-footer">
            <p>
              Assignment Answered: {totalAnswered}/{totalQuestions}
            </p>
            {soal.every((item) => item.isCorrect !== null) && (
              <p>Total Score: {score}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
