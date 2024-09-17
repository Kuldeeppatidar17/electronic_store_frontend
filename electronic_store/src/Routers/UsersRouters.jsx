import React from 'react'
import Routers from './Routers'
import { Route, Routes } from 'react-router-dom'
import CreateUserForm from '../user/CreateUserForm'
import Home from '../components/Home'

function UsersRouters() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<CreateUserForm/>}/>
      </Routes>
    </div>
  )
}

export default UsersRouters
