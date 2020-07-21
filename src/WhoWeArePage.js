import React from 'react';
import Jumbotron from './Jumbotron.js';
import NavBar from './NavBar.js';

const WhoWeArePage = () => {
    return (

        <div>

            <NavBar />
            
            <Jumbotron 

            title="Who we are" 
            description="VirtuArtlity is a community of Artists & Art Lovers united aimed to Advance Art & Culture in the Middle East.">
            <div className="lead"><p>The project was initiated by a Belgian exhibited Artist - Anna Lobanova, who holds Master's of Fine Arts from Academy
            of Art University in San Francisco. Anna has been exhibiting in Brussels on several occasions, including few Solo exhibitions
             & a showing at the local House of Artists.<br/><br/>
            Anna has relocated to the Middle East in 2015, but did not abandon her passion for Art. She soon discovered that Art
              & Culture in the Middle East are developing at a rapid pace. With the opening of Louvre in Abu Dhabi & regular cultural events in Sharjah,
               the Art scene is becoming more and more vibrant. Dubai in particular, being a big international hub inhabited by over 100 different
                nationalities, offers a vast supply of really diverse talent.<br/><br/>
            This versatility and multicultural environment are a perfect ground for an Artist to blossom. VirtuArtlity wants
             to give an opportunity for classically trained artists from all backgrounds to showcase their work and grow together.
              It also aims to allow access to original & approachable works of Art for all those Art lovers, that are surely abundant in the
               Middle East.</p>
               </div>
            
            </Jumbotron>

        </div>
    );
}

export default WhoWeArePage;
