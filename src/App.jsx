import {Routes, Route} from 'react-router-dom';
import './App.css'
import {Cabecera} from './components/Cabecera';
import {Carta} from'./components/Carta';
import {Reservar} from './components/Reservar';



const App = () => {
  return (
    <div className='App'>
      <Cabecera />
      <Carta />

      <Routes>
        <route path="/" element ={<Cabecera/>}></route>
        <route path="/" element ={<Carta/>}></route>
        <route path="/" element ={<Reservar/>}></route>
      </Routes>

    </div>
  );
};

export default App;

