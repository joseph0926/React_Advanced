import React from "react";
import { Outlet, redirect } from "react-router-dom";

import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { getUserFromLocalStorage } from "../utils/localStorage";

const Root = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export async function loader() {
  // const user = await useSelector((state) => state.user);
  const token = await getUserFromLocalStorage();
  if (!token) {
    return redirect("/landing");
  }
  return null;
}

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;

export default Root;
