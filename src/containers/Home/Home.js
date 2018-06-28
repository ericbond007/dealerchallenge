import React, { Component } from 'react'
import Search from '../../components/Search/Search'
import UserProfile from '../../components/UserProfile/UserProfile'
import Failed from '../../components/Search/Failed'

class Home extends Component {
  constructor(props) {
    super(props)
      this.state = {
        submitted: false,
        results: [],
        projects: [],
        failed: false
      }
  }

  handleSubmit(e) {
    if (this.state.failed) {
      e.preventDefault();
    } else {
    e.preventDefault();
    this.setState({ 
      submitted: true
    })
    }
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

  searchFailed() {
    this.setState({ 
      failed: !this.state.failed 
    })
  }

  
  render() {
    return (
      <div>
        <p>HomePage</p>
        {this.state.submitted ?
        <div className="columns">
          <div className="column is-one-fifth">
            <button>
              <h2 onClick={this.newSearch.bind(this)}>New Search</h2>
            </button>
          </div>
          <div className="column is-half">
            <UserProfile user={this.state.results} projects={this.state.projects} />
          </div>
        </div>
          :
          <div>
        <Search handleSubmit={this.handleSubmit.bind(this)} userData={this.userData.bind(this)} userProjects={this.userProjects.bind(this)} searchFailed={this.searchFailed.bind(this)} />
        {this.state.failed && (
          <Failed />
          )}
      </div>
        }
      </div>
    );
  }
  }

  export default Home;
