import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import PageTitle from './PageTitle/PageTitle';
import PageBreadcrumbs from './PageBreadcrumbs/PageBreadcrumbs';
import Profile from '../Profile/Profile';

const useStyles = makeStyles((theme) => ({
  pageBody: {
    padding: "0px 20px 0px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px 0px 10px",
    },
  },
  pageBodyContentWrapper: {
    maxWidth: "1365px",
  },
  breadCrumbs: {
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "9px",
    },
  },
  contentBody: {
    marginTop: "32px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
}));

export default React.memo(function PageBody() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.pageBody}>
      <Grid item xs={12} className={classes.pageBodyContentWrapper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} >
            <PageTitle>
              ЛИЧНЫЙ ПРОФИЛЬ
        </PageTitle>
          </Grid >
          <Grid item xs={12} className={classes.breadCrumbs}>
            <PageBreadcrumbs>
              <Link href="/" >Главная</Link>
              <Link href="/profile" >Личный профиль</Link>
            </PageBreadcrumbs>
          </Grid >
          <Grid item xs={12} className={classes.contentBody}>
            <Profile />
          </Grid >
        </Grid>
      </Grid>
    </Grid>
  );
})
