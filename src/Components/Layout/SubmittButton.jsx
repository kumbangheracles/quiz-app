import React from "react";

export default function SubmittButton({ submitHandler, selectedAnswer }) {
  return (
    <button
      onClick={submitHandler}
      type="submit"
      className="submit-button"
      //   disabled={!selectedAnswer}
    >
      Submit
    </button>
  );
}
