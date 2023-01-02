import axios from "axios";
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // States
  const url = "http://localhost:5000/api";
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  return (
    <AppContext.Provider
      value={{
        url,
        loading,
        user,
        setLoading,
        setUser,
        currentUserId,
        setCurrentUserId,
        token,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
