"use client";

import dayjs, { Dayjs } from "dayjs";
import { createContext, useEffect, useState } from "react";

export interface FirstNameInterface {
  boy: string[];
  girl: string[];
}

export interface PredictionsInterface {
  gender: "♂" | "♀" | null;
  firstName: FirstNameInterface;
  birthDay: Dayjs | null;
}

export interface UserInterface {
  name: string;
  email: string;
  token: string;
  _id: string;
  predictions: PredictionsInterface;
}

export interface UserContextValues {
  user: UserInterface;
  loading: boolean;
  updateUser: (token: string | null) => void;
}

interface UserContextProviderProps {
  children: React.ReactElement;
}
const defaultUser = {
  name: "",
  email: "",
  token: "",
  _id: "",
  predictions: {
    gender: null,
    firstName: {
      boy: ["", "", ""],
      girl: ["", "", ""],
    },
    birthDay: null,
  },
};

const UserContext = createContext<UserContextValues>({
  user: defaultUser,
  loading: true,
  updateUser: (_: string | null) => {},
});

export default UserContext;

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserInterface>(defaultUser);

  function updateUser(token: string | null) {
    token
      ? localStorage.setItem("token", token)
      : localStorage.removeItem("token");
    setLoading(true);
  }

  useEffect(() => {
    const getUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const data = await fetch(
          `https://genderbet-back.vercel.app/users/${token}`
        ).then((r) => r.json());
        setUser(data.user);
      } else {
        setUser(defaultUser);
      }
      setLoading(false);
    };
    if (loading) getUserData();
  }, [loading]);

  return (
    <UserContext.Provider value={{ user, updateUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
