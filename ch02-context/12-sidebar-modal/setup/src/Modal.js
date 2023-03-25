import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";

import { AppContext } from "./context";

const Modal = () => {
  const appCtx = useContext(AppContext);
  const { isModalOpen, closeModalHandler } = appCtx;

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={closeModalHandler}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
