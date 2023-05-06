import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

const Ubicacion = () => {
    const defaultCenter = { lat: 37.7749, lng: -122.4194 };

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMap defaultZoom={10} defaultCenter={defaultCenter}>
                <Marker position={defaultCenter} />
            </GoogleMap>
        </div>
    );
};

export default Ubicacion;
