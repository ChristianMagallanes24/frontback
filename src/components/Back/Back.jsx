import React, { useState, useEffect } from 'react';
import LoadingScreen from "../../components/Home/Carga/LoadingScreen";

function Back() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga con un temporizador
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milisegundos (2 segundos) como ejemplo
  }, []);

  return (
    <div className='hola'>
      {loading ? (
        <LoadingScreen />
      ) : (
        <section className='proyectos-container'>
          {/* Aquí van los proyectos */}
        </section>
      )}
    </div>
  );
}

export default Back;
