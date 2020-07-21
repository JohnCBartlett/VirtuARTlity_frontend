import React from 'react';
import Jumbotron from './Jumbotron.js';
import NavBar from './NavBar.js';

const WhatWeDoPage = () => {
    return (

        <div>

            <NavBar />
            
            <Jumbotron 

            title="What we do" 
            description="VirtuArtlity is a free platform, where Artists can register and exhibit and sell their artwork, develop their
             skills by receiving constructive feedback and tips from the community of like-minded Artists.">
            <div className="lead"><p>
            At the same time VirtuArtlity is a platform for Art Lovers to interact with the artists, learn about Art in general and, of course,
             purchase the Artworks that move them the most. We are a community first, a marketplace - second. We treat Art & Talent with respect and
             appreciation. Our concept is similar to Virtual "Vernissage" rather than Virtual Museum. Here you can not only look, learn about the Art,
             but also interact directly with the Artist. This gives a rare opportunity to Art Lovers to learn about the story of the Artist and the
              ideas reflected in their Artworks and Art in general.<br/><br/>

              We believe that this open, cooperative approach will promote Art & Culture in the Middle East.</p>
               </div>
            
            </Jumbotron>

        </div>
    );
}

export default WhatWeDoPage;

 

