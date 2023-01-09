import { ReactNode } from "react";

export type userType = {
  _id: string | undefined;
  username: string | undefined;
  email: string | undefined;
};
export type AuthAction = LoginAction | LogoutAction;

type LoginAction = {
  type: "LOGIN";
  payload: userType;
};

type LogoutAction = {
  type: "LOGOUT";
};

export type childrenProps = {
  children: ReactNode;
};

export type UserContextType = {
  user: userType;
  login: (_id: string, username: string, email: string) => void;
  logout: () => void;
  checkUser: () => void;
};
