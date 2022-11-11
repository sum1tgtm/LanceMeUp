import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import { useState } from 'react'
import HomePage from './components/Cart/Homepage'
import AdminPanel from './components/Admin/AdminPanel'

function App() {

  const [users, setUsers] = useState([
    {
      email: 'ram@gmail.com',
      password: '12345'
    }
  ])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} />} />
        <Route path='/register' element={<Register users={users} setUsers={setUsers} />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
