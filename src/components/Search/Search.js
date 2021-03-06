import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import './Search.css';
import PropTypes from 'prop-types';

const API_KEY = 'ThT7HRFyNjMhhdl3oakD7Cyc29LvTgjG'
const API_USERS_URL = 'https://api.behance.net/v2/users/'
const API_PROJECTS_URL = 'https://api.behance.net/v2/projects/'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    }
  }


  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
          this.fetchUser()
    })
  }

  queryFailed() {
    this.setState({
      query: ''
    })
  }

  fetchUserProjects(features) {
    const projectIDArray = [];
    const projectArray = [];

    {features.map(feature => (
          feature.projects.map(project => (
                            projectIDArray.push(project.id)
                          ))
    ))}

    projectIDArray.filter((i, index) => (index < 7))
                  .map(id => (
                    fetchJsonp(`${API_PROJECTS_URL}${id}?api_key=${API_KEY}`)
                    .then(response => response.json())
                    .then(json => {
                      projectArray.push(json)
                    })
                  ))
    this.props.userProjects(projectArray)
  }

  checkResponse(response) {
    console.log(response);
    if (response.http_code === 200) {
      return response;
    } else {
        let error = new Error(response.status)
        error.respone = response
        throw error
    }
  }

  fetchUser() {
    fetchJsonp(`${API_USERS_URL}${this.state.query}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(this.checkResponse)
      .then(json => {
        this.props.userData(json.user)
        this.fetchUserProjects(json.user.features)
      }).catch(error => {
        this.props.searchFailed()
        this.queryFailed()
        console.log("error", error);
      })
  }
  

  render() {
    return (
      <div className="columns searchBar">
          <div className="column is-one-third">
          </div>
        <div className="column is-one-third">
          <p>Search for Behance Users</p>
          <form role="form" onSubmit={this.props.handleSubmit}>
            <div className="field">
              <div className="control">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Search Behance" 
                  ref={input => this.search = input}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          <div className="control" id="buttoncenter">
            <button type="submit" className="button is-link">Submit</button>
          </div>
        </form>
        </div>
</div>
    )
  }
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userData: PropTypes.func.isRequired,
  userProjects: PropTypes.func.isRequired,
  searchFailed: PropTypes.func.isRequired
}

export default Search;
