import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Contacto from './views/Contacto';
import Ubicacion from './views/Ubicacion';
import { Form } from './components/Form';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Ubicacion' element={<Ubicacion />} />
          <Route path='/Form' element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

