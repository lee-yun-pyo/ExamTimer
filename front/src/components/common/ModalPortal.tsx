import { Fragment, ReactNode } from "react";

import { createPortal } from "react-dom";

import { useModalContext } from "@/hooks/useModalContext";

interface Props {
  children: ReactNode;
}

export function ModalPortal({ children }: Props) {
  const { isShow, handleClose } = useModalContext();

  const element = document.getElementById("modal") as HTMLDivElement;

  return isShow
    ? createPortal(
        <Fragment>
          <div className="modal-overlay" onClick={handleClose}></div>
          {children}
        </Fragment>,
        element
      )
    : null;
}
