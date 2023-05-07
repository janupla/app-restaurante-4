import React, { useState } from 'react';

const Reserva = () => {
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [personas, setPersonas] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`¡Gracias ${nombre}! Tu reserva para ${personas} personas el día ${fecha} ha sido confirmada.`);
    };

    return (
        <div>
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
                    <label htmlFor="personas">Número de personas:</label>
                    <input type="number" id="personas" value={personas} onChange={(event) => setPersonas(event.target.value)} required />
                </div>
                <button type="submit">Reservar</button>
            </form>
        </div>
    );
};

export default Reserva;
