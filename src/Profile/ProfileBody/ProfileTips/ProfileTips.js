import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profileTips: {
    "& $tipSeparator": {
      "&:last-of-type": {
        borderBottom: "none",
      }
    }
  },
  tipSeparator: {
    borderBottom: "1px solid #CAE7FE",
  },
}));

const ProfileTips = React.memo(function ProfileTips(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="center" className={classes.profileTips}>
        {props.children.map((child, key) =>
          <Grid item xs={12} className={classes.tipSeparator} key={key}>
            {child}
          </Grid>
        )}
    </Grid>
  );
});

export default ProfileTips;

ProfileTips.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};
