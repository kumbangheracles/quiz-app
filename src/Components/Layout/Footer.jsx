import React from "react";
import ResetButton from "./ResetButton";
import SubmitButton from "./SubmittButton";

export default function Footer({ resetSelection, submitHandler, soal }) {
  // Hitung total soal yang sudah dijawab
  const totalAnswered = soal.filter(
    (item) => item.selectedAnswer !== null
  ).length;
  const totalQuestions = soal.length;
  const percentage = Math.round((totalAnswered / totalQuestions) * 100);

  return (
    <div className="footer">
      {/* Reset Button */}
      <ResetButton
        resetSelection={resetSelection}
        aria-label="Reset Selection"
      />
      {/* Submit Button */}
      <SubmitButton submitHandler={submitHandler} aria-label="Submit Answer" />
      {/* Tampilan persentase jawaban */}
      <p>
        Assignment Answered: {totalAnswered}/{totalQuestions}
      </p>
    </div>
  );
}
