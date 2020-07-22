import React, { useState } from 'react';

const CallToAction = () => {

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
        fetch(`${process.env.REACT_APP_API_URL}newsletter/register`, 
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
              <section className="call-to-action text-white text-center">
                <div className="overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-9 mx-auto">
                      <h2 className="mb-4">Sign up now to receive our specialist newsletter!</h2>
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
                                <button 
                                    className="btn btn-block btn-lg btn-primary" 
                                    type="button" 
                                    id="button-addon2"
                                    onClick={registerEmail}>
                                    Sign Up!
                                </button>
                            </div>

                        </div>
                        {
                            state.registered &&
                            <div className="alert alert-success" role="alert">
                            Congratulations! You are successfully registered.
                            </div>
                        }
                      </form>
                    </div>
                  </div>
                </div>
              </section>

        </div>
    )
};

export default CallToAction;