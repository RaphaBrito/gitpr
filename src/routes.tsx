import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PullRequests from './pages/PullRequests/PullRequests';
import { getUser } from './storage/saveUser';

const Routes = () => {
  let userPath = '/Login';
  (async () => {
    const result = await getUser();
    if (result.value) {
      userPath = '/Home/' + result.value;
    }
  })();
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/' render={() => <Redirect to={userPath} />} />
        <Route exact path='/PullRequests' component={PullRequests} />
        <Route exact path='/Home/:id' component={Home} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;
