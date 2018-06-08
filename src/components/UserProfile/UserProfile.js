import React, { Component } from 'react';
import Profile from './Profile';
import Projects from './Projects';
import PropTypes from 'prop-types';

class UserProfile extends Component {

  render() {
    return (
      <div>
      <Profile user={this.props.user} projects={this.props.projects} />
      {(this.props.projects) ?
      <Projects projects={this.props.projects} />
      : null }
    </div>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.object,
  projects: PropTypes.array
};

export default UserProfile;
