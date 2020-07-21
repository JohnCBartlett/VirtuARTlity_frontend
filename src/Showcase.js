import React from 'react';
import image1 from './images/gallery1.jpg';
import image2 from './images/register.jpg';
import image3 from './images/purchase_online.jpg';

const Showcase = () => {

    return (
        <div>
            <section className="showcase">
                <div className="container-fluid p-0">

                  <div className="row no-gutters align-items-center">
                    <div className="col align-self-center col-lg-6 order-lg-2 text-white showcase-img" >
                      <img src={image1} className="landingImage" alt=""/>
                    </div>
                    <div className="col align-self-center col-lg-6 order-lg-1 my-auto showcase-text">
                      <h2>Virtual Gallery</h2>
                      <p className="lead mb-0">Enjoy our virtual online gallery from the comfort of your home. We showcase and sell artwork of Academically-trained, popular artists from the Middle East.</p>
                    </div>
                  </div>

                  <div className="row no-gutters align-items-center">
                    <div className="col-lg-6 text-white showcase-img">
                      <img src={image2} className="landingImage" alt=""/>           
                    </div>
                    <div className="col-lg-6 my-auto showcase-text">
                      <h2>Sign up</h2>
                      <p className="lead mb-0">Register to gain access to the latest artist news, our blogpost, events/webinars, special offerings or to contact your favorite artist to commission your own art for that special occasion</p>
                    </div>
                  </div>

                  <div className="row no-gutters align-items-center">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img">
                      <img src={image3} className="landingImage" alt=""/>          
                    </div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                      <h2>Purchase</h2>
                      <p className="lead mb-0">Buy your favorite painting or piece of art from our gallery and have it sent directly to your home</p>
                    </div>
                  </div>

                </div>
            </section>
        </div>
    );
}
        
export default Showcase;