import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import Contacto from './views/Contacto';
import Ubicacion from './views/Ubicacion';



const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Contacto" component={Contacto} />
          <Route path="/Ubicacion" component={Ubicacion} />

        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;

