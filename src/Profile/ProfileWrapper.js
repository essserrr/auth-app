import React from 'react';
import Profile from "./Profile";

class ProfileWrapper extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      redactState: false,
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

export default ProfileWrapper;
