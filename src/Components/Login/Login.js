import React, { useState } from "react";
import useStyles from "./styles";
import { Button, Input, InputLabel, InputAdornment } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useAuth } from "../../contexts/AuthContext";
import Signup from "../Signup/Signup";

function Login() {
  const classes = useStyles();
  const { Login } = useAuth();
  const [changeForm, setChangeForm] = useState("");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogin((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(login.email, login.password);
  };

  const handleClick = (e) => {
    const text = e.target.innerText;

    if (text === "Signup") {
      setChangeForm("Signup");
    } else if (text === "Login") {
      setChangeForm("");
    }
  };
  return (
    <>
      {changeForm ? (
        <Signup handleClick={handleClick} />
      ) : (
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
            <Button variant="outlined" className={classes.button} type="submit">
              Login
            </Button>
          </form>
          <p>
            Don't have an account?{" "}
            <a className={classes.click} onClick={handleClick}>
              Signup
            </a>
          </p>
        </>
      )}
    </>
  );
}

export default Login;
