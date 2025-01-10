import React from "react";
import { UserProvider } from "./UserContext";
import { ThemeProvider } from "./ThemeContext";

// Gộp tất cả các Context con
export const AppProvider = ({ children }) => {
  return (
    <UserProvider>
        <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  );
};
