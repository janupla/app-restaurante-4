import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="container">
                <div className="col">
                    <h3>Horario</h3>
                    <ul>
                        <li>Lunes a Viernes: 8:00am - 9:00pm</li>
                        <li>Sábado: 9:00am - 10:00pm</li>
                        <li>Domingo: 10:00am - 7:00pm</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Síguenos</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
