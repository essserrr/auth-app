import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  list: {
    "& $listItem": {
      display: "flex",
      alignItems: "center",
      minHeight: "  ",
      position: "relative",
      "&::after": {
        top: 0,
        right: 0,
        content: `""`,
        position: "absolute",

        height: "100%",
        borderRight: `1px solid ${theme.palette.textPrimary.main}`,
      },
      "&:last-of-type": {
        paddingRight: "0px",
        "&::after": {
          display: "none",
          borderRight: "none",
        },
      },
      "&:first-of-type": {
        paddingLeft: "0px",
      },
    },
  },

  listItem: {
    padding: "0px 19.5px 0px 19.5px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 9.5px 0px 9.5px",
    },
  },
}));

const SeparatedList = React.memo(function SeparatedList(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" className={classes.list}>
      {props.children.map((child, key) =>

        <Grid key={key} item xs={"auto"} className={classes.listItem}>
          {child}
        </Grid >

      )}
    </Grid>
  );
});

export default SeparatedList;

SeparatedList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};