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
  useIonViewWillLeave,
} from '@ionic/react';
import { person } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import './Login.css';
import { getUser, setUser } from './../../storage/saveUser';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const history = useHistory();
  useIonViewWillEnter(() => {
    (async () => {
      const result = await getUser();
      if (result.value !== '') {
        history.push(`/Home/${result.value}`);
      }
    })();
  });

  function onClickLogin() {
    (async () => {
      await setUser(username);
      history.push(`/Home/${username}`);
    })();
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
          <IonButton class='btn-login' onClick={onClickLogin}>
            Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
