import React from 'react';
import PropTypes from 'prop-types';
import Profile from "./Profile";


class ProfileWrapper extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      redactState: true,
    };
  }

  onClick = () => {
    this.setState({
      redactState: !this.state.redactState,
    })
  }

  render() {
    return (
      <Profile onClick={this.onClick} redactState={this.state.redactState} />
    );
  }
}

/*ProfileWrapper.propTypes = {
  value: PropTypes.object.isRequired,
  selectStatus: PropTypes.object.isRequired,
};*/

export default ProfileWrapper;
