import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';

const Routes = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path='/Login' component={Login} exact={true} />
        <Route exact path='/' render={() => <Redirect to='/Login' />} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;
