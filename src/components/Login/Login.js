import React, { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/Auth-context";

const emailReducer = (state, action) => {
  if (action.type === "INPUT_EMAIL") {
    return {
      emailValue: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "INPUT_EMAIL_BLUR") {
    return {
      emailValue: state.emailValue,
      isValid: state.emailValue.includes("@"),
    };
  }
  return state;
};

const initialState = {
  emailValue: "",
  isValid: undefined,
};

const passwordReducer = (state, action) => {
  if (action.type === "INPUT_PASSWORD") {
    return {
      passwordValue: action.val,
      isPasswordValue: action.val.trim().length > 6,
    };
  }
  if (action.type === "INPUT_PASSWORD_BLUR") {
    console.log("input-password-blur working");
    return {
      passwordValue: state.passwordValue,
      isPasswordValue: state.passwordValue.trim().length > 6,
    };
  }
  return state;
};

const initialPasswordState = {
  passwordValue: "",
  isPasswordValue: undefined,
};

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, initialState);
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialPasswordState
  );

  const { isDay } = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: emailIsValid } = emailState;
  const { isPasswordValue: isPwdValue } = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        !emailState.emailValue.includes("@") &&
          passwordState.passwordValue.trim().length > 6 // user жазган email де @ белгиси жок болсо  false  болот && password узундугу 6 дан чон болсо
      );
      setFormIsValid(passwordState.passwordValue);
    }, 1500); //

    return () => {
      //  clean up function
      console.log("clean up");
      clearTimeout(timer);
    };
  }, [emailIsValid, isPwdValue]); //

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_EMAIL", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "INPUT_PASSWORD", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.emailValue, passwordState.passwordValue);
  };

  return (
    <Card className={isDay ? classes.night : classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.emailValue === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email" className={classes.title}>
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            value={emailState.emailValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.passwordValue === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.passwordValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
