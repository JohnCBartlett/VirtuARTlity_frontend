import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, useRouteMatch, useParams } from 'react-router-dom';
import NavBar from './NavBar.js';
import WhoWeArePage from './WhoWeArePage.js';
import WhatWeDoPage from './WhatWeDoPage.js';
import WhyWeDoItPage from './WhyWeDoItPage.js';

const OverviewPage = () => {

    var match = useRouteMatch();

    return (
              <BrowserRouter>
                <NavBar />
                <Switch>
                  <Route path="overview/whoweare" exact={true} component={WhoWeArePage}/>
                  <Route path="/WhatWeDo" exact={true} component={WhatWeDoPage}/>
                  <Route path="/WhyWeDoIt" exact={true} component={WhyWeDoItPage}/>
                </Switch>
              </BrowserRouter>

    );
}

export default OverviewPage;
