import React, { Component } from 'react'
import Search from '../../components/Search/Search'
import UserProfile from '../../components/UserProfile/UserProfile'

class Home extends Component {

  state = {
    submitted: false,
    results: [],
    projects: []
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ 
      submitted: true
    })
  }

  userData(user) {
    this.setState({ 
      results: user
    })
  }

  userProjects(projectArray) {
    this.setState({
      projects: projectArray
    })
  }

  newSearch(e) {
    e.preventDefault();
    this.setState({ 
      submitted: false
    })
  }

  
  render() {
    return (
      <div>
        {this.state.submitted ?
        <div className="columns">
          <div className="column is-one-fifth">
            <h2 onClick={this.newSearch.bind(this)}>New Search</h2>
          </div>
          <div className="column is-half">
            <UserProfile user={this.state.results}/>
          </div>
        </div>
          :
        <Search handleSubmit={this.handleSubmit.bind(this)} userData={this.userData.bind(this)} userProjects={this.userProjects.bind(this)} />
          }
      </div>
    );
  }
  }

  export default Home;
