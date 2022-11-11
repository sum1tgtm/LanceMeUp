import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = ({ setUsers, users }) => {

    const navigate = useNavigate()

    const styles = {
        fontFamily: 'sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        height: '100vh',
        backgroundColor: '#f8f9fd'
    }

    const inputStyles = {
        height: '25px',
        border: '1px solid rgba(0, 0, 0, 0.2)'
    }

    const submitStyles = {
        marginTop: '10px',
        cursor: 'pointer',
        fontSize: '15px',
        background: '#01d28e',
        border: '1px solid #01d28e',
        color: '#fff',
        padding: '10px 20px'
    }

    const registerStyles = {
        marginTop: '10px',
        cursor: 'pointer',
        fontSize: '15px',
        background: 'red',
        border: '1px solid red',
        color: '#fff',
        padding: '10px 20px'
    }

    const inpContSty = {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        margin: '10px'
    }

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const [rePassword, setRePassword] = useState('')

    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (rePassword === loginForm.password) {
            setUsers(prev => (
                [
                    ...prev,
                    loginForm
                ]
            ))
            setError(false)
            navigate('/')
        }
        else {
            setError(true)
        }
    }

    const handleFormChange = (event) => {
        const { name, value } = event.target
        setLoginForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handlePwChange = (event) => {
        setRePassword(event.target.value)
    }


    return (
        <div className='container my-5' style={{ maxWidth: '200px' }}>
            <h3 className='text-center'>Register</h3>
            <div className="form">
                <form className='text-center my-2' onSubmit={handleSubmit}>
                    <div className="input-container" style={inpContSty}>
                        <label>Full Name</label>
                        <input type="text" name="fullname" required style={inputStyles} />
                    </div>
                    <div className="input-container" style={inpContSty}>
                        <label>Phone</label>
                        <input type="number" name="phone" required style={inputStyles} />
                    </div>
                    <div className="input-container" style={inpContSty}>
                        <label>Email</label>
                        <input type="email" name="email" required style={inputStyles} value={loginForm.email} onChange={handleFormChange} />
                    </div>
                    <div className="input-container" style={inpContSty}>
                        <label>Password</label>
                        <input type="password" name="password" required style={inputStyles} value={loginForm.password} onChange={handleFormChange} />
                    </div>
                    <div className="input-container" style={inpContSty}>
                        <label>Confirm Password</label>
                        <input type="password" name="rePassword" required style={inputStyles} value={rePassword} onChange={handlePwChange} />
                    </div>
                    <div className="button-container" style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        {error && <p>Passwords dont match</p>}
                        <input type="submit" style={submitStyles} value="Register" />
                        <input type="button" style={registerStyles} value="Login" onClick={() => navigate('/')} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register