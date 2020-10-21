import React from 'react';
import PropTypes from 'prop-types';

import Collapse from '@material-ui/core/Collapse';

import QuestionBody from './QuestionBody';
import AnswerBody from './AnswerBody';

class SubmitDiologBodyWrapper extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      success: false,
    };
  }

  onSubmit = () => {
    this.setState({
      success: !this.state.success,
    });
    this.props.onSubmit()
  }
  


  render() {
    return (
      <>
        <Collapse  in={!this.state.success}>
          <QuestionBody
                  closeDiolog={this.props.closeDiolog}
                  onSubmit={this.onSubmit}
                />
        </Collapse >
        <Collapse in={this.state.success}>
          <AnswerBody
                  closeDiolog={this.props.closeDiolog}
                />
        </Collapse >
      </>
      
    );
  }
};

export default SubmitDiologBodyWrapper;

SubmitDiologBodyWrapper.propTypes = {
  closeDiolog: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired, 
};

