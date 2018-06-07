import React, { Component } from 'react';
import Profile from './Profile';
import Projects from './Projects';
import fetchJsonp from 'fetch-jsonp';

const API_KEY = 'ThT7HRFyNjMhhdl3oakD7Cyc29LvTgjG'
const API_URL = 'https://api.behance.net/v2/projects/'

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  setUserProjects(projects) {
    this.setState({
      projects: projects
    })
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

  fetchOneProject = () => {
    fetchJsonp(`${API_URL}47885859?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ 
          projects: json
        })
      })
  }

    componentDidMount() {
      this.fetchUserProjects(this.props.user);
    }

  render() {
    return (
      <div>
      <Profile user={this.props.user} />
      <Projects projects={this.state.projects} />
    </div>
    )
  }
}

export default UserProfile;
