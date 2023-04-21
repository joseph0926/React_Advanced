import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Job from "./Job";
import Loading from "./Loading";
import { getAllJobs } from "../store/allJobs/allJobs-slice";

import styled from "styled-components";
import PageBtnContainer from "./PageBtnContainer.jsx";

const JobsContainer = () => {
  const dispatchFn = useDispatch();
  const { jobs, isLoading, page, totalJobs, numOfPages, search, searchStatus, searchType, sort } = useSelector((state) => state.allJobs);

  useEffect(() => {
    dispatchFn(getAllJobs());
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} Job{jobs.length > 1 && "s"} Found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default JobsContainer;
