import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomTextField from './CustomTextField/CustomTextField';
import WithIcon from "./WithIcon/WithIcon"
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CustomButton from './CustomButton/CustomButton';


const useStyles = makeStyles((theme) => ({
  formGrid: {
    padding: "40px 70px 44px 30px",

    "& $inputRow:first-of-type": {
      paddingLeft: "0px",
    },
    "& $inputRow:nth-child(3)": {
      paddingRight: "0px",
      borderRight: `none`,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "17px 23px 23px 17px",
      "& $inputRow:first-of-type": {
        marginTop: 0,
      }
    },
  },
  inputRow: {
    padding: "22px 76px 0px 29px",
    borderRight: `1px solid ${theme.palette.separator.main}`,
    [theme.breakpoints.down("lg")]: {
      borderRight: `none`,
      padding: "9px 0px 0px 0px",
      marginTop: "10px",
    },
  },
  submitRow: {
    marginTop: "26px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "6px",
    },
  },
}));

export default React.memo(function ProfileTips(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="center" className={classes.profileTips}>
      <Grid item xs={12} className={classes.tipSeparator} >
        <form noValidate autoComplete="off">

          <Grid container direction="row" alignItems="center" justify="space-around" className={classes.formGrid}>
            <Grid item md={12} lg={"auto"} className={classes.inputRow}>
              <WithIcon icon={<AlternateEmailIcon />}>
                <CustomTextField
                  label="Фамилия и имя"
                  helperText="Вы неверно указали имя"
                  variant="outlined"
                />
              </WithIcon>
            </Grid>
            <Grid item md={12} lg={"auto"} className={classes.inputRow}>
              <WithIcon icon={<PhoneIcon />}>
                <CustomTextField
                  defaultValue="Ivanova@mail.ru"
                  label="E-mail"
                  helperText="Вы неверно указали E-mail"
                  variant="outlined"
                  disabled
                />
              </WithIcon>
            </Grid>
            <Grid item md={12} lg={"auto"} className={classes.inputRow}>
              <WithIcon icon={<AlternateEmailIcon />}>
                <CustomTextField
                  label="Номер телефона"
                  helperText="Вы неверно указали номер телефона"
                  variant="outlined"
                />
              </WithIcon>
            </Grid>
            <Grid item xs={12} className={classes.submitRow}>
              <Grid container direction="row" alignItems="center" justify="center">
                <CustomButton height="49px" width="212px">
                  Сохранить изменения
                </CustomButton>
              </Grid>
            </Grid>

          </Grid>

        </form>
      </Grid>
    </Grid>
  );
})
