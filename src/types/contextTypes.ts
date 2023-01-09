import { ReactNode } from "react";

export type userType = {
  _id: string | undefined;
  username: string | undefined;
  email: string | undefined;
  gem: number;
  cash: number;
};

export type AuthAction = LoginAction | LogoutAction | GemAction | CashAction;

type LoginAction = {
  type: "LOGIN";
  payload: userType;
};

type LogoutAction = {
  type: "LOGOUT";
};

type GemAction = {
  type: "PUT_GEM";
  payload: { gem: number };
};
type CashAction = {
  type: "PUT_CASH";
  payload: { cash: number };
};

export type childrenProps = {
  children: ReactNode;
};

export type UserContextType = {
  user: userType;
  login: (
    _id: string,
    username: string,
    email: string,
    gem: number,
    cash: number
  ) => void;
  logout: () => void;
  checkUser: () => void;
  handleGem: (gem: number) => void;
  handleCash: (cash: number) => void;
};
