import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import './Search.css';
import PropTypes from 'prop-types';
import normalize from 'json-api-normalizer';

const API_KEY = 'ThT7HRFyNjMhhdl3oakD7Cyc29LvTgjG'
const API_USERS_URL = 'https://api.behance.net/v2/users/'
const API_PROJECTS_URL = 'https://api.behance.net/v2/projects/'




class Search extends Component {
  constructor(props) {
    super(props);
  this.state = {
    query: ''
  }

  }


  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0 || this.state.query.length > 1) {
          this.fetchUser()
        }
      } 
    })
  }



  fetchUserProjects = ( features ) => {

    const projectIDArray = [];
    const projectArray = [];



    {features.map(feature => (
          feature.projects.map(project => (
                            projectIDArray.push(project.id)
                          ))
    ))}
    console.log(projectIDArray);

    projectIDArray.filter((i, index) => (index < 7))
                  .map(id => (
                    fetchJsonp(`${API_PROJECTS_URL}${id}?api_key=${API_KEY}`)
                    .then(response => response.json())
                    .then(json => {
                      projectArray.push(json)
                    })
                  ))
    this.props.userProjects(projectArray)
                      console.log(projectArray)
  }

  fetchUser = () => {
    fetchJsonp(`${API_USERS_URL}${this.state.query}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        this.props.userData(json.user)
        this.fetchUserProjects(json.user.features)
      })
  }



  render() {
    return (
      <div className="columns searchBar">
          <div className="column is-one-third">
          </div>
        <div className="column is-one-third">
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
  handleSubmit: PropTypes.func,
  userData: PropTypes.func,
  userProjects: PropTypes.func
}

export default Search;
