import React, { useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { useStateContext } from "../contexts/ContextProvider";

import Axios from "axios";

const Login = (props) => {
  const { setIsLoggedIn } = useStateContext();
  const [enteredUserName, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredUserName] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:5000/login", {
      username: enteredUserName,
      password: enteredPassword,
    }).then((res) => {
      setIsLoggedIn(res.data.status);
      if (res.data.status) {
        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("id", res.data.id);
      }
    });
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="user_name">User Name</label>
          <input
            type="text"
            id="user_name"
            value={enteredUserName}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
