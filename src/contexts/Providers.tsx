import { childrenProps } from "../types/context.types";
import AlertContextProvider from "./AlertContext";
import DarkmodeContextProvider from "./DarkmodeContext";
import ModalContextProvider from "./ModalContext";
import PokerContextProvider from "./PokerContext";
import UserContextProvider from "./UserContext";

export default function Providers({ children }: childrenProps) {
  return (
    <div>
      <PokerContextProvider>
        <UserContextProvider>
          <ModalContextProvider>
            <DarkmodeContextProvider>
              <AlertContextProvider>{children}</AlertContextProvider>
            </DarkmodeContextProvider>
          </ModalContextProvider>
        </UserContextProvider>
      </PokerContextProvider>
    </div>
  );
}
