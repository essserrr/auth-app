import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import User from "../../Navbar/User/User";
import RedactBlock from "./RedactBlock/RedactBlock";

const useStyles = makeStyles((theme) => ({
  profileHead: {
    padding: "24px 24px 24px 30px",
    background: theme.palette.backgroundGradient.main,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "16px 10px 15px 10px",
    },
  },
  userName: {
    marginLeft: "42px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "41px",
    color: theme.palette.textPrimary.main,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      fontSize: "14px",
      lineHeight: "19px",
    },
  },

  userAvatar: {
    width: "80px",
    height: "80px",
    [theme.breakpoints.down("md")]: {
      width: "40px",
      height: "40px",
    },
  },
}));

export default React.memo(function ProfileHead(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.profileHead}>
      <Grid item xs>
        <User textStyle={classes.userName} iconStyle={classes.userAvatar} justify="flex-start" alignItems="center"
          avatar={props.avatar}>
          {props.children}
        </User>
      </Grid >
      <Grid item xs={"auto"}>
        <RedactBlock status={props.status} />
      </Grid >
    </Grid>
  );
})
