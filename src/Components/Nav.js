import React, { useState } from "react";
import Login from "./Login/Login";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import useStyles from "./styles";
import "./styles.css";
import { useAuth } from "../contexts/AuthContext";

function Nav() {
  const classes = useStyles();
  const { Logout, currentUser } = useAuth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const LogoutButton = () => {
    return (
      <Button onClick={Logout} color="inherit" className={classes.Button}>
        Logout
      </Button>
    );
  };
  return (
    <div>
      <AppBar position="static" className={classes.Appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Laro
          </Typography>

          <Box>
            {currentUser ? (
              <LogoutButton />
            ) : (
              <Button
                onClick={handleOpen}
                color="inherit"
                className={classes.Button}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Dialog open={open} keepMounted onClose={handleClose}>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            <Login />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Nav;
