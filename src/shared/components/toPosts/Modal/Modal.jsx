import { useEffect, memo } from "react";
import { createPortal } from "react-dom";

import s from "./modal.module.scss";

const rootModal = document.querySelector("#modal-root");

const Modal = ({ children, closeModal }) => {
  const closeModalByGrey = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeModalByGrey);
    return () => {
      document.removeEventListener("keydown", closeModalByGrey);
    };
  });

  return createPortal(
    <div className={s.overlay} onClick={closeModalByGrey}>
      <div className={s.modal}>
        {children}
        <button type="button" className={s.closeBtn} onClick={closeModal}>
          X
        </button>
      </div>
    </div>,
    rootModal
  );
};

export default memo(Modal);
