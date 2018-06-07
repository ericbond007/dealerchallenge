import React, { Component } from 'react';
import Profile from './Profile';
import Projects from './Projects';
import fetchJsonp from 'fetch-jsonp';
import PropTypes from 'prop-types';

const API_KEY = 'ThT7HRFyNjMhhdl3oakD7Cyc29LvTgjG'
const API_URL = 'https://api.behance.net/v2/projects/'

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  setUserProjects(projectArray) {
    this.setState({
      projects: projectArray
    })
    console.log(projectArray)
    console.log('setting projectArray')
  }

  
  fetchUserProjects = ( user ) => {
    const projectArray = [];
    {user.features.filter((i, index) => (index < 3))
                  .map(feature => (
          feature.projects.filter((i, index) => (index < 3))
                          .map(project => (
          fetchJsonp(`${API_URL}${project.id}?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(json => {
              projectArray.push(json)
            })
      ))
    ))}
    this.setUserProjects(projectArray)
  }


    componentDidMount() {
      this.fetchUserProjects(this.props.user);
    }

  render() {
    return (
      <div>
      <Profile user={this.props.user} projects={this.state.projects} />
      {(this.state.projects) ?
      <Projects projects={this.state.projects} />
      : null }
    </div>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.object
};

export default UserProfile;
