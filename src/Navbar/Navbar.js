import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SeparatedList from "./SeparatedList/SeparatedList"
import User from './User/User'

const useStyles = makeStyles((theme) => ({
  navContainer: {
    padding: "20px 49px 17px 49px",
    [theme.breakpoints.down("sm")]: {
      padding: "17px 10px 18px 10px",
    },
  },
  notificationIcon: {
    fontSize: 40,
    color: theme.palette.textPrimary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },

  userName: {
    marginLeft: "20px",
    fontFamily: theme.typography.mainFont,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    color: theme.palette.textPrimary.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  userAvatar: {
    lineHeight: 0,
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      width: "24px",
      height: "24px",
    },
  },
}));

export default React.memo(function Navbar() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.navContainer}>
      <Grid item xs={"auto"}>
        <SeparatedList>
          <NotificationsNoneIcon className={classes.notificationIcon} />
          <User textStyle={classes.userName} iconStyle={classes.userAvatar} justify="center" alignItems="center"
            avatar={"/icons/avatar.svg"}>
            Иванова А.
            </User>
        </SeparatedList>
      </Grid >
    </Grid>
  );
})
