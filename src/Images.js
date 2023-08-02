import React from 'react'
import { Link } from 'react-router-dom'


// an array of objects to be displayed
function Images({ products }) {


  // intention of adding a filter button

  // const handleClick = () => {
  //   if(products.category === 'bags'){
  //     console.log('ff');
  //   }
  // }

  // const filter = () => <button type='button' onClick={handleClick}>bags</button>
  // map every product to show details
  const productList = products.map(product => (
    <article key={product.id} className='productArticle'>
      <article className='category'>
        <Link to={`item/${product.id}`}><img className='productsImg' src={product.image} alt='product image' /></Link><h3>{product.name}</h3><p>{product.price}</p>
      </article>
    </article>))

  return (
    <div className='list'>
      {productList}
    </div>
  )
}

export default Images