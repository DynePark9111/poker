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
  type: "PATCH_GEM";
  payload: { gem: number };
};
type CashAction = {
  type: "PATCH_CASH";
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
  handleGem: (gem: number, user: userType) => void;
  handleCash: (cash: number) => void;
};

export type DarkmodeContextType = {
  isDark: boolean;
  toggleDarkmode: () => void;
};

// AlertContext Types
export type status = "normal" | "success" | "warning" | "error";

export type alertType = {
  id: string;
  message: string;
  status: status;
};

export type AddAction = {
  type: "ADD_ALERT";
  payload: alertType;
};

export type DeleteAction = {
  type: "DELETE_ALERT";
  payload: { id: string };
};

export type AlertAction = AddAction | DeleteAction;

export type AlertContextType = {
  alerts: alertType[];
  addAlert: (message: string, status: status) => void;
  deleteAlert: (id: string) => void;
};

export type ModalContextType = {
  activeModal: string;
  setActiveModal: (modal: string) => void;
};
