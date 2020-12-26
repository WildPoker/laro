import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";
import useStyles from "./styles";
import "./styles.css";

function Nav() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.Appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Laro
          </Typography>
          <Box>
            <Button color="inherit" className={classes.Button}>
              Login
            </Button>{" "}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
