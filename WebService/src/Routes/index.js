import React from 'react'
import { Route, Routes} from "react-router-dom"
import Login from "../Pages/Login"
import HomeAdmin from "../Pages/HomeAdmin"
import HomeClient from "../Pages/HomeClient"


export default function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/HomeAdmin' element={<HomeAdmin/>}/>
            <Route path='/HomeClient' element={<HomeClient/>}/>
            <Route path='*' element={<h1>NOT FOUND</h1>}/>
        </Routes>
    )
}



