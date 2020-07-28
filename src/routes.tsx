import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import PullRequests from './pages/PullRequests';

const Routes = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path='/Login' component={Login} />
        <Route exact path='/' render={() => <Redirect to='/Login' />} />
        <Route exact path='/PullRequests' component={PullRequests} />
        <Route exact path='/Home/:id' component={Home} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;
