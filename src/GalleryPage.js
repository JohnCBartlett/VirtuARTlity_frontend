import React, { useContext, useEffect, useState } from 'react';
import Jumbotron from './Jumbotron.js';
import NavBar from './NavBar.js';
import Card from './Card.js';

const GalleryPage = () => {

        const [state, setState] = useState({ products: []})
      
        useEffect(
          () => {
            // only fetch products if and when the user logs in
//            if(globalState.loggedIn === true) {
              fetch(`${process.env.REACT_APP_API_URL}8080/products`)
              .then(
                (result)=>result.json()
              )
              .then (
                (json)=> {
                  setState(
                    {
                      ...state,
                      products: json.products
                    }
                  )
                }

              );
//            }
          },
        )
      
    return (
      <div>

        <NavBar />

        <Jumbotron 
          title="Featured Artists" 
          description="Check out these local and regional artists......"
        >

        <div className="row">
          {
            state.products.map(
              (product)=>
                <div className="col-lg-4 col-sm-6">
                  <Card
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    buttonLabel="Buy"
                    buttonLink="#"
                  />
                </div>
            )
          }

          </div>
        </Jumbotron>

      </div>
      );
}

export default GalleryPage;