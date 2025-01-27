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
  const [modalState, setModalState] = useState({
    isOpen: false,
    message: "Loading . . .",
  });
  const handleSelectAnswer = (questionId, option) => {
    setSoal((prevSoal) =>
      prevSoal.map((item) =>
        item.id === questionId ? { ...item, selectedAnswer: option } : item
      )
    );
  };

  function toggleModal(message = "Loading . . .") {
    setModalState((prevState) => ({ isOpen: !prevState.isOpen, message }));
  }

  const submitHandler = () => {
    // Cek apakah ada soal yang belum dijawab
    const unansweredQuestions = soal.some(
      (item) => item.selectedAnswer === null
    );

    if (unansweredQuestions) {
      toggleModal("Make sure all questions are answered!");
      return;
    }

    // Jika semua soal sudah dijawab, lakukan validasi jawaban
    setSoal((prevSoal) =>
      prevSoal.map((item) => ({
        ...item,
        isCorrect: item.selectedAnswer === item[`option${item.ans}`],
      }))
    );
    toggleModal("All questions answered!");
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
      <div className={`overlay ${modalState.isOpen ? "overlay-active" : ""}`}>
        {" "}
      </div>
      <div className="question">
        <Modal
          modal={modalState.isOpen}
          toggleModal={() => toggleModal()}
          desc={modalState.message}
        />
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
