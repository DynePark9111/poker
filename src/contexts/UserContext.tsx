import axios from "axios";
import { useReducer, createContext, useEffect } from "react";
import { URL } from "../data/data";
import {
  AuthAction,
  childrenProps,
  UserContextType,
  userType,
} from "../types/contextTypes";

const defaultUser = {
  _id: "#GUESTID9111",
  username: "guest",
  email: "guest@email.com",
  gem: 1000,
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
    case "PATCH_GEM": {
      const gem = action.payload.gem;
      return { ...state, gem };
    }
    case "PATCH_CASH": {
      const cash = action.payload.cash;
      return { ...state, cash };
    }
  }
}

//Context
export const UserContext = createContext({} as UserContextType);

export default function UserContextProvider({ children }: childrenProps) {
  const [user, dispatch] = useReducer(userReducer, defaultUser, () => {
    console.log("useContext ------------");
    const localUser = localStorage.getItem("user");
    return localUser ? JSON.parse(localUser) : defaultUser;
  });

  useEffect(() => {
    console.log("useEffect ----");
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  //dispatch
  function login(
    _id: string,
    username: string,
    email: string,
    gem: number,
    cash: number
  ) {
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
  }

  async function logout() {
    try {
      await axios.get(`${URL}/auth/logout`, { withCredentials: true });
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log(err);
    }
  }

  async function checkUser() {
    try {
      const res = await axios.get(`${URL}/auth`, {
        withCredentials: true,
      });
      const { _id, username, email, gem, cash } = res.data;
      if (username !== "guest") {
        login(_id, username, email, gem, cash);
      }
    } catch (err) {
      console.log(err);
      logout();
    }
  }

  async function handleGem(gem: number, user: userType) {
    if (user.username === "guest") {
      console.log("guest");
      dispatch({ type: "PATCH_GEM", payload: { gem: user.gem + gem } });
    } else {
      console.log("user");
      try {
        const res = await axios.patch(
          `${URL}/user/gem`,
          { gem },
          { withCredentials: true }
        );
        dispatch({ type: "PATCH_GEM", payload: { gem: res.data.gem } });
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function handleCash(cash: number) {
    try {
      const res = await axios.patch(
        `${URL}/user/cash`,
        { cash },
        { withCredentials: true }
      );
      dispatch({ type: "PATCH_CASH", payload: { cash: res.data.gem } });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
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
