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

            <div className='section'>
            <iframe width="420" height="315"  className='mt-5 iframe'
            src={`https://www.youtube.com/embed/${id}`}>
              
            </iframe>
                <h6 >Title</h6>
                <p className="para" >
                    title
                    <br/> 
                    DD/M/YYYY
                </p>
                <div className='d-flex justify-content-between'>
                  <a href='#'>
                  <i class="fa fa-thumbs-o-down mt-10 fa-2x"></i>
                  <i class="fa fa-thumbs-o-up mt-10 fa-2x"></i>
                  </a>
                  </div>
                <button className="btn btn-danger btn-sm float-center">subscribe</button>          

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
