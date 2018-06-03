import React, { Component } from 'react';
import axios from 'axios'

const { API_KEY } = 'ThT7HRFyNjMhhdl3oakD7Cyc29LvTgjG'
const API_URL = 'https://api.behance.net/v2/users/'

class Search extends Component {

  state = {
    query: '',
    results: []
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getUser()
        }
      } 
    })
  }


  getUser = () => {
    axios.get(`${API_URL}${this.state.query}?api_key=${API_KEY}`)
      .then(({ data }) => {
        this.setState({
          results: data
      })
      })
  }

  render() {
    return (
      <div>
      <form>
  <div className="field">
    <div className="control">
      <input 
        className="input" 
        type="text" 
        placeholder="Search Behance" 
        ref={input => this.search = input}
        onChange={this.handleInputChange}
      />
      <p>
        {this.state.query}
      </p>
      </div>
    </div>
    <div class="control">
    <button class="button is-link">Submit</button>
  </div>
    </form>
  </div>
    )
  }
}

export default Search;
