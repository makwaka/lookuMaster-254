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

import React, {useState, useEffect} from 'react'
// import Products from './Images'



function Searchbar() {

// const [item, setItem] = useState([])
// Functionality for searching items
// const handleClick = () => {
//   const searchQuery = inputField.value.toLowerCase();
//   console.log('to search')

// }

  return (
    <div>
    <input type='text' placeholder='Search Item' className='inputField' />
    <button type='button' ></button>
    </div>
  )
}

export default Searchbar