import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from '../CustomButton/CustomButton';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  diologTitle: {
    padding: 0,
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "33px",
    color: theme.palette.diologText.main,
    textAlign: "center",
  },
  diologTitleMargin: {
    marginTop: "70px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "9px",
    },
  },
  confirmDialog: {
    marginTop: "42px",
    marginBottom: "53px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const AnswerBody = React.memo(function AnswerBody(props) {
    const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={12} className={classes.diologTitleMargin}>
            <DialogTitle className={classes.diologTitle}>
              Данные успешно сохранены
            </DialogTitle>
        </Grid>
        <Grid item xs={12} className={classes.confirmDialog}>
            <Grid container direction="row" alignItems="center" justify="center">
                <CustomButton height="50px" width="202px"
                onClick={props.closeDiolog}>
                  Хорошо
                </CustomButton>
            </Grid>
        </Grid>
    </Grid>
  );
});

export default AnswerBody;

AnswerBody.propTypes = {
  closeDiolog: PropTypes.func.isRequired,
};
