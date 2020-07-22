import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';


const Card = (prop) => {

  const [globalState, setGlobalState] = useContext(AppContext);

    let cardTitle;
  const makePurchase = () => {
    //console.log(inputField.value)
    alert(cardTitle.innerText);
    }



    return(
      <div>

      {
        globalState.loggedIn === true &&
        <div className="card" style={{width: "18rem"}}>
          <img 
          src={prop.image}
          className="card-img-top"
          alt={prop.title}
          />

          <div className="card-body">
            <h5 ref={ (comp)=> cardTitle = comp}
            className="card-title">{prop.title}</h5>
            <p className="card-text">{prop.description}</p>
            <a href={prop.buttonLink}
               className="btn btn-primary"
               onClick={makePurchase}>
               {prop.buttonLabel}
               </a>
               
          </div>
        </div>
      }

      {
        globalState.loggedIn === false &&
        <div className="card" style={{width: "18rem"}}>
          <img 
          src={prop.image}
          className="card-img-top"
          alt={prop.title}
          />

          <div className="card-body">
            <h5 ref={ (comp)=> cardTitle = comp}
            className="card-title">{prop.title}</h5>
            <p className="card-text">{prop.description}</p>
          </div>
        </div>
      }
      </div>
    );
}

export default Card;

