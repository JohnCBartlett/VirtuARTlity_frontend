import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { validEmail, validPassword } from './Utils'; 
import NavBar from './NavBar.js';

const SettingsPage = () => {

    const [state, setState] = useState({ userSettings: []})

    // These will be assigned values by React
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let mPhoneField;
    let aPhoneField;
    let countryField;
    let cityField;

    const getSettings = () => {
            fetch(`${process.env.REACT_APP_API_URL}userSettings`)
                .then(
                    (result) => result.json()
                )
                .then (
                    (json) => {
                        setState(
                            {
                            ...state,
                            userSettings: json.userSettings
                            }
                        )
                    }
                )
        }          


    const updateUser = () => {

        let errors = 0;
        let messages = [];

        if(firstNameField.value.length < 1) {
            errors++;
            messages.push('Please enter a valid first name')
        }
        if(lastNameField.value.length < 1) {
            errors++;
            messages.push('Please enter a valid last name')
        }
        if(!validEmail(emailField.value)) {
            errors++;
            messages.push('Please enter a valid email')
        }
        if(!validPassword(passwordField.value)) {
            errors++;
            messages.push('Please enter a valid password')
        }

        // If user makes any mistake
        if(errors > 0) {
            setState(
                {
                    ...state,
                    errors: errors,
                    messages: messages,
                }
            )
            return;
        } 
        // If no mistake occurs, reset the errors
        else {
            setState(
                {
                    ...state,
                    errors: 0,
                    messages: [],
                    loading: true
                }
            )
        }

        fetch(`${process.env.REACT_APP_API_URL}users/update`, {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                email: emailField.value,
                mPhone: mPhoneField.value,
                aPhone: aPhoneField.value,
                country: countryField.value,
                city: cityField.value,
                password: passwordField.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (json)=> {
                const { message } = json;
                if(message === "User updated") {
                    //
                    setState(
                        {
                            ...state,
                            updated: true,
                            loading: false
                        }
                    )
                } else {
                    //alert("Please check all the fields");
                    setState(
                        {
                            loading: false
                        }
                    )
                }
            }
        )
    }

    // If the user is registered, redirect them
    if(state.updated === true) {
        return (<Redirect to="/"/>)
    }

    // Otherwise, show the registration form
    else

    return (
        <div>
            <NavBar />




            <div className="container-fluid">
                <div className="form-row"><br/><br/><br/></div>
                <div className="form-row justify-content-md-center">
                    <div class="col-md-auto"><h3>User Settings Form</h3><br/></div>
                </div>
                <div className="form-row justify-content-start">
                    <div className="col-2"></div>
                    <div className="col-md-4" style={{maxWidth: '400px', margin: '0 auto'}}>
                        
                            <div className="md-form form-group">
                                <label>First Name</label>
                                <input 
                                ref={(comp)=>firstNameField = comp}
                                type="text"
                                defaultValue={state.userSettings.firstName}
                                className="form-control" 
                                aria-describedby="firstName"/>
                            </div>
                    </div>
                    <div className="col-md-4" style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div className="md-form form-group">
                                <label>Last Name</label>
                                <input 
                                ref={(comp)=>lastNameField = comp}
                                type="text" className="form-control" 
                                aria-describedby="lastName"/>
                            </div>
                    </div>
                    <div className="col-2"></div>
                </div>
                        
                <div className="form-row justify-content-start">
                <div className="col-2"></div>
                    <div className="col-md-4" style={{maxWidth: '400px', margin: '0 auto'}}>
                        
                            <div className="md-form form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input 
                                ref={(comp)=>emailField = comp}
                                type="email" className="form-control" 
                                defaultValue={state.userSettings.email}
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"/>
            
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                    </div>
                    <div className="col-md-4" style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div className="md-form form-group">
                                <label>Password</label>
                                <input 
                                ref={(comp)=>passwordField = comp}
                                type="password" className="form-control" 
                                aria-describedby="password"/>
                            </div>
                    </div>
                    <div className="col-2"></div>
                </div>
                        
                <div className="form-row justify-content-md-center">
                </div>
                <div className="form-row justify-content-start">
                    <div className="col-2"></div>
                    <div className="col-md-4" style={{maxWidth: '400px', margin: '0 auto'}}>
                        
                            <div className="md-form form-group">
                                <label>Mobile Number</label>
                                <input 
                                ref={(comp)=>mPhoneField = comp}
                                type="text" 
                                className="form-control" 
                                aria-describedby="mPhone"/>
                            </div>
                    </div>
                    <div className="col-md-4" style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div className="md-form form-group">
                                <label>Alternate Phone Number</label>
                                <input 
                                ref={(comp)=>aPhoneField = comp}
                                type="text" className="form-control" 
                                aria-describedby="aPhone"/>
                            </div>
                    </div>
                    <div className="col-2"></div>
                </div>

                <div className="form-row justify-content-md-center">
                </div>
                <div className="form-row justify-content-start">
                    <div className="col-2"></div>
                    <div className="col-md-4" style={{maxWidth: '400px', margin: '0 auto'}}>

                            <div className="md-form form-group">
                                <label>Country</label>
                                <input 
                                ref={(comp)=>countryField = comp}
                                type="text" 
                                className="form-control" 
                                aria-describedby="country"/>
                            </div>
                    </div>
                    <div className="col-md-4" style={{maxWidth: '400px', margin: '0 auto'}}>
                            <div className="md-form form-group">
                                <label>City</label>
                                <input 
                                ref={(comp)=>cityField = comp}
                                type="text" className="form-control" 
                                aria-describedby="city"/>
                            </div>
                    </div>
                    <div className="col-2"></div>
                </div>

                <div className="form-row"><br/><br/></div>
                <div className="form-row justify-content-md-center">
                            <button
                            onClick={updateUser}
                            type="button"
                            className="btn btn-primary">Update
                            </button>
                            <br/><br/>

                            {
                             state.loading && 
                             <div className="loader">
                                <svg className="circular" viewBox="25 25 50 50">
                                    <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
                                </svg>
                            </div>
                            }

                            {
                                state.errors > 0 &&
                                <div class="alert alert-danger" role="alert">
                                    {
                                        state.messages.map(
                                            (message)=><p>{message}</p>
                                        )
                                    }
                                </div>
                            }
                </div>

            </div>

        </div>
    )
}

export default SettingsPage;