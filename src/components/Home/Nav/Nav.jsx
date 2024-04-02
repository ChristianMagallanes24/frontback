
import React, {useState} from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className="nav_logo">frontback</div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <a href="#">inicio</a>
            <a href="#">proyectos</a>
            <a href="#">perfil frontend</a>
            <a href="#">perfil backend</a>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default Nav;