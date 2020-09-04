import './Playvideo.css'
import React, { useContext } from 'react';
import {Context} from '../Datacenter/Datacenter';
import Sidebar from './layout/Sidebar'
import logo from './layout/logo.png';
import './layout/App.css'
import Slider from './layout/Slider';


const Playvideo = (props) => {
    const {id} = props.match.params;

   

    
   
    const subs="btn btn-danger btn-sm float-right";
    const unsubs="btn btn-secondary btn-sm float-right";
    const sub="Subscribe";
    const unsub="Subscribed";
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

            <div className='section'>
                  <div className="card">
                        <iframe width="420" height="315"  className='iframe align-middle'
                          src={`https://www.youtube.com/embed/${id}`}>
                        </iframe>
                    <div className="card-body">
                          <a href='#'>
                          <i class="fa fa-thumbs-o-down mt-10 fa-2x"></i>
                          <i class="fa fa-thumbs-o-up mt-10 fa-2x"></i>
                          </a>

                        
                                   
                </div>
                </div>
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
