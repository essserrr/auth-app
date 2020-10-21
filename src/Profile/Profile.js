import React from 'react';
import PropTypes from 'prop-types';

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

const Profile = React.memo(function Profile(props) {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
                <ProfileHead avatar={"/icons/avatar.svg"} status={props.redactState} onClick={props.onClick}>
                    Иванова Анна Михайловна
                </ProfileHead>
            </Grid >
            <Grid item xs={12} className={classes.profileBody}>
                <ProfileBody status={props.redactState} />
            </Grid >
        </Grid>
    );
});

export default Profile;

Profile.propTypes = {
    redactState: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
