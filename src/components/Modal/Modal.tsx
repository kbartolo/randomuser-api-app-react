import React, { FC } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./types";
import "./styles.scss";

const Modal: FC<ModalProps> = ({ onClose, title, children, show }) => {
  const element = document.getElementById("root");
  const rootElement: HTMLElement = element!;

  return ReactDOM.createPortal(
    <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    rootElement
  );
};

export default Modal;
