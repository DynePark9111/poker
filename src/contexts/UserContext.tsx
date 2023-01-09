import axios from "axios";
import { useReducer, createContext } from "react";
import {
  AuthAction,
  childrenProps,
  UserContextType,
  userType,
} from "../types/contextTypes";

const defaultUser = {
  _id: undefined,
  username: undefined,
  email: undefined,
};

function userReducer(state: userType, action: AuthAction) {
  switch (action.type) {
    case "LOGIN": {
      return {
        _id: action.payload._id,
        username: action.payload.username,
        email: action.payload.email,
      };
    }
    case "LOGOUT": {
      return defaultUser;
    }
  }
}

//Context
export const UserContext = createContext<UserContextType>({
  user: defaultUser,
  login: () => {},
  logout: () => {},
  checkUser: () => {},
});

function UserContextProvider({ children }: childrenProps) {
  const [state, dispatch] = useReducer(userReducer, defaultUser);
  const login = (_id: string, username: string, email: string) => {
    dispatch({
      type: "LOGIN",
      payload: {
        _id,
        username,
        email,
      },
    });
  };

  const logout = async () => {
    try {
      await axios.get(`${URL}/auth/logout`, { withCredentials: true });
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log(err);
    }
  };

  const checkUser = async () => {
    try {
      const res = await axios.get(`${URL}/auth/check`, {
        withCredentials: true,
      });
      const { _id, username, email } = res.data;
      login(_id, username, email);
    } catch (err) {
      console.log(err);
      logout();
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state,
        login,
        logout,
        checkUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
