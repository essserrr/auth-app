import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tip: {
    padding: "33px 77px 33px 77px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px 20px 10px",
    },
  },
  tipIcon: {
    marginRight: "42px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
    },
  },
  iconStyle: {
    color: theme.palette.buttonColor.main,
  },
  textStyle: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontXize: "18px",
    lineHeight: "25px",
    color: theme.palette.textSecondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "19px",
    },
  },
}));

const Tip = React.memo(function Tip(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.tip}>
      <Grid item xs="auto" className={classes.tipIcon}>
        {React.cloneElement(props.icon, {
          className: classes.iconStyle,
        })}
      </Grid>
      <Grid item xs="auto" className={classes.textStyle}>
        {props.children}
      </Grid>
    </Grid>
  );
});

export default Tip;

Tip.propTypes = {
    icon:  PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
};
