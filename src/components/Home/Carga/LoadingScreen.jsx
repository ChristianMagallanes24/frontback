import React from 'react';
import "./_LoadingScreen.scss"

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <h1 className='cargando-titulo'>Cargando...</h1>
      {/* Puedes agregar un spinner u otra animación de carga aquí */}
    </div>
  );
}

export default LoadingScreen;
