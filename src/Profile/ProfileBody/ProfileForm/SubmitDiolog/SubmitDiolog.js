import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  diologPaper: {
    maxWidth: "600px",
    backgroundColor: theme.palette.textPrimary.main,
    borderRadius: "10px",
    margin: "0px",
    padding: "24px 24px 56px 24px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px 20px 20px",
      position: "absolute",
      top: "calc(100vh - 426px)",
      borderRadius: "20px 20px 0px 0px",
      height: "426px",
      transition: "all 0.2s ease-in-out",
      "&.altState": {
        transition: "all 0.2s ease-in-out",
        top: "calc(100vh - 83px)",
        height: "83px",
      }
    },
  },
}));
/*

add background
*/

const SlideUp = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SlideDown = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SubmitDiolog = React.memo(function SubmitDiolog(props) {
  const classes = useStyles();
  const [altState, setAltState] = React.useState(false);

  const turnonAltState = () => {
    setAltState(true);
  };
  const turnoffAltState = () => {
    setAltState(false);
  };

  const closeDiolog = () => {
    props.closeDiolog();
    turnoffAltState();
  };

  return (
    <div>
      <Dialog
        PaperProps={{ className: `${classes.diologPaper} ${altState ? "altState" : ""}` }}

        open={props.isOpened}
        TransitionComponent={SlideUp}

        onClose={closeDiolog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {React.cloneElement(props.children, {
          turnonAltState: turnonAltState,
          closeDiolog: closeDiolog,
        })}
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
