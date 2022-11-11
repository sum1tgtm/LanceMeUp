import React from 'react'


const Product = ({ product, addToCart }) => {
  return (
    <div className='card my-2 mx-2' style={{
      width: '10rem'
    }}>
      <img src='http://dummyimage.com/100x100.png/ff4444/ffffff' style={{
        height: 'auto',
        width: 'auto',
      }} alt="" />
      <div className='card-body'>
        <h5 className='card-title'>{product.title}</h5>
        <p className="card-text">{product.price}</p>
        <p className="card-text">{product.category}</p>
        <button type="button" className="btn btn-primary" onClick={()=>addToCart(product)}>Add to cart</button>
      </div>
    </div>
  )
}

export default Product