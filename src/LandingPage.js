import React from 'react';
import Jumbotron from './Jumbotron.js';
import NavBar from './NavBar.js';
import Testimonials from './Testimonials.js';
import CallToAction from './CallToAction.js';
import Footer from './Footer.js';
import NewsletterForm from './NewsletterForm.js';
import LandingIcons from './LandingIcons.js';
import Showcase from './Showcase.js';


const LandingPage = () => {

  return (
    <div>
        <NavBar />
          <NewsletterForm />
        <Jumbotron>

          <LandingIcons />
          <Showcase />
          <Testimonials />
          <CallToAction />
          <Footer />

        </Jumbotron>

    </div>
  );
}


export default LandingPage;