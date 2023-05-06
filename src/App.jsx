import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import Contacto from './views/Contacto';



const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;

