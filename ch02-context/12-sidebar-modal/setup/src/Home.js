import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

import { AppContext } from "./context";

const Home = () => {
  const appCtx = useContext(AppContext);
  const { openModalHandler, openSidebarHandler } = appCtx;

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebarHandler}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModalHandler}>
        show modal
      </button>
    </main>
  );
};

export default Home;
