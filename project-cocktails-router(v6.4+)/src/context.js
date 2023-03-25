import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [dyUrl, setDyUrl] = useState(url);

  // useEffect(() => {
  //   setDyUrl(url + searchTerm);
  // }, [searchTerm]);

  return <AppContext.Provider value={{ dyUrl, searchTerm, setSearchTerm }}>{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
