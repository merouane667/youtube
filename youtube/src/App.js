import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Datacenter} from './Datacenter/Datacenter';
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';
import youtube from './apis/youtube'
import text from './Components/text'
import Home from './Components/Home';


function App() {
  
  return (
    <div>
      <Datacenter>
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
      </Datacenter>
    </div>
  );
}

export default App;
