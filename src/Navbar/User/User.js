import React from 'react';
import { Grid } from '@material-ui/core';
import RoundedIcon from './RoundedIcon/RoundedIcon'

export default React.memo(function User(props) {
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
})