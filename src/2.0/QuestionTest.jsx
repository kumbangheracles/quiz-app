import React, { useState } from "react";
import AnswerTest from "./AnswerTest";
import Footer from "../Components/Layout/Footer";
import "./test.css";
import Modal from "./Modal";
export default function QuestionTest({
  questData,
  handleNavigation,
  isLoading,
}) {
  const [soal, setSoal] = useState(
    questData.map((item) => ({
      ...item,
      selectedAnswer: null, // Jawaban yang dipilih
      isCorrect: null, // Status benar/salah
    }))
  );

  const handleSelectAnswer = (questionId, option) => {
    setSoal((prevSoal) =>
      prevSoal.map((item) =>
        item.id === questionId ? { ...item, selectedAnswer: option } : item
      )
    );
  };
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal((prev) => !prev);
  }
  const submitHandler = () => {
    // Cek apakah ada soal yang belum dijawab
    const unansweredQuestions = soal.some(
      (item) => item.selectedAnswer === null
    );

    if (unansweredQuestions) {
      setModal((prev) => !prev);
      return;
    }

    // Jika semua soal sudah dijawab, lakukan validasi jawaban
    setSoal((prevSoal) =>
      prevSoal.map((item) => ({
        ...item,
        isCorrect: item.selectedAnswer === item[`option${item.ans}`],
      }))
    );

    alert("Answer Submitted");
  };

  const resetSelection = () => {
    setSoal((prevSoal) =>
      prevSoal.map((item) => ({
        ...item,
        selectedAnswer: null,
        isCorrect: null,
      }))
    );
  };

  return (
    <>
      <div className={`overlay ${modal ? "overlay-active" : ""}`}> </div>
      <div className="question">
        <Modal modal={modal} toggleModal={toggleModal} />
        {soal.map((item) => (
          <div className="question-number" key={item.id}>
            <h4>
              {item.id}. {item.question}
            </h4>
            <div className="answer-list">
              <AnswerTest
                item={item}
                selectedAnswer={item.selectedAnswer}
                handleSelectAnswer={(option) =>
                  handleSelectAnswer(item.id, option)
                }
              />
            </div>
            {item.isCorrect !== null && (
              <>
                <p className="answered">
                  {item.isCorrect ? "Correct! ✅" : "Incorrect! ❌"}
                </p>
                {!item.isCorrect ? (
                  <p className="answered">
                    Correct Answer: {item[`option${item.ans}`]}
                  </p>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        ))}
        <Footer
          resetSelection={resetSelection}
          submitHandler={submitHandler}
          selectedAnswer={soal.selectedAnswer}
          handleNavigation={handleNavigation}
          soal={soal}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
