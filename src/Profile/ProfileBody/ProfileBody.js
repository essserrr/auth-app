import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Collapse from '@material-ui/core/Collapse';

import ProfileTips from "./ProfileTips/ProfileTips";
import ProfileFormWrapper from "./ProfileForm/ProfileFormWrapper";
import Tip from "./ProfileTips/Tip/Tip";

const useStyles = makeStyles((theme) => ({
  profileBody: {
    background: theme.palette.textPrimary.main,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
  },
}));

const ProfileBody = React.memo(function ProfileBody(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="center" className={classes.profileBody}>
        <Grid item xs={12} >
          <Collapse in={props.status}>
              <ProfileFormWrapper />
          </Collapse>
          <Collapse in={!props.status}>
            <ProfileTips>
                <Tip icon={<AlternateEmailIcon />}>
                Ivanova@mail.ru
                </Tip>
                <Tip icon={<PhoneIcon />}>
                Укажите номер телефона
                </Tip>
            </ProfileTips>
          </Collapse>
      </Grid>
    </Grid>
  );
});

export default ProfileBody;

ProfileBody.propTypes = {
  status: PropTypes.bool.isRequired,
};
