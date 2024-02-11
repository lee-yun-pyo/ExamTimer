import { ReactNode, createContext, useState } from "react";

interface ModalContextType {
  isShow: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  isShow: false,
  handleOpen: () => {},
  handleClose: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isShow, setIsShow] = useState(false);

  const handleOpen = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <ModalContext.Provider value={{ isShow, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
}
