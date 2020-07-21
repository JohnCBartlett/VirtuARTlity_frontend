import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsletterForm = () => {

    const [state, setState] = useState(
        {
            registered: false
        }
    )

    // 1. Create a variable reserved for the input field
    let inputField;
    // 2. Assign the variable to the input component
    // 3. Upon onClick event, alert the contents of the input field

    const registerEmail = () => {
        //console.log(inputField.value)
        fetch(`${process.env.REACT_APP_API_URL}emails/register`, 
            {
                method: 'POST',
                body: JSON.stringify({email: inputField.value}),
                headers: {"Content-Type": "application/json"}
            }
        )
        .then(
            (result) => result.json()
        )
        .then (
            (json) => {
                console.log('response from backend', json)
                setState(
                    {
                        registered: true
                    }
                )
            }

        )
    }

    return (
        <div>
          <header className="masthead text-white text-center">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <h3 className="mb-5"><br/>Welcome to the Middle East's virtual art gallery for artists and connoisseurs</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <h3 className="mb-5">  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <h5 className="mb-3">Register to contribute to the gallery, receive our newsletter, access our members only area or make purchases</h5>
                </div>
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <form>
                    <div className="form-row">
                      <div className="col-12 col-md-9 mb-2 mb-md-0">
                        <input type="text" 
                            id="the-field"
                            className="form-control form-control-lg" 
                            placeholder="Enter your email..." 
                            aria-label="Enter your email..." 
                            aria-describedby="button-addon2" 
                            ref={ 
                                (comp) => inputField = comp
                            }
                        />
                      </div>
                      <div className="col-12 col-md-3">
                        <Link
                          to="/Register"
                          className="btn btn-outline-secondarybtn btn-block btn-lg btn-primary">
                          Register
                        </Link>
                        {
                            state.registered &&
                            <div className="alert alert-success" role="alert">
                            Congratulations! You are successfully registered.
                            </div>
                        }
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </header>
        </div>
    )
};

export default NewsletterForm;