import React from 'react'

const NormalRow = ({ product, editRow, deleteRow }) => {
    return (
        <tr className='text-center'>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>${product.price}</td>
            <td>
                <button type='button' className='btn btn-warning' onClick={() => editRow(product)}>Edit</button>
                <button type='button' className='btn btn-danger' onClick={() => deleteRow(product)}>Delete</button>
            </td>
        </tr>
    )
}

export default NormalRow