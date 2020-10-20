import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    textAlign: "left",
    color: theme.palette.textPrimary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "19px",
    },
  },
}));

export default React.memo(function PageTitle(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.title}>
      <Grid item xs={12}>
        {props.children}
      </Grid >
    </Grid>
  );
})
