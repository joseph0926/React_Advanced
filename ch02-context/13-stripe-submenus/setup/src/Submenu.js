import React, { useState, useRef, useEffect, useContext } from "react";
import AppContext from "./context";

const Submenu = () => {
  const appCtx = useContext(AppContext);
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = appCtx;

  const [columns, setColumns] = useState("col-2");

  const containerRef = useRef();

  useEffect(() => {
    setColumns("col-2");
    const submenu = containerRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={containerRef}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
