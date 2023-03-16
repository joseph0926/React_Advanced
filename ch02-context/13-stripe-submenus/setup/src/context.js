import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppContextProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebarHandler = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebarHandler = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenuHandler = (text, loc) => {
    const page = sublinks.find((link) => {
      return link.page === text;
    });
    setPage(page);
    setLocation(loc);
    setIsSubmenuOpen(true);
  };
  const closeSubmenuHandler = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        location,
        page,
        openSidebarHandler,
        closeSidebarHandler,
        openSubmenuHandler,
        closeSubmenuHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
