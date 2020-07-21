import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        <div>
          <footer className="footer bg-light">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                  <ul className="list-inline mb-2">
                    <Link to="/about"
                        className="list-inline-item">
                        About
                    </Link>
                    <li className="list-inline-item">&sdot;</li>
                    <Link to="/contact"
                        className="list-inline-item">
                        Contact
                    </Link>
                    <li className="list-inline-item">&sdot;</li>
                    <Link to="/TermsOfUse"
                        className="list-inline-item">
                        Terms of Use
                    </Link>
                    <li className="list-inline-item">&sdot;</li>
                    <Link to="/PrivacyPolicy"
                        className="list-inline-item">
                        Privacy Policy
                    </Link>
                  </ul>
                  <p className="text-muted small mb-0 mb-lg-0">&copy; VirtArtality 2020. All Rights Reserved.</p>
                </div>
                <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item mr-3">
                        <i className="fab fa-facebook fa-2x fa-fw"></i>
                    </li>
                    <li className="list-inline-item mr-3">
                        <i className="fab fa-twitter-square fa-2x fa-fw"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-instagram fa-2x fa-fw"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
    );
}

export default Footer;