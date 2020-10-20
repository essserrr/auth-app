import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProfileTips from "./ProfileTips/ProfileTips";
import ProfileForm from "./ProfileForm/ProfileForm";
import Tip from "./ProfileTips/Tip/Tip";
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const useStyles = makeStyles((theme) => ({
  profileBody: {
    background: theme.palette.textPrimary.main,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
  },
}));

export default React.memo(function ProfileBody(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="center" className={classes.profileBody}>
      {props.status ?
        <ProfileForm />
        :
        <ProfileTips>
          <Tip icon={<AlternateEmailIcon />}>
            Ivanova@mail.ru
            </Tip>
          <Tip icon={<PhoneIcon />}>
            Укажите номер телефона
            </Tip>
        </ProfileTips>}
    </Grid>
  );
})
