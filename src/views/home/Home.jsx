import React from 'react'
import imgBanner from '../../assets/img/banner-inmobiliaria.jpg'

const Home = () => {
    return (
        <>
            <div className="container w-100 ">
             
                <h1>Bienvenido a nuestra Inmobiliaria</h1>
                
                <img src={imgBanner} alt="Banner" className="img-fluid" />

            </div>
        </>
    )
}

export default Home