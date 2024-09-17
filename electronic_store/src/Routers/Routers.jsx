import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UsersRouters from './UsersRouters'

function Routers() {
    return (
        <div>
            <Routes>
                <Route path='/*' element={<UsersRouters/>}/>
            </Routes>
        </div>
    )
}

export default Routers
