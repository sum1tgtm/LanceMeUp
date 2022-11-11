import React, { useEffect, useState } from 'react'

const Cart = ({ cart, deleteFromCart, removeOneQuantity, addOneQuantity }) => {

  useEffect(() => {
    getTotalPrice()
  }, [cart])
  const [totalPrice, setTotalPrice] = useState(0)

  const getTotalPrice = () => {
    let totalCost = 0
    cart.map(item => {
      totalCost += item.quantity * item.price
    })
    setTotalPrice(totalCost)
  }


  return (
    <div>
      <h3 className='text-center'>Cart Items</h3>
      <div>
        {cart.map(item =>
          <div key={item.id}>
            <span>{item.title} </span>
            <span>Price: </span> <span>{item.price} </span>
            <span>Quantity: </span> <button type='button' className='btn btn-warning' onClick={() => removeOneQuantity(item)}>-</button> <span>{item.quantity} <button type='button' className='btn btn-primary' onClick={() => addOneQuantity(item)} >+</button> </span>
            <span>Total Cost: </span> <span>{(item.quantity * item.price).toFixed(2)}</span>
            <button type='button' className='btn btn-danger' onClick={() => deleteFromCart(item)}>Delete</button>
          </div>
        )}
      </div>
      <p>Total Price: {totalPrice.toFixed(2)} </p>
      <button type='button' className='btn btn-success'>Checkout</button>
    </div>
  )
}

export default Cart