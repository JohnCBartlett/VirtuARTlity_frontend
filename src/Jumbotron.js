import React from 'react';

function Jumbotron(prop) {
    return (
      <div>
         <div className="jumbotron jumbotron-fluid">
            <div className="container">

            <h1 className="display-4">{prop.title}</h1>
            <p className="lead">{prop.description}</p>
            {prop.children}
            </div>
         </div>
      </div>
      );
}

export default Jumbotron;