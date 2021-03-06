import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  redactBlock: {
    cursor: "pointer",
  },
  redactText: {
    marginRight: "5px",
    fontFamily: theme.typography.mainFont,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    textTransform: "uppercase",
    color: theme.palette.textPrimary.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  redactIconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  redactIcon: {
    fontSize: 24,
    color: theme.palette.textPrimary.main,
  },
}));

const RedactBlock = React.memo(function RedactBlock(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" onClick={props.onClick} className={classes.redactBlock} >
      <Grid item xs={"auto"} className={classes.redactText}>
        {props.status ?
          "Закрыть"
          :
          "РЕДАКТИРОВАТЬ"}
      </Grid >
      <Grid item xs={"auto"} className={classes.redactIconWrapper}>
        {props.status ?
          <CloseIcon className={classes.redactIcon} />
          :
          <CreateIcon className={classes.redactIcon} />}
      </Grid >
    </Grid>
  );
});

export default RedactBlock;

RedactBlock.propTypes = {
  onClick: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};
