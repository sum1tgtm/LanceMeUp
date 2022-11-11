import React, { useState } from 'react'

const EditRow = ({ cancelEdit, saveEdit, product }) => {
    const [editData, setEditData] = useState({
        title: product.title,
        category: product.category,
        price: product.price
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setEditData(data => ({
            ...data,
            [name]: value
        }
        ))
    }

    return (
        <tr className='text-center'>
            <td>
                <input type="text" name='title' value={editData.title} onChange={handleInputChange} />
            </td>
            <td>
                <input type="text" name='category' value={editData.category} onChange={handleInputChange} />
            </td>
            <td>
                <input type="text" name='price' value={editData.price} onChange={handleInputChange} />
            </td>
            <td>
                <button type='button' className='btn btn-success' onClick={() => saveEdit(editData, product.id)}>Save</button>
                <button type='button' className='btn btn-warning' onClick={cancelEdit}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditRow