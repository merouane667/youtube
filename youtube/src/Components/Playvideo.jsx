import './Playvideo.css'
import React, { useContext } from 'react';
import {Context} from '../Datacenter/Datacenter';
import Sidebar from './layout/Sidebar'
import logo from './layout/logo.png';
import './layout/App.css'
import Slider from './layout/Slider';


const Playvideo = (props) => {
    const {id} = props.match.params;
    const {dataState} = useContext(Context);

    return (
        <div>
        <div id="mainWrapper">
          <header> 
            <div id="logo"> <img src={logo} width='100px' alt="sample logo"/></div>
            <div id="headerLinks"><a href="#" title="Login/Register">Login/Register</a><a href="#" title="Cart">Cart</a></div>
          </header>
          <Slider/>
          <div id="content">
          <Sidebar/>
            <section class="mainContent">

            <div className="container">
            <iframe width="420" height="315"  className='mt-5 iframe'
            src={`https://www.youtube.com/embed/${id}`}>
            </iframe>
            </div>
            </section>

          </div>
          <footer> 
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius sem neque. Integer ornare.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius sem neque. Integer ornare.</p>
            </div>
            <div class="footerlinks">
              <p><a href="#" title="Link">Link 1 </a></p>
              <p><a href="#" title="Link">Link 2</a></p>
              <p><a href="#" title="Link">Link 3</a></p>
            </div>
          </footer>
        </div>
        </div>
       
    );
}

export default Playvideo;
