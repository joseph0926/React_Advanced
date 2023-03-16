import React, { useState, useContext } from "react";

export const AppContext = React.createContext({
  // isSidebarOpen: false,
  // isModalOpen: false,
  // openSidebarHandler: () => {},
  // closeSidebarHandler: () => {},
  // openModalHandler: () => {},
  // closeModalHandler: () => {},
});

export const AppContextProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebarHandler = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebarHandler = () => {
    setIsSidebarOpen(false);
  };
  const openModalHandler = () => {
    setIsModalOpen(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModalHandler,
        closeModalHandler,
        openSidebarHandler,
        closeSidebarHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

// export const useGlobalContext = () => {
//   return useContext(AppContext)
// }
