import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AppContext from './AppContext';

const NewsletterForm = () => {

    // Connected to globalState
    const [globalState, setGlobalState] = useContext(AppContext);

    const [state, setState] = useState(
        {
            toRegister: false
        }
    )

    const registration = () => {
      setGlobalState(
        {
            ...globalState,
            email: inputField.value
        }
      )
      setState({...state, toRegister: true})
    }



    // 1. Create a variable reserved for the input field
    let inputField;
 
    // If the user is registered, redirect them
    if(state.toRegister === true) {
      return (<Redirect to="/register"/>)
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
                  <h5 className="mb-3">Register to access our members only area so that you can contribute to the gallery, receive our newsletter or make purchases</h5>
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
                          onClick={registration}>
                          Register
                        </button>
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
