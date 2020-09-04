import React,{useContext,useEffect} from 'react';
import {Context} from '../../Datacenter/Datacenter'

const Sidebar = (props) => {
const {subscribes}=useContext(Context);
console.log(subscribes,'from sidebare');
    return (
        <section class="sidebar"> 
              <div id="menubar">
                <nav class="menu">
                  <h2>ABONNEMENTS </h2>
                  <hr/>
                  <ul>
                    {subscribes.map(subs=>(
                    <li><a href="#" title="Link">{subs.snippet.channelTitle}</a></li>

                   
                    ))}
                    </ul>
                </nav>
                <nav class="menu">
                  <h2>MENU ITEM 2 </h2>
                  <hr/>
                  <ul>
                    <li><a href="#" title="Link">Link 1</a></li>
                    <li><a href="#" title="Link">Link 2</a></li>
                    <li><a href="#" title="Link">Link 3</a></li>
                    <li class="notimp"><a href="#" title="Link">Link 4</a></li>
                  </ul>
                </nav>
              </div>
            </section>
    );
}

export default Sidebar;
