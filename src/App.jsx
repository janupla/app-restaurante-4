import './App.css';
import Home from './views/Home';
import Contacto from './views/Contacto';
import Ubicacion from './views/Ubicacion';
import Reserva from './views/Reserva';
import Form from './components/Form';

const App = () => {
  return (
    <div className='App'>
      <Home />
      <Contacto />
      <Ubicacion />
      <Reserva />

    </div>
  );
};

export default App;

