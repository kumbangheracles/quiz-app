import React from "react";
import ResetButton from "./ResetButton";
import SubmitButton from "./SubmittButton";

export default function Footer({
  resetSelection,
  submitHandler,
  seletedAnswer,
}) {
  return (
    <div className="footer">
      {/* Reset Button */}
      <ResetButton
        resetSelection={resetSelection}
        aria-label="Reset Selection"
      />
      {/* Submit Button */}
      <SubmitButton
        submitHandler={submitHandler}
        seletedAnswer={seletedAnswer}
        aria-label="Submit Answer"
      />
    </div>
  );
}
