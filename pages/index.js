import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navbar from "../src/Navbar/Navbar";
import PageBody from "../src/PageBody/PageBody";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0",
    background: "url(/background.svg) no-repeat top right / 100% auto",
    '@media (max-width: 1481px)': {
      background: "url(/backgrounds/background.svg) no-repeat top right / auto auto",
    },
    [theme.breakpoints.down("sm")]: {
      background: "url(/backgrounds/background-sm.svg) no-repeat top right / 100% auto",
    },
  },
  gridContainer: {
    minHeight: "100vh"
  },
  pageBAckground: {
    backgroundImage: "/backgrounds/background.svg",
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
