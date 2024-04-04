import React from 'react'


function Header() {
  return (
    <div className='header'>
        
        <div className="front">
            <h1 className='titulo-front'>frontend</h1>
            <div className="parrafo-container">
            <p>El frontend es la parte de una aplicación web o móvil que los usuarios ven y con la que interactúan directamente. Incluye la interfaz de usuario, el diseño, la navegación y la presentación de datos. En resumen, el frontend es la cara visible de la aplicación que permite a los usuarios interactuar con ella de manera intuitiva y atractiva.</p>
            </div>
        </div>
        <div className="back">
            <h1 className='titulo-back'>backend</h1>
            
            <div className="parrafo-container">
            <p>El backend se encarga de manejar la lógica y el procesamiento de datos de una aplicación web o móvil. Esto incluye gestionar las solicitudes del cliente, acceder a la base de datos, realizar cálculos y procesamientos complejos, y enviar la respuesta adecuada al cliente. En resumen, el backend es la parte invisible que hace que las aplicaciones funcionen correctamente y se comuniquen con el usuario.</p>
            </div>
        </div>
       
    </div>
  )
}

export default Header