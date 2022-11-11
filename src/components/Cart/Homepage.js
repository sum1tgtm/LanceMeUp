import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cart from './Cart'
import Products from './Products'


const Homepage = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([

    ])

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('http://localhost:4000/products')
            const data = await res.data
            setProducts(data)
        }
        getProducts()
    }, [])

    const addToCart = (product) => {
        if (!cart.some(item => item.id === product.id)) {  //some array method is very helpful in some cases NO PUN INTENDED
            setCart(data => [...data,  //some method checks if the the condition exists or not and returns boolean
            {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1
            }
            ])
        }
        else {
            setCart(data => data.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                else {
                    return item
                }
            }))
        }
    }

    const deleteFromCart = (product) => {
        setCart(data => data.filter(item => item.id !== product.id))
    }

    const removeOneQuantity = (product) => {
        if (product.quantity === 1) {
            deleteFromCart(product)
        }
        else {
            setCart(data => data.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                else {
                    return item
                }
            }))
        }
    }

    const addOneQuantity = (product) => {
        setCart(data => data.map(item => {
            if (item.id === product.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            else {
                return item
            }
        }))
    }

    return (
        <div className='container'>
            <header className='text-center'>
                <h1>Welcome to the Shop</h1>
            </header>
            <div className='row'>
                <div className='col-md-8'>
                    <Products products={products} addToCart={addToCart} />
                </div>
                <div className='col-md-4'>
                    <Cart cart={cart} deleteFromCart={deleteFromCart} removeOneQuantity={removeOneQuantity} addOneQuantity={addOneQuantity} />
                </div>
            </div>
        </div>
    )
}

export default Homepage