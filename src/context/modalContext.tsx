/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';

type ModalContextType = {
  isOpen: boolean;
  handleModalChange: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  handleModalChange: () => {},
});

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleModalChange = () => setIsOpen(!isOpen);

  return (
    <ModalContext.Provider value={{ isOpen, handleModalChange }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
