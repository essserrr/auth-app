import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import RoundedIcon from './RoundedIcon/RoundedIcon'

const User = React.memo(function User(props) {
    return ( 
    <Grid container direction="row" justify={props.justify} alignItems={props.alignItems}  >
        <Grid item xs={"auto"}>
            <RoundedIcon className={props.iconStyle} src={props.avatar} />
        </Grid> 
        <Grid item xs={"auto"} className={props.textStyle}>
            {props.children}
        </Grid>
    </Grid>
    );
});

export default User;

User.propTypes = {
    justify:PropTypes.string,
    alignItems:PropTypes.string,
    iconStyle: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};