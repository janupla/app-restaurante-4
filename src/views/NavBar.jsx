import React from 'react';
import './NavBar.css';
import logo from '../assets/img/aromascafe.png';



const NavBar = () => {
    const handleHomeClick = () => {
        window.location.href = "/"; // redirige a la página principal
    }

    const handleMenuClick = () => {
        window.location.href = "/menu"; // redirige a la página de menú
    }

    const handleReservaClick = () => {
        window.location.href = "/reserva"; // redirige a la página de reserva
    }

    const handleContactoClick = () => {
        window.location.href = "/contacto"; // redirige a la página de contacto
    }

    return (
        <nav className="nav-bar"> 
        <img src={logo} alt="Aromas Café" className="logo" />
            <ul>
                <li><a href="#" onClick={handleHomeClick}>Home</a></li>
                <li><a href="#" onClick={handleMenuClick}>Menú</a></li>
                <li><a href="#" onClick={handleReservaClick}>Reserva</a></li>
                <li><a href="#" onClick={handleContactoClick}>Contacto</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
