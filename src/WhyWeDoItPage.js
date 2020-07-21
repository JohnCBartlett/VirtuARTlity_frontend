import React from 'react';
import Jumbotron from './Jumbotron.js';
import NavBar from './NavBar.js';

const WhyWeDoItPage = () => {
    return (

        <div>

            <NavBar />
            
            <Jumbotron 

            title="Why we do it" 
            description="In the modern World, people need Art more than ever. Our pace of life and pressure to succeed lead has made Art - a luxury.">
            <div className="lead"><p>But it is Art that actually inspires people, teaches them and makes them well-rounded. We can never continue growing
                 as individuals without Hopes, Aspirations and Dreams. And that is what Art is about. We hope, to share this beautiful world with all those,
                  who need it. And of course, provide Artists an opportunity to Create by selling their artwork, getting inspired by others & improve.<br/><br/>
                We hope, you will enjoy the community spirit we have created! Welcome to the new reality - VirtuArtlity.</p>
               </div>
            
            </Jumbotron>

        </div>
    );
}

export default WhyWeDoItPage;
