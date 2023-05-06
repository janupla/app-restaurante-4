import React from 'react';
import { Formulario } from './components/Formulario';

const Contacto = () => {
    return (
        <div>
            <h1>Contacto</h1>
            <p>¡Hola! Por favor contáctanos utilizando los siguientes medios:</p>
            <ul>
                <li>Teléfono: 123-456-7890</li>
                <li>Correo electrónico: contacto@tunegocio.com</li>
                <li>Dirección: 123 Calle Principal, Ciudad, País</li>
            </ul>
            <Form />
        </div>
    );
};

export default Contacto;

