import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

import CustomTextField from './CustomTextField/CustomTextField';
import WithIcon from "./WithIcon/WithIcon"
import SubmitDiolog from "./SubmitDiolog/SubmitDiolog"
import CustomButton from './CustomButton/CustomButton';
import SubmitDiologBodyWrapper from "./SubmitDiologBody/SubmitDiologBodyWrapper"


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

const ProfileForm = React.memo(function ProfileForm(props) {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center" className={classes.profileTips}>
      <SubmitDiolog
      isOpened={props.isOpened}
      closeDiolog={props.closeDiolog}
      >
        <SubmitDiologBodyWrapper 
          closeDiolog={props.closeDiolog}
          onSubmit={props.onSubmit}
        />
      </SubmitDiolog>

      <Grid item xs={12} className={classes.tipSeparator} >
        <form noValidate autoComplete="off">

          <Grid container direction="row" alignItems="center" justify="space-around" className={classes.formGrid}>
            <Grid item md={12} lg={"auto"} className={classes.inputRow}>
              <WithIcon icon={<AlternateEmailIcon />}>
                <CustomTextField
                  additionalProps={{
                    value: props.name.value,
                    name: "name",
                    type: "name",

                    label:"Фамилия и имя",
                    helperText:"Вы неверно указали имя",
                    variant:"outlined",
                    onBlur: props.onBlur,
                    onChange: props.onChange,
                  }}
                  value={props.name.value}
                  onChange={props.onChange}
                  onBlur={props.onBlur}
                  error={props.name.error}
                  validated={props.name.validated}

                />
              </WithIcon>
            </Grid>
            <Grid item md={12} lg={"auto"} className={classes.inputRow}>
              <WithIcon icon={<AlternateEmailIcon />}>
                <CustomTextField
                additionalProps={{
                  name: "mail",
                  type: "mail",
                  label:"E-mail",
                  helperText:"Вы неверно указали E-mail",
                  variant:"outlined",

                }}
                value={props.mail.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                error={props.mail.error}
                validated={props.mail.validated}

                />
              </WithIcon>
            </Grid>
            <Grid item md={12} lg={"auto"} className={classes.inputRow}>
              <WithIcon icon={<PhoneIcon />}>
              <InputMask
                mask="+9 999 999 99 99"
                value={props.phone.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                disabled={false}
                maskChar=" "
              >
                {() => <CustomTextField
                additionalProps={{
                  name: "phone",
                  type: "phone",
                  label:"Номер телефона",
                  helperText:"Вы неверно указали номер телефона",
                  variant:"outlined",
                }}
                error={props.phone.error}
                validated={props.phone.validated}
                />}

              </InputMask>
              </WithIcon>
            </Grid>
            <Grid item xs={12} className={classes.submitRow}>
              <Grid container direction="row" alignItems="center" justify="center">
                <CustomButton height="49px" width="212px" onClick={props.showDiolog}>
                  Сохранить изменения
                </CustomButton>
              </Grid>
            </Grid>

          </Grid>

        </form>
      </Grid>
    </Grid>
  );
});

export default ProfileForm;

ProfileForm.propTypes = {
  phone: PropTypes.object.isRequired,
  mail: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,

  isOpened: PropTypes.bool.isRequired,
  showDiolog: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired, 
};
