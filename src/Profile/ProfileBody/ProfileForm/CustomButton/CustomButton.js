import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  customButton: {
    backgroundColor: theme.palette.backgroundColor.main,
    borderRadius: "36px",
    boxShadow: "none",
    "& .Mui-focused": {
      backgroundColor: theme.palette.backgroundColor.main,
      boxShadow: "none",
    },
    "&:hover": {
      backgroundColor: theme.palette.backgroundColor.main,
      boxShadow: "none",
    },
    "&.hollow": {
      backgroundColor: theme.palette.textPrimary.main,
      border: `1px solid ${theme.palette.buttonColor.main}`,
      "& .Mui-focused": {
        backgroundColor: theme.palette.textPrimary.main,
        boxShadow: "none",
      },
      "&:hover": {
        backgroundColor: theme.palette.textPrimary.main,
        boxShadow: "none",
      },

      "& $label": {
        color: theme.palette.buttonColor.main,
      },
    }
  },
  label: {
    fontFamily: theme.typography.mainFont,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    textTransform: "none",
    color: theme.palette.textPrimary.main,
  },
}));

const CustomButton = React.memo(function CustomButton(props) {
  const classes = useStyles();

  return (
    <Button variant="contained" className={`${classes.button} ${props.hollow ? "hollow" : ""}`} classes={{ root: classes.customButton, label: classes.label, }}
      style={{ height: props.height, width: props.width }}
      onClick={props.onClick}
    >
      {props.children}
    </Button >
  );
});

export default CustomButton;

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};
