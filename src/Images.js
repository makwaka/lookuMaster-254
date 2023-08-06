import React from 'react'
import { Link } from 'react-router-dom'


// an array of objects to be displayed
function Images({ products, searchFilter }) {


  // intention of adding a filter button

  // const handleClick = () => {
  //   if(products.category === 'bags'){
  //     console.log('ff');
  //   }
  // }

  // const filter = () => <button type='button' onClick={handleClick}>bags</button>
  // map every product to show details
  const productList =
    products
      .filter(product => !searchFilter ||
        String(product.id).includes(searchFilter.toLowerCase()) ||
        product.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        product.price.toLowerCase().includes(searchFilter.toLowerCase()) ||
        product.category.toLowerCase().includes(searchFilter.toLowerCase())
      )
      .map(product => (
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