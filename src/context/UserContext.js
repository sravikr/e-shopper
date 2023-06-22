import { createContext } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  let value = {
    total: 0,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
