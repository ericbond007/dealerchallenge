import React, { Component } from 'react';
import Profile from './Profile';
import fetchJsonp from 'fetch-jsonp';

const API_KEY = 'ThT7HRFyNjMhhdl3oakD7Cyc29LvTgjG'
const API_URL = 'https://api.behance.net/v2/projects/'

class UserProfile extends Component {
  constructor(props) {
    super();
    this.state = {
      projects: [],
    }
  }

  
  fetchUserProjects = ({ user }) => {
  const projectArray = [];
    {user.features.map(feature => (
      feature.projects.map(project => (
        projectArray.push(fetchJsonp(`${API_URL}${project}?api_key=${API_KEY}`))
      ))
    ))}  
    console.log(projectArray);
    this.setState({ 
      projects: projectArray
    })
  }

    ComponentDidMount(user) {
      this.fetchUserProjects(user);
    }

  render() {
    return (
      <Profile user={this.props.user} />
    )
  }
}

export default UserProfile;
