import React, { useContext } from 'react';
import {Context} from '../../Datacenter/Datacenter';
import Video from '../Video';
import Home from '../Home';
import Sidebar from './Sidebar'
import logo from './logo.png';
import './App.css';
import Slider from '../layout/Slider';
import Footer from '../layout/Footer'



const Main = () => {
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
                 <Home/>
            </section>
          </div>
         <Footer/>
        </div>
        </div>
       
    );
}

export default Main;
