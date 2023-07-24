import React, { Component } from 'react'

class Searchbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
       searchName :''
    }
  }

// what happens when one searches a product
handleSearchChange = (event) => {
  this.setState({
    searchName: event.target.value
  })
}

  render() {
    return (
      <div>
        <div className='searchItem'>
        <input type='text' placeholder='Search Item' className='inputField' />
        <button className='searchBtn' value={this.state.searchName} onChange={this.handleSearchChange}>Search</button>
        </div>
      </div>
    )
  }
}

export default Searchbar