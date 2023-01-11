import { createContext, useEffect, useState } from "react";
import { childrenProps, DarkmodeContextType } from "../types/context.types";

export const DarkmodeContext = createContext({} as DarkmodeContextType);

export default function DarkmodeContextProvider({ children }: childrenProps) {
  const [isDark, setIsDark] = useState(getLocal());

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  function detectMode() {
    let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return matched ? true : false;
  }

  function getLocal() {
    const local = localStorage.getItem("isDark");
    return local ? JSON.parse(local) : detectMode();
  }

  function toggleDarkmode() {
    setIsDark((pre: boolean) => !pre);
  }

  return (
    <DarkmodeContext.Provider value={{ isDark, toggleDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}
