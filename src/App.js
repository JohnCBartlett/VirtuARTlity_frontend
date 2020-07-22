import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppContext from './AppContext';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import WhoWeArePage from './WhoWeArePage';
import WhatWeDoPage from './WhatWeDoPage';
import WhyWeDoItPage from './WhyWeDoItPage';
import SettingsPage from './SettingsPage';
import GalleryPage from './GalleryPage';
import AdminPage from './AdminPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrivateRoute = ({ component: Component, ...otherProps }) => {

    const [globalState, setGlobalState] = useContext(AppContext);

    if(globalState.loggedIn) {
      return(<Route component={Component} {...otherProps} />);
    } else {
      return(<Redirect to="/login" />);
    }
}

const App = () => {

  const [globalState, setGlobalState] = useState({
    loggedIn: localStorage.getItem('jwt') ? true : false,
    email: null,
    user: null
  });

  useEffect(
    ()=>{
        // when (and if) globalState.loggedIn changes,
        // run the below code
        console.log("This the loggedIn state", globalState.loggedIn)
    }, 
    [globalState.loggedIn]
  )

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={LandingPage}/>
          <Route path="/login" exact={true} component={LoginPage}/>
          <Route path="/overview/whoweare" exact={true} component={WhoWeArePage}/>
          <Route path="/overview/whatWeDo" exact={true} component={WhatWeDoPage}/>
          <Route path="/overview/whyWeDoIt" exact={true} component={WhyWeDoItPage}/>
          <Route path="/gallery" exact={true} component={GalleryPage}/>
          <Route path="/register" exact={true} component={RegistrationPage}/>
          <Route path="/settings" exact={true} component={SettingsPage}/>
          <PrivateRoute path="/admin" exact={true} component={AdminPage}/>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}


export default App;