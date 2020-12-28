import React, { useState } from "react";
import useStyles from "./styles";
import { Button, Input, InputLabel, InputAdornment } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useAuth } from "../../contexts/AuthContext";

function Signup(props) {
  const classes = useStyles();
  const { Signup } = useAuth();
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignup((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = signup.email.toLowerCase();
    Signup(email, signup.password);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputLabel
          htmlFor="input-with-icon-adornment"
          className={classes.input}
        >
          Email
        </InputLabel>
        <div>
          <Input
            onChange={handleChange}
            name="email"
            autoFocus
            required
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <EmailOutlinedIcon />
              </InputAdornment>
            }
          />
        </div>
        <InputLabel
          htmlFor="input-with-icon-adornment"
          className={classes.input}
        >
          Password
        </InputLabel>
        <div>
          <Input
            onChange={handleChange}
            name="password"
            required
            type="password"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            }
          />
        </div>
        <InputLabel
          htmlFor="input-with-icon-adornment"
          className={classes.input}
        >
          Confirm Password
        </InputLabel>
        <div>
          <Input
            onChange={handleChange}
            name="confirmPassword"
            required
            type="password"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            }
          />
        </div>
        <Button variant="outlined" className={classes.button} type="submit">
          Signup
        </Button>
      </form>
      <p>
        Don't have an account?
        <a className={classes.click} onClick={props.handleClick} value="Login">
          Login
        </a>
      </p>
    </>
  );
}

export default Signup;
