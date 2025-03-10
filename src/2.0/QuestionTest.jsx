import React, { useState } from "react";
import { useEffect } from "react";
import AnswerTest from "./AnswerTest";
import Footer from "../Components/Layout/Footer";
import "./test.css";
import Modal from "./Modal";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Layout/Navbar";
export default function QuestionTest({
  questData,
  handleNavigation,
  isLoading,
  modalState,
  toggleModal,
}) {
  const [soal, setSoal] = useState(
    questData.map((item) => ({
      ...item,
      selectedAnswer: null, // Jawaban yang dipilih
      isCorrect: null, // Status benar/salah
    }))
  );

  const handleSelectAnswer = (questionId, option) => {
    setSoal((prevSoal) => {
      const updatedSoal = prevSoal.map((item) =>
        item.id === questionId ? { ...item, selectedAnswer: option } : item
      );
      localStorage.setItem("soal", JSON.stringify(updatedSoal));

      return updatedSoal;
    });
  };

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
    setSoal((prevSoal) => {
      const resetSoal = prevSoal.map((item) => ({
        ...item,
        selectedAnswer: null,
        isCorrect: null,
      }));
      localStorage.removeItem("soal", JSON.stringify(resetSoal));
      return resetSoal;
    });
  };

  useEffect(() => {
    AOS.init({
      durationa: 100,
      easing: "ease-in-out",
      once: false,
      offset: 200,
    });

    const storedSoal = JSON.parse(localStorage.getItem("soal"));
    if (storedSoal) {
      setSoal(storedSoal);
    }
  }, []);

  return (
    <>
      {/* <Navbar
        isLoading={isLoading}
        toggleModal={toggleModal}
        modalState={modalState}
      /> */}
      {isLoading && (
        <div className="loading-container" data-aos="fade-down">
          <div className="loader">{/* <p>loading. . . </p> */}</div>
        </div>
      )}

      {!isLoading && (
        <>
          <div
            className={`overlay ${modalState.isOpen ? "overlay-active" : ""}`}
          >
            {" "}
          </div>

          <div className="question">
            <Modal
              modal={modalState.isOpen}
              toggleModal={() => toggleModal()}
              desc={modalState.message}
            />
            {soal.map((item) => (
              <div className="question-number" key={item.id} data-aos="fade-up">
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
      )}
    </>
  );
}
