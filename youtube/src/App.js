import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Datacenter} from './Datacenter/Datacenter';
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom';
import youtube from './apis/youtube'
<<<<<<< HEAD
import text from './Components/text'
=======
import Home from './Components/Home';

>>>>>>> dff927cd947b59eed2fb553e5e0a25ec1d253b5a

function App() {
  
  return (
    <div>
      <Datacenter>
      <Router>
<<<<<<< HEAD
<Route exact path="/" component={text}/>
=======
        <Route exact path='/' component={Home} />
>>>>>>> dff927cd947b59eed2fb553e5e0a25ec1d253b5a
      </Router>
      </Datacenter>
    </div>
  );
}

export default App;
