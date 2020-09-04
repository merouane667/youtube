import React from 'react';

const Sidebar = () => {
    return (
        <section class="sidebar"> 
              <div id="menubar">
                <nav class="menu">
                  <h2>ABONNEMENTS </h2>
                  <hr/>
                  <ul>
                    <li><a href="#" title="Link">Link 1</a></li>
                    <li><a href="#" title="Link">Link 2</a></li>
                    <li><a href="#" title="Link">Link 3</a></li>
                    <li class="notimp"><a href="#"  title="Link">Link 4</a></li>
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
