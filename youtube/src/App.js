import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Datacenter} from './Components/Datacenter/Datacenter';
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';
import youtube from './apis/youtube'


function App() {
  
  return (
    <div>
      <Datacenter>
      <Router>

      </Router>
      </Datacenter>
    </div>
  );
}

export default App;
