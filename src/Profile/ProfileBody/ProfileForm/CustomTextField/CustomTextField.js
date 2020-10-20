import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  customTextField: {
    width: "254px",
    margin: "0",
    "& label.MuiInputLabel-shrink": {
      transform: "translate(10px, -8px) scale(0.75)",
    },
    "& fieldset": {
      paddingLeft: "4px",
    },
    "&.validated": {
      "& $input": {
        borderColor: theme.palette.validated.main,
      },
      "& $notchedOutline": {
        borderColor: `${theme.palette.validated.main} !important`,
      },
      "& $label": {
        color: theme.palette.validated.main,
      },
    }

  },
  input: {
    borderRadius: "5px",
    borderWidth: "1px",
    borderColor: theme.palette.textTretiary.main,
    "&.Mui-error $notchedOutline": {
      borderColor: `${theme.palette.error.main} !important`,
    },
    "& input": {
      padding: "21px 10px 17px 10px",
      ontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "19px",
      color: theme.palette.textSecondary.main,
      "&.Mui-disabled": {
        color: theme.palette.textTretiary.main,
      },
    },
  },
  notchedOutline: {
    borderRadius: "5px",
    borderWidth: "1px !important",
    borderColor: `${theme.palette.textTretiary.main} !important`,
  },
  label: {
    top: "2px",
    ontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "19px",
    color: theme.palette.textTretiary.main,
    "&.Mui-focused": {
      color: theme.palette.textTretiary.main,
    },
    "&.Mui-error": {
      color: theme.palette.error.main,
    },
  },
  helper: {
    visibility: "hidden",
    margin: "3px 10px 0px 10px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    color: theme.palette.textTretiary.main,
    "&.Mui-error": {
      visibility: "visible",
    }
  },
}));

export default React.memo(function CustomTextField(props) {
  const classes = useStyles();

  return (
    <TextField
      {...props}

      error={props.error}
      className={`${classes.customTextField} ${props.validated ? "validated" : ""}`}
      InputProps={{
        className: classes.input,
        classes: {
          notchedOutline: classes.notchedOutline
        },
      }}
      FormHelperTextProps={{ className: classes.helper }}
      InputLabelProps={{ className: classes.label }}
    />

  );
})
