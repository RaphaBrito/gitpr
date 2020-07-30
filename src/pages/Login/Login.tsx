import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonImg,
  IonItem,
  IonLabel,
  IonIcon,
  useIonViewWillEnter,
} from '@ionic/react';
import { person } from 'ionicons/icons';
import React, { useState } from 'react';
import './Login.css';
import LoginController from '../../controllers/LoginController';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const history = useHistory();

  useIonViewWillEnter(() => {
    LoginController.getInstance().checkIsSavedUser(history);
  });

  function handleOnClickLogin() {
    LoginController.getInstance().checkIsValidUser(username, history);
  }

  return (
    <IonPage>
      <IonContent class='ion-padding'>
        <IonImg class='img ' src={require('./../../assets/icon.png')} />
        <div className='text'>
          <h2>Proceed with your</h2>
          <h1>Login</h1>
        </div>
        <IonItem class='label'>
          <IonIcon icon={person} />
          <IonLabel> GitHub Username: </IonLabel>
          <IonInput
            class='input'
            onIonChange={(e) => setUsername(e.detail.value!)}
            type='text'
          ></IonInput>
        </IonItem>
        <div className='div-btn-login'>
          <IonButton class='btn-login' onClick={handleOnClickLogin}>
            Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
