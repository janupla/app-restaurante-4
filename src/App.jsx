import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Contacto from './views/Contacto';
import Ubicacion from './views/Ubicacion';
import Reserva from './views/Reserva';
import { Form } from './components/Form';

const App = () => {
  return (
    <div className='App'>
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Ubicacion' element={<Ubicacion />} />
          <Route path='/Reserva' element={<Reserva />} />
          <Route path='/Form' element={<Form />} />
        </Routes>
    
    </div>
  );
};

export default App;

