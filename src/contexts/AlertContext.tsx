import { useReducer, createContext, ReactNode, FC } from "react";

type childrenProps = {
  children: ReactNode;
};

type status = "normal" | "success" | "warning" | "error";
type alertType = {
  id: string;
  message: string;
  status: status;
};

type AddAction = {
  type: "ADD_ALERT";
  payload: alertType;
};
type DeleteAction = {
  type: "DELETE_ALERT";
  payload: { id: string };
};
type AlertAction = AddAction | DeleteAction;

const defaultValue: alertType[] = [];

function alertReducer(state: alertType[], action: AlertAction) {
  const randomID = Math.random().toString();
  switch (action.type) {
    case "ADD_ALERT": {
      return [
        ...state,
        {
          id: randomID,
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

//Context
type ContextType = {
  alerts: alertType[];
  addAlert: (message: string, status: status) => void;
  deleteAlert: (id: string) => void;
};

export const AlertContext = createContext<ContextType>({
  alerts: defaultValue,
  addAlert: () => {},
  deleteAlert: () => {},
});

const AlertContextProvider: FC<childrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, defaultValue);
  const randomID = Math.random().toString();

  const addAlert = (message: string, status: status): void => {
    dispatch({
      type: "ADD_ALERT",
      payload: { id: randomID, message: message, status: status },
    });
  };

  const deleteAlert = (id: string): void => {
    dispatch({
      type: "DELETE_ALERT",
      payload: { id: id },
    });
  };

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
};

export default AlertContextProvider;
