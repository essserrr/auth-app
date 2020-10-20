import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  withLabelGrid: {
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  iconWrapper: {
    marginRight: "42px",
    paddingBottom: "9.5px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  iconStyle: {
    color: theme.palette.buttonColor.main,
    fontSize: 36,
  },
}));

export default React.memo(function WithIcon(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="center" className={classes.withLabelGrid}>
      <Grid item xs={"auto"} className={classes.iconWrapper}>
        {React.cloneElement(props.icon, {
          className: classes.iconStyle,
        })}
      </Grid>
      <Grid item xs={"auto"}>
        {props.children}
      </Grid>
    </Grid>
  );
})
