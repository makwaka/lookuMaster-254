// import React, { Component } from 'react'

// class Searchbar extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        searchName :''
//     }
//   }

//   render() {
//     return (
//       <div>
//         <input type='text' placeholder='Search Item' className='inputField' />

//       </div>
//     )
//   }
// }

// export default Searchbar

import React, { useState, useEffect } from 'react'
// import Products from './Images'



function Searchbar({ searchFilter, setsearchFilter, setFilterItems }) {

  // const [item, setItem] = useState([])
  // Functionality for searching items
  // const handleClick = () => {
  //   const searchQuery = inputField.value.toLowerCase();
  //   console.log('to search')

  // }


  const handleSubmitFilter = (e) => {
    e.preventDefault()
    if (searchFilter === "") {
      alert('You must enter a value to search.')
    }
  }

  return (
    <form onSubmit={(e) => handleSubmitFilter(e)}>
      <input
        type='text'
        placeholder='Search Item'
        className='inputField'
        value={searchFilter}
        onChange={(e) => setsearchFilter(e.target.value)}
      />
      {/* <button type='button' ></button> */}
    </form>
  )
}

export default Searchbar