import React, { Component } from 'react'

class Searchbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
       searchName :''
    }
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Search Item' className='inputField' />
      </div>
    )
  }
}

export default Searchbar