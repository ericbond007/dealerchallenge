import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import './Search.css';

const API_KEY = 'ThT7HRFyNjMhhdl3oakD7Cyc29LvTgjG'
const API_URL = 'https://api.behance.net/v2/users/'


class Search extends Component {

  state = {
    query: ''
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

  handleAPIError = (response) => {
    if (!response.ok) {
      this.badResponse(response)
    }
    return response;
  }

  fetchUser = () => {
    fetchJsonp(`${API_URL}${this.state.query}?api_key=${API_KEY}`)
      .then(this.handleAPIError) 
      .then(response => response.json())
      .then(json => {
        this.props.userData(json.user)
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
