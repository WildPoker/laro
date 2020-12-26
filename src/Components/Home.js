import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import useStyles from "./styles";
import Game from "./Game";
import Leaderboards from "./Leaderboards";
function Home() {
  const classes = useStyles();
  return (
    <div style={{ height: "80%" }}>
      <Container maxWidth="sm">
        <Typography component="div" className={classes.Typography}>
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={8}>
              <Game />
            </Grid>
            <Grid item xs={4}>
              <Leaderboards />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </div>
  );
}

export default Home;
