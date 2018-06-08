import React, { Component } from 'react';
import Profile from './Profile';
import Projects from './Projects';
import fetchJsonp from 'fetch-jsonp';
import PropTypes from 'prop-types';

const API_KEY = 'ThT7HRFyNjMhhdl3oakD7Cyc29LvTgjG'
const API_URL = 'https://api.behance.net/v2/projects/'

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
