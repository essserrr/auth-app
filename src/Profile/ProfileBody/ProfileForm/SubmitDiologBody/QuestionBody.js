import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@material-ui/icons/Close';
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
    marginTop: "21px",
  },
  confirmDialog: {
    marginTop: "32px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
    },
  },
  declineDialog: {
    marginTop: "28px",
  },
  iconRow: {
    textAlign: "right",
  },
  closeIcon: {
    fontSize: 24,
    cursor: "pointer",
    color: theme.palette.closeButton.main
  },
}));

const QuestionBody = React.memo(function QuestionBody(props) {
    const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={12} className={classes.iconRow}>
            <CloseIcon className={classes.closeIcon} onClick={props.closeDiolog} />
        </Grid>
        <Grid item xs={12} className={classes.diologTitleMargin}>
            <DialogTitle className={classes.diologTitle}>
              Сохранить изменения?
            </DialogTitle>
        </Grid>
        <Grid item xs={12} className={classes.confirmDialog}>
            <Grid container direction="row" alignItems="center" justify="center">
                <CustomButton height="50px" width="202px"
                  onClick={props.onSubmit}>
                  Сохранить
                </CustomButton>
            </Grid>
        </Grid>
        <Grid item xs={12} className={classes.declineDialog}>
          <Grid container direction="row" alignItems="center" justify="center">
            <CustomButton height="50px" width="202px" hollow={true}
              onClick={props.closeDiolog}>
              Не сохранять
            </CustomButton >
          </Grid>
        </Grid>
    </Grid>
  );
});

export default QuestionBody;

QuestionBody.propTypes = {
  closeDiolog: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired, 
};
