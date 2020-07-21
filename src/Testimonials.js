import React from 'react';
import testimonials1 from './images/testimonials-1.jpg';
import testimonials2 from './images/testimonials-2.jpg';
import testimonials3 from './images/testimonials-3.jpg';

const Testimonials = () => {

    return (
        <div>
          <section className="testimonials text-center bg-light">
            <div className="container">
              <h2 className="mb-0">What people are saying...</h2>
              <div className="row">
                <div className="col-lg-4">
                  <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img className="img-fluid rounded-circle mb-3" src={testimonials1} alt=""/>
                    <h5>Margaret E.</h5>
                    <p className="font-weight-light mb-0">"This is fantastic! A great selection of local art not found anywhere else in the region"</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img className="img-fluid rounded-circle mb-3" src={testimonials2} alt=""/>
                    <h5>Fred S.</h5>
                    <p className="font-weight-light mb-0">"Virtuality is an amazing platform to interact with artists and view beautiful paintings"</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img className="img-fluid rounded-circle mb-3" src={testimonials3} alt=""/>
                    <h5>Sarah W.</h5>
                    <p className="font-weight-light mb-0">"Thanks so much, as an artist this has really helped promote my work"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}

export default Testimonials;