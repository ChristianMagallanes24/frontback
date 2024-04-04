import React from 'react'
import Boton from './Boton'


function Header() {
  return (
    <div className='header'>
        
        <div className="front">
           <div className="frontx">
           <h1 className='titulo-front'>Front and Back</h1>
            <div className="parrafo-container">
            <p>El frontend es la parte de una aplicación web o móvil que los usuarios ven y con la que interactúan directamente. Incluye la interfaz de usuario, el diseño, la navegación y la presentación de datos. En resumen, el frontend es la cara visible de la aplicación que permite a los usuarios interactuar con ella de manera intuitiva y atractiva.</p>
            </div>
           </div>
           <Boton/>
        </div>
       
       
    </div>
  )
}

export default Header