import React, { useState } from "react";
import "./modal.css";
export default function Modal({ modal, toggleModal }) {
  return (
    <>
      <div className={`modal-container ${modal ? "active" : ""}`}>
        <div className="modal-desc">
          make sure all question get answered !!!
        </div>
        <button onClick={toggleModal} className="modal-btn">
          Close
        </button>
      </div>
    </>
  );
}
