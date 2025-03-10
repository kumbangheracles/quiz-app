import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Modal from "../../2.0/Modal";
import { useNavigation } from "react-router";
export default function Navbar({ isLoading, toggleModal, modalState }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleBeforeLoad = () => {
      setLoading(true);
    };
    window.addEventListener("beforeunload", handleBeforeLoad);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeLoad);
    };
  }, []);
  //   const navigation = useNavigation();
  //   const loading = navigation.state === "loading";
  return (
    <>
      <nav
        style={{
          backgroundColor: "white",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "100",
          borderBottom: "2px solid black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            padding: "1rem",
            display: "flex",
            gap: "10px",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "azure",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
              window.location.href = "/QuestionTest/history";
            }}
            to="/QuestionTest/history"
          >
            History
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "azure",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
              window.location.href = "/QuestionTest/science";
            }}
            to="/QuestionTest/science"
          >
            Science
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "azure",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
              window.location.href = "/QuestionTest/math";
            }}
            to="/QuestionTest/math"
          >
            Mathematics
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "azure",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
              window.location.href = "/QuestionTest/programming";
            }}
            to="/QuestionTest/programming"
          >
            Programming
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "azure",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
              window.location.href = "/QuestionTest/biology";
            }}
            to="/QuestionTest/biology"
          >
            Biology
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "azure",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
              window.location.href = "/QuestionTest/astronomy";
            }}
            to="/QuestionTest/astronomy"
          >
            Astronomy
          </Link>
        </ul>
      </nav>
      {loading && (
        <div
          style={{ zIndex: "100" }}
          className="loading-container"
          data-aos="fade-down"
        >
          <div className="loader">{/* <p>loading. . . </p> */}</div>
        </div>
      )}
    </>
  );
}
