import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showStats } from "../../store/allJobs/allJobs-slice";
import Loading from "../../components/Loading";
import StatsContainer from "../../components/StatsContainer";
import ChartsContainer from "../../components/ChartsContainer";

const StatsPage = () => {
  const dispatchFn = useDispatch();
  const { isLoading, monthlyApplications } = useSelector((state) => state.allJobs);
  useEffect(() => {
    dispatchFn(showStats());
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default StatsPage;
