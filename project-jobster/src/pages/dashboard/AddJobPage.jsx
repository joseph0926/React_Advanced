import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import InputHelper from "../../components/InputHelper";

import styled from "styled-components";
import InputSelectorHelper from "../../components/InputSelectorHelper";
import { changeHandler, clearHandler, createJob, editJob } from "../../store/job/job-slice";

const AddJobPage = () => {
  const dispatchFn = useDispatch();
  const { isLoading, position, company, jobLocation, jobType, jobTypeOptions, status, statusOptions, isEditing, editJobId } = useSelector(
    (state) => state.job
  );
  const { user } = useSelector((state) => state.user);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatchFn(changeHandler({ name, value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("입력칸을 비울수 없습니다.");
      return;
    }

    if (isEditing) {
      dispatchFn(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;
    }

    dispatchFn(createJob({ position, company, jobLocation, jobType, status }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatchFn(changeHandler({ name: "jobLocation", value: user.location }));
    }
  }, []);

  return (
    <Wrapper>
      <form className="form" onSubmit={submitHandler}>
        <h3>{isEditing ? "edit job" : "add job"}</h3>

        <div className="form-center">
          {/* position */}
          <InputHelper type="text" name="position" value={position} handleChange={inputHandler} />
          {/* company */}
          <InputHelper type="text" name="company" value={company} handleChange={inputHandler} />
          {/* location */}
          <InputHelper type="text" labelText="job location" name="jobLocation" value={jobLocation} handleChange={inputHandler} />

          <InputSelectorHelper name="status" value={status} handleChange={inputHandler} list={statusOptions} />

          <InputSelectorHelper name="jobType" labelText="job type" value={jobType} handleChange={inputHandler} list={jobTypeOptions} />

          {/* btn container */}
          <div className="btn-container">
            <button type="button" className="btn btn-block clear-btn" onClick={() => dispatchFn(clearHandler())}>
              clear
            </button>
            <button type="submit" className="btn btn-block submit-btn" disabled={isLoading}>
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default AddJobPage;
