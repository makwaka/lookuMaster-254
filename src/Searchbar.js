import React, {useState, useEffect} from 'react'
// import Products from './Images'


function Searchbar(searchName) {
const [item, setItem] = useState('')

  return (
    <div>
      <form>
    <input type='text' placeholder='Search Item' className='inputField' value={item} onChange={e => setItem(e.target.value)}  />
    <button type='button'></button>
      </form>
    </div>
  )
}

export default Searchbar