import React, { useState } from 'react';
import './Reserva.css';

const Reserva = () => {
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [personas, setPersonas] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`¡Gracias ${nombre}! Tu reserva para ${personas} personas el día ${fecha} a las ${hora} ha sido confirmada.`);
    };


    return (
        <div className="reserva-container">
            <h2>Reserva tu mesa</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
                </div>
                <div>
                    <label htmlFor="fecha">Fecha:</label>
                    <input type="date" id="fecha" value={fecha} onChange={(event) => setFecha(event.target.value)} required />
                </div>
                <div>
                    <label htmlFor="hora">Hora:</label>
                    <input type="time" id="hora" value={hora} onChange={(event) => setHora(event.target.value)} required />
                </div>
                <div>
                    <label htmlFor="personas">Número de personas:</label>
                    <input type="number" id="personas" value={personas} onChange={(event) => setPersonas(event.target.value)} required />
                </div>
                <button type="submit">Reservar</button>
            </form>
        </div>
    );
};

export default Reserva;
