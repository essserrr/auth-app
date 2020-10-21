import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  diologPaper : {
    maxWidth: "600px",
    backgroundColor: theme.palette.textPrimary.main,
    borderRadius: "10px",
    margin: "0px",
    padding: "24px 24px 56px 24px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px 20px 20px",
    },
  },
}));
/*
change border radius
    //round 20px

    stick to bottom
const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    left: 10,
    top: 50
  }
});

change bottom margin/padding

change bottom rounded


add headers

add background
*/

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SubmitDiolog = React.memo(function SubmitDiolog(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        PaperProps={{className: classes.diologPaper}}
        
        open={props.isOpened}
        TransitionComponent={Transition}
        
        onClose={props.closeDiolog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {props.children}
      </Dialog>
    </div>
  );
});

export default SubmitDiolog;

SubmitDiolog.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeDiolog: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired, 
};
