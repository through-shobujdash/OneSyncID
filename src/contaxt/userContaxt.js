"use client"
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // const [user, setUser] = useState({ phoneNumber: "" });

  // const setPhoneNumber = (phone) => {
  //   setUser((prev) => ({ ...prev, phoneNumber: phone }));
  // };
  const [email,setEmail] = useState("");


  return (
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
