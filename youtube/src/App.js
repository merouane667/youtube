import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Datacenter} from './Datacenter/Datacenter';
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';
import youtube from './apis/youtube'
import Home from './Components/Home';
import Playvideo from './Components/Playvideo';
import Main from './Components/layout/main'


function App() {
  
  return (
    <div>
      <Datacenter>
      <Router>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/play/:id' component={Playvideo} />
        <Route exact path='/' component={Main} />
      </Router>
      </Datacenter>
    </div>
  );
}

export default App;
