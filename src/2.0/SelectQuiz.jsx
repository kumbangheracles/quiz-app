import React, { useState } from "react";
import "./load.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate, // Menggunakan useNavigate untuk navigasi tanpa reload halaman
} from "react-router-dom";
import QuestionTest from "./QuestionTest";
import { DataRoute } from "../Data/DataRoute";

export default function SelectQuiz() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi tanpa reload halaman

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

  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <div className="loader">{/* <p>Loading...</p> */}</div>
        </div>
      )}

      {!isLoading && showTopicContainer && (
        <div className="topic-container">
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
            element={<QuestionTest questData={item.data} />}
            key={item.id}
          />
        ))}
      </Routes>
    </>
  );
}
