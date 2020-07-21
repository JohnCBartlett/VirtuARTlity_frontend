import React from 'react';

const Card = (prop) => {

    let cardTitle;
  const makePurchase = () => {
    //console.log(inputField.value)
    alert(cardTitle.innerText);
    }



    return(
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

    );
}

export default Card;

