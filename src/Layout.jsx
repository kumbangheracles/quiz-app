import React, { useState } from "react";
import Question from "./Components/Layout/Question";
import Answer from "./Components/Layout/Answer";
import Footer from "./Components/Layout/Footer";
import { use } from "react";
import QuestionTest from "./2.0/QuestionTest";
export default function Layout() {
  const [isCorrect, setIsCorrect] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const handleSelectAnswer = (option) => {
    setSelectedAnswer(option);
  };
  const resetSelection = () => {
    setSelectedAnswer(null); // Reset jawaban yang dipilih
    setIsCorrect(null); // Reset status benar/salah
    setIsSubmitted(null);
  };

  const submitHandler = () => {
    if (selectedAnswer !== null) {
      if (isCorrect) {
        alert("Jawaban benar! ✅");
      } else {
        alert("Jawaban salah! ❌");
      }
      setIsSubmitted(true);
    } else {
      alert("Masukkan jawaban terlebih dahulu!!!");
    }
  };
  return (
    <div className="layout-container">
      <Question
        isCorrect={isCorrect}
        isSubmitted={isSubmitted}
        selectedAnswer={selectedAnswer}
        handleSelectAnswer={handleSelectAnswer}
      />
      <Answer
        selectedAnswer={selectedAnswer}
        handleSelectAnswer={handleSelectAnswer}
      />
      <Footer resetSelection={resetSelection} submitHandler={submitHandler} />
    </div>
  );
}
