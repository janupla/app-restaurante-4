import React from 'react';
import './Cabecera.css';

const Cabecera = () => {
    return (
        <header className='Cabecera'>
            <h1 className='Cabecera-h1'>
                <a href="#" className='Cabecera-a'>
                    Inicio
                </a>
            </h1>

            <button className='Cabecera-button'>
                svg

            </button>

            <nav className='Cabecera-nav'>
                <ul className='Cabecera-ul'>
                    <li className="Cabecera-li"><a href="" className="Cabecera-a">Item 1</a></li>
                    <li className="Cabecera-li"><a href="" className="Cabecera-a">Item 2</a></li>
                    <li className="Cabecera-li"><a href="" className="Cabecera-a">Item 3</a></li>
                    <li className="Cabecera-li"><a href="" className="Cabecera-a">Item 4</a></li>
                    <li className="Cabecera-li"><a href="" className="Cabecera-a">Item 5</a></li>
                </ul>
            </nav>

         


        </header>
    );
};

export default Cabecera;