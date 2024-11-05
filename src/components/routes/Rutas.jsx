import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../views/home/Home'
import About from '../../views/about/About'
import Contacto from '../../views/contacto/Contacto'
import Error404 from '../../views/error/Error404'


const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>
    )
}

export default Rutas
