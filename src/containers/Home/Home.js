import React, { Component } from 'react'
import Search from '../../components/Search/Search'
import UserProfile from '../../components/UserProfile/UserProfile'

class Home extends Component {

  state = {
    submitted: false,
    results: []
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
        <div>
        <h2 onClick={this.newSearch.bind(this)}>New Search</h2>
        <UserProfile user={this.state.results}/>
      </div>
          :
        <Search handleSubmit={this.handleSubmit.bind(this)} userData={this.userData.bind(this)} />
          }
      </div>
    );
  }
  }

  export default Home;
