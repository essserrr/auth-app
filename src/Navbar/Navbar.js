import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px 49px 20px 49px",
    [theme.breakpoints.down("md")]: {
      padding: "17px 10px 17px 10px"
    },
  },
}));


export default function Navbar() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.container}>
      <Grid item xs={"auto"}>
        Notification
      </Grid >
      <Grid item xs={"auto"}>
        Name
      </Grid >
    </Grid>
  );
}
