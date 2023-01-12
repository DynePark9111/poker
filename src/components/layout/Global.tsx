import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { DarkmodeContext } from "../../contexts/DarkmodeContext";
import { UserContext } from "../../contexts/UserContext";
import Alert from "../Alert";
import Background from "../Background";

export default function Global() {
  const { checkUser } = useContext(UserContext);
  const { pathname } = useLocation();
  const { isDark } = useContext(DarkmodeContext);
  let bgRed = isDark ? "#7c0c26" : "#9c1030";
  let bgGreen = isDark ? "#003900" : "#008000";
  let bgBlue = isDark ? "#00245c" : "#024bc1";

  function bg() {
    switch (pathname) {
      case "/404":
        return bgRed;
      case "/poker":
        return bgGreen;
      default:
        return bgBlue;
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Alert />
      <Background color={bg()} />
      <Outlet />
    </>
  );
}
