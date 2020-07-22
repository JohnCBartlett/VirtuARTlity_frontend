import React, { useContext, useEffect, useState } from 'react';
import Jumbotron from './Jumbotron.js';
import AppContext from './AppContext';
import NavBar from './NavBar.js';
import Card from './Card.js';

const GalleryPage = () => {

    const [globalState, setGlobalState] = useContext(AppContext);
    const [state, setState] = useState({ products: []})
      
        useEffect(
          () => {
            // only fetch products if and when the user logs in
//            if(globalState.loggedIn === true) {
              fetch(`${process.env.REACT_APP_API_URL}products`)
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
//          [ globalState.loggedIn ]
        )
      
    return (
      <div>

        <NavBar />

        <Jumbotron 
          title="Welcome to our Gallery" 
          description="Please scroll through the exhibition......"
        >

        <div className="row">
          {
            globalState.loggedIn === true &&
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

          {
            globalState.loggedIn === false &&
            state.products.map(
                (product)=>
                  <div className="col-lg-4 col-sm-6">
                    <Card
                      title={product.title}
                      description={product.description}
                      image={product.image}
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
