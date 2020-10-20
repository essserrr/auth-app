import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  customTextField: {
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
  },
  label: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    textTransform: "none",
    color: theme.palette.textPrimary.main,
  },
}));

export default React.memo(function CustomButton(props) {
  const classes = useStyles();

  return (
    <Button variant="contained" classes={{ root: classes.customTextField, label: classes.label, }}
      style={{ height: props.height, width: props.width }}
    >
      {props.children}
    </Button >
  );
})
