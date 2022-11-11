import React from 'react'
import Product from './Product'

const Products = ({ products, addToCart }) => {
    return (
        <div className='row justify-content-evenly'>
            {
                products.map(product =>
                (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                )
                )
            }
        </div>
    )
}

export default Products