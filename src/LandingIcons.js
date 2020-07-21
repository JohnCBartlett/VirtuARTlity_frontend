import React from 'react';

const LandingIcons = () => {

    return (
        <div>
            <section className="features-icons bg-light text-center">
                <div class="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon d-flex">
                          <i className="icon-mouse m-auto text-primary"></i>
                        </div>
                        <h3>View the gallery</h3>
                        <p className="lead mb-0">Enjoy art works from a wide variety of local artists with the click of a button</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div className="features-icons-icon d-flex">
                          <i className="icon-wallet m-auto text-primary"></i>
                        </div>
                        <h3>Make a purchase</h3>
                        <p className="lead mb-0">Buy any piece of art using our safe and secure online payment process, then have it sent directly to your home</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                        <div className="features-icons-icon d-flex">
                          <i className="icon-people m-auto text-primary"></i>
                        </div>
                        <h3>Interact</h3>
                        <p className="lead mb-0">Contact the artists directly to understand more about their art or to have your own commission</p>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        </div>
    );
}

export default LandingIcons;