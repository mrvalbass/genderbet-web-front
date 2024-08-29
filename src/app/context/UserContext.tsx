"use client";

import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
  user: { name: "", email: "", _id: "" },
  loading: true,
  updateUser: (token: string | null) => {},
});

export default UserContext;

interface UserContextProviderProps {
  children: React.ReactElement;
}
export function UserContextProvider({ children }: UserContextProviderProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState({ name: "", email: "", _id: "" });

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
        const data = await fetch(`http://localhost:3000/users/${token}`).then(
          (r) => r.json()
        );
        setUser(data.user);
      } else {
        setUser({ name: "", email: "", _id: "" });
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
