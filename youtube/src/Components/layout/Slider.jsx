import React from 'react';
import Slider4 from '../../Img/slider4.jpg'
import Slider2 from '../../Img/slider2.jpg'
import Slider1 from '../../Img/slider1.jpg'


const Slider = () => {
    return (
        <div>
             <section> 
             <div className="container">

                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#carouselExampleControls" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleControls" data-slide-to={1} />
                        <li data-target="#carouselExampleControls" data-slide-to={2} />
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-100" src={Slider4} alt="First slide" />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Item 1 Heading</h5>
                            <p>Item 1 Description</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src={Slider2} alt="Second slide" />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Item 2 Heading</h5>
                            <p>Item 2 Description</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src={Slider1} alt="Third slide" />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>Item 3 Heading</h5>
                            <p>Item 3 Description</p>
                          </div>
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
          </section>
        </div>
    );
}

export default Slider;
