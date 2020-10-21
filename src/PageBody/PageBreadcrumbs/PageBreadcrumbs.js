import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles((theme) => ({
    breadcrumbs: {
        "& a": {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "19px",
            textAlign: "left",
            color: theme.palette.textPrimary.main,
            [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
                lineHeight: "16px",
            },
        },
        "& .MuiBreadcrumbs-separator": {
            marginLeft: 0,
            marginRight: 0,
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "19px",
            textAlign: "left",
            color: theme.palette.textPrimary.main,
            [theme.breakpoints.down("sm")]: {
                fontSize: "12px",
                lineHeight: "16px",
            },
        }
    },
}));

const PageBreadcrumbs = React.memo(function PageBreadcrumbs(props) {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center" alignItems="center" >
            <Grid item xs={12} >
                <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs} >
                    {props.children}
                </Breadcrumbs>
            </Grid >
        </Grid>
    );
});

export default PageBreadcrumbs;

PageBreadcrumbs.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

