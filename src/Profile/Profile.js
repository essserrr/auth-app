import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ProfileHead from "./ProfileHead/ProfileHead";
import ProfileBody from "./ProfileBody/ProfileBody";

const useStyles = makeStyles((theme) => ({
  profileBody: {
    marginTop: "24px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
}));

export default React.memo(function PageBody() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
            <ProfileHead avatar={"/icons/avatar.svg"} status={false}>
              Иванова Анна Михайловна
            </ProfileHead>
      </Grid >
      <Grid item xs={12} className={classes.profileBody}>
          <ProfileBody status={true}/>
      </Grid >
    </Grid>
  );
})
