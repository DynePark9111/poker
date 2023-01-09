import { useReducer, createContext, ReactNode, FC, useId } from "react";
import {
  AlertAction,
  alertType,
  childrenProps,
  ContextType,
  status,
} from "../types/contextTypes";

const defaultValue: alertType[] = [];

function alertReducer(state: alertType[], action: AlertAction) {
  const id = Math.random().toString();
  switch (action.type) {
    case "ADD_ALERT": {
      return [
        ...state,
        {
          id,
          message: action.payload.message,
          status: action.payload.status,
        },
      ];
    }
    case "DELETE_ALERT": {
      return state.filter((message) => message.id !== action.payload.id);
    }
  }
}

export const AlertContext = createContext<ContextType>({
  alerts: defaultValue,
  addAlert: () => {},
  deleteAlert: () => {},
});

export default function AlertContextProvider({ children }: childrenProps) {
  const [state, dispatch] = useReducer(alertReducer, defaultValue);
  const id = Math.random().toString();

  function addAlert(message: string, status: status) {
    dispatch({
      type: "ADD_ALERT",
      payload: { id, message, status },
    });
  }

  function deleteAlert(id: string) {
    dispatch({
      type: "DELETE_ALERT",
      payload: { id },
    });
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        addAlert,
        deleteAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
