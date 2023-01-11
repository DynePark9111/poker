import { createContext, useState } from "react";
import {
  childrenProps,
  ModalContextType,
  status,
} from "../types/context.types";

export const ModalContext = createContext({} as ModalContextType);

export default function ModalContextProvider({ children }: childrenProps) {
  const [activeModal, setActiveModal] = useState("");
  return (
    <ModalContext.Provider
      value={{
        activeModal,
        setActiveModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
