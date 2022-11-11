import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import NormalRow from './NormalRow'
import EditRow from './EditRow'
import { nanoid } from 'nanoid'

const AdminPanel = () => {

    const [editId, setEditId] = useState(null)

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('http://localhost:4000/products')
            const data = await res.data
            setProducts(data)
        }
        getProducts()
    }, [])

    const [addForm, setAddFrom] = useState({
        // id: nanoid(), //using nanoid() here is bad coz it doesnt change its value
        title: '',
        category: '',
        price: ''
    })

    const addFormChange = (event) => {
        const { name, value } = event.target
        setAddFrom(prev => (
            {
                // id: nanoid(), //using nanoid() here is bad coz it doesnt change its value
                ...prev,
                [name]: value
            }
        )
        )
    }

    const editRow = (item) => {
        setEditId(item.id)
    }

    const deleteRow = (item) => [
        setProducts(data => data.filter(product => product.id !== item.id))
    ]

    const cancelEdit = () => {
        setEditId(null)
    }

    const saveEdit = (editData, id) => {
        const index = products.findIndex(product => product.id === id)
        let newProducts = [...products]
        newProducts[index] = {
            id: id,
            ...editData
        }
        // console.log(newProducts)
        setEditId(null)
        setProducts(newProducts)
    }

    const addProduct = () => {
        setProducts(prevData => (
            [
                ...prevData,
                { id: nanoid(), ...addForm }  //nanoid() here is perfect
            ]
        ))
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Admin Panel</h2>
            <form className='row'>
                <table>
                    <thead>
                        <tr className='text-center'>
                            <th className='col-md-3'>Title</th>
                            <th className='col-md-3'>Category</th>
                            <th className='col-md-3'>Price</th>
                            <th className='col-md-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <Fragment key={product.id}>
                                {product.id !== editId ? <NormalRow product={product} editRow={editRow} deleteRow={deleteRow} /> : <EditRow product={product} saveEdit={saveEdit} cancelEdit={cancelEdit} />}
                            </Fragment>
                        ))}
                    </tbody>
                </table>

                <input className='col-md-3' placeholder='Enter Product Name' type="text" name='title' value={addForm.title} onChange={addFormChange} />
                <input className='col-md-3' placeholder='Enter Product Category' type="text" name='category' value={addForm.category} onChange={addFormChange} />
                <input className='col-md-3' placeholder='Enter Product Price' type="text" name='price' value={addForm.price} onChange={addFormChange} />
                <button className='col-md-3 btn btn-primary' type='button' onClick={addProduct} >Add Product</button>
            </form>
        </div>
    )
}

export default AdminPanel