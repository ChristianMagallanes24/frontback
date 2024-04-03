import React from 'react'
import { Link } from "react-router-dom";


const Boton = () => {
  return (
    <div className='boton-container'><Link to="/proyectos" className="btn-proyectos">
    <span className='spn1'>Ver pro</span><span className="spn2">yectos</span>
 </Link></div>
    
  )
}

export default Boton