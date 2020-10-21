import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    roundedIcon: {
        overflow: "hidden", 
        borderRadius: "50%",
    },
  }));

const RoundedIcon = React.memo(function RoundedIcon(props) {
    const classes = useStyles();

    return ( 
        <Box component="div" className={`${classes.roundedIcon} ${props.className}`} >
            <Icon>
                <img className={props.className} src={props.src}></img>
            </Icon>
        </Box>
    );
});

export default RoundedIcon;

RoundedIcon.propTypes = {
    className: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};