import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const AuthProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Pull login state from localstorage
  }, []);

  const login = () => {
    setIsAuthenticated(true)
    // sleep(2000).then(() => setIsAuthenticated(true));
  };

  const logout = () => {
    setIsAuthenticated(false)
    // sleep(2000).then(() => setIsAuthenticated(false));
  };

  const authContextValue = { login, isAuthenticated, logout };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

export const useAuth = () => React.useContext(AuthContext);