import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navbar from "../src/Navbar/Navbar";
import PageBody from "../src/PageBody/PageBody";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0",
    backgroundColor: "wheat",
  },
  gridContainer: {
    minHeight: "100vh"
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.container}>
      <Grid container direction="column" justify="center" alignItems="stretch" className={classes.gridContainer}>
        <Grid item xs={"auto"}>
          <Navbar />
        </Grid >
        <Grid item xs>
          <PageBody />
        </Grid>
      </Grid>
    </Container>
  );
}
