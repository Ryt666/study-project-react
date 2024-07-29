import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import "./Modal.css";

export default function Modal({ children, open }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
        dialog.current.showModal();
      } else {
        dialog.current.close();
      }
  },[open]) //1-функция, которая будет выполняться, когда выполниться сам эффект; 2- массив зависимостей

 

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal")
  );
}
