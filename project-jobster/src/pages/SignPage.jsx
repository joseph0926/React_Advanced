import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../components/Logo";
import InputHelper from "../components/InputHelper";
import { login, signup } from "../store/user/user-slice";

import styled from "styled-components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMode: true,
};

const SignPage = () => {
  const [values, setValues] = useState(initialState);

  const dispatchFn = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [key]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const { email, password, name, isMode } = values;
    if (!email || !password || (!isMode && !name)) {
      toast.error("입력값이 유효하지 않습니다. 다시 입력해주세요.");
      return;
    }
    if (isMode) {
      dispatchFn(login({ email, password }));
      return;
    }
    dispatchFn(signup({ name, email, password }));
  };

  const toggleMode = () => {
    setValues({ ...values, isMode: !values.isMode });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={submitHandler}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {/* name field */}
        {!values.isMode && <InputHelper type="text" name="name" value={values.name} handleChange={changeHandler} />}
        <InputHelper type="email" name="email" value={values.email} handleChange={changeHandler} />
        <InputHelper type="password" name="password" value={values.password} handleChange={changeHandler} />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "loading,,," : "submit"}
        </button>

        <p>
          {values.isMode ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMode} className="member-btn">
            {values.isMode ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default SignPage;
