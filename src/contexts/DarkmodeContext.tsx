import { createContext, useEffect, useState } from "react";
import { childrenProps, darkmodevContextType } from "../types/contextTypes";

export const darkmodeContext = createContext({} as darkmodevContextType);

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
    <darkmodeContext.Provider value={{ isDark, toggleDarkmode }}>
      {children}
    </darkmodeContext.Provider>
  );
}
