import React, { useState } from "react";
import "./modal.css";
export default function Modal({ modal, toggleModal, desc }) {
  return (
    <>
      <div className={`modal-container ${modal ? "active" : ""}`}>
        <div className="modal-desc">{desc}</div>
        <button onClick={toggleModal} className="modal-btn">
          Close
        </button>
      </div>
    </>
  );
}
