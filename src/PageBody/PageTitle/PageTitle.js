import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: theme.typography.mainFont,
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

const PageTitle = React.memo(function PageTitle(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.title}>
      <Grid item xs={12}>
        {props.children}
      </Grid >
    </Grid>
  );
});

export default PageTitle;

PageTitle.propTypes = {
  children: PropTypes.node.isRequired
};
