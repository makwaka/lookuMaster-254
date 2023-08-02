import React from 'react'
import { Link, useParams } from 'react-router-dom'

const item = ({ products }) => {

  let { id } = useParams()

  let matchingProductId

  if (products.length > 0) {
    if (products[id - 1]) {
      matchingProductId = id
    }
  }

  let product = products[matchingProductId - 1]

  return (
    <>
      {matchingProductId ?
        <div>
          <img className='productsImg' src={product.image} alt='product image' />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <h4>Additional Information:</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        :
        <div>Sorry, this item does not exist.  Please return <Link to='/'>Home</Link>!</div>
      }
    </>
  )
}

export default item