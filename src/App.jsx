import './App.css';
import './styles.css';
import Home from './views/Home';
import Contacto from './views/Contacto';
import Reserva from './views/Reserva';
import Form from './components/Form';
import NavBar from './views/NavBar';
import Footer from './views/Footer';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Reserva />
      <Contacto />
      <Footer />

    </div>
  );
};

export default App;

