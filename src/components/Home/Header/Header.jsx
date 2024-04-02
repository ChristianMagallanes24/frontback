import React from 'react'


function Header() {
  return (
    <div className='header'>
        
        <div className="front">
            <h1 className='titulo-front'>frontend</h1>
        </div>
        <div className="back">
            <h1 className='titulo-back'>backend</h1>
        </div>
        <div className='btn-proyectos'> <span className='spn1'>ver pro</span><span className='spn2'>yectos</span></div>
    </div>
  )
}

export default Header