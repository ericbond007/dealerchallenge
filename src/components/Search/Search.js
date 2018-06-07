import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import './Search.css';

const API_KEY = 'ThT7HRFyNjMhhdl3oakD7Cyc29LvTgjG'
const API_URL = 'https://api.behance.net/v2/users/'


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
    this.props.userProjects(projectArray)
  }

  fetchUser = () => {
    fetchJsonp(`${API_URL}${this.state.query}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        this.props.userData(json.user)
        console.log(json.user);
        {/*this.fetchUserProjects(json.user)*/}
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

export default Search;
