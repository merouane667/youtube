import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Datacenter} from './Datacenter/Datacenter';
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';
import youtube from './apis/youtube'
import Home from './Components/Home';
import Playvideo from './Components/Playvideo';



function App() {
  
  return (
    <div>
      <Datacenter>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/play/:id' component={Playvideo} />
      </Router>
      </Datacenter>
    </div>
  );
}

export default App;
