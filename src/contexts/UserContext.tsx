import axios from "axios";
import { useReducer, createContext } from "react";
import {
  AuthAction,
  childrenProps,
  UserContextType,
  userType,
} from "../types/contextTypes";

const defaultUser = {
  _id: "#GUESTID123",
  username: "guest",
  email: "guest@email.com",
  gem: 10000,
  cash: 0,
};

function userReducer(state: userType, action: AuthAction) {
  switch (action.type) {
    case "LOGIN": {
      return {
        _id: action.payload._id,
        username: action.payload.username,
        email: action.payload.email,
        gem: action.payload.gem,
        cash: action.payload.cash,
      };
    }
    case "LOGOUT": {
      return defaultUser;
    }
    case "PUT_GEM": {
      const gem = action.payload.gem;
      return { ...state, gem };
    }
    case "PUT_CASH": {
      const cash = action.payload.cash;
      return { ...state, cash };
    }
  }
}

//Context
export const UserContext = createContext<UserContextType>({
  user: defaultUser,
  login: () => {},
  logout: () => {},
  checkUser: () => {},
  handleGem: () => {},
  handleCash: () => {},
});

function UserContextProvider({ children }: childrenProps) {
  const [state, dispatch] = useReducer(userReducer, defaultUser);
  const login = (
    _id: string,
    username: string,
    email: string,
    gem: number,
    cash: number
  ) => {
    dispatch({
      type: "LOGIN",
      payload: {
        _id,
        username,
        email,
        gem,
        cash,
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
      const { _id, username, email, gem, cash } = res.data;
      login(_id, username, email, gem, cash);
    } catch (err) {
      console.log(err);
      logout();
    }
  };

  const handleGem = async (gem: number) => {
    try {
      // const res = await axios.patch(
      //   `${URL}/user/gem`,
      //   { gem },
      //   { withCredentials: true }
      // );
      // const resGem = res.data.gem;
      // dispatch({ type: "PUT_GEM", payload: { gem: resGem } });
      dispatch({ type: "PUT_GEM", payload: { gem } });
    } catch (err) {
      dispatch({ type: "PUT_GEM", payload: { gem } });
      console.log(err);
    }
  };

  const handleCash = async (cash: number) => {
    try {
      // const res = await axios.patch(
      //   `${URL}/user/cash`,
      //   { cash },
      //   { withCredentials: true }
      // );
      // const resGem = res.data.gem;
      // dispatch({ type: "PUT_CASH", payload: { cash: resGem } });
      dispatch({ type: "PUT_CASH", payload: { cash } });
    } catch (err) {
      dispatch({ type: "PUT_CASH", payload: { cash } });
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state,
        login,
        logout,
        checkUser,
        handleGem,
        handleCash,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
