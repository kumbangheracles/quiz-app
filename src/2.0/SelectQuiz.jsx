import React, { useState } from "react";
import { useEffect } from "react";
import "./load.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate, // Menggunakan useNavigate untuk navigasi tanpa reload halaman
} from "react-router-dom";
import QuestionTest from "./QuestionTest";
import { DataRoute } from "../Data/DataRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Layout/Navbar";
export default function SelectQuiz() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi tanpa reload halaman
  const [modalState, setModalState] = useState({
    isOpen: false,
    message: "Loading . . .",
  });
  function toggleModal(message = "Loading . . .") {
    setModalState((prevState) => ({ isOpen: !prevState.isOpen, message }));
  }
  // Tentukan apakah topic-container akan ditampilkan
  const showTopicContainer = location.pathname === "/";

  // Fungsi untuk menangani navigasi dengan efek loading
  const handleNavigation = (to) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(to);
      setIsLoading(false);
    }, 1200);
  };

  // AOS
  useEffect(() => {
    AOS.init({
      durationa: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      {isLoading && (
        <div className="loading-container" data-aos="fade-down">
          <div className="loader"></div>
        </div>
      )}

      {!isLoading && showTopicContainer && (
        <div className="topic-container" data-aos="fade-up">
          <nav className="topic-list">
            <h3>Topic List</h3>
            <ul>
              {DataRoute.map((item) => (
                <li key={item.id}>
                  <a
                    className="link"
                    onClick={() => handleNavigation(item.path)} // Navigasi dengan efek loading
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <Routes>
        {DataRoute.map((item) => (
          <Route
            path={item.path}
            element={
              <QuestionTest
                questData={item.data}
                handleNavigation={handleNavigation}
                isLoading={isLoading}
                modalState={modalState}
                toggleModal={toggleModal}
              />
            }
            key={item.id}
          />
        ))}
      </Routes>
    </>
  );
}
