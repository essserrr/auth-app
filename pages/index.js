import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navbar from "../src/Navbar/Navbar"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0",
  },
  gridContainer: {
    minHeight: "100vh"
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="auto" className={classes.container}>
      <Grid container direction="column" justify="center" alignItems="start" className={classes.gridContainer}>
        <Grid item xs={"auto"}>
          <Navbar />
        </Grid >
        <Grid item xs>
          xxx
        </Grid>
      </Grid>
    </Container>
  );
}
