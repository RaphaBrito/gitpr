import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
} from '@ionic/react';
import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  return (
    <IonPage>
      <IonContent class='.ion-justify-content-start ion-padding'>
        <IonImg class='container' src={require('./../assets/icon.png')} />
        <div>
          <h3>Proceed with your</h3>
          <h1>Login</h1>
        </div>

        <IonGrid>
          <IonRow class='ion-justify-content-center'>
            <IonCol size='auto'>
              <IonItem>
                <IonLabel>GitHub Username: </IonLabel>
                <IonInput
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  type='text'
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow class='ion-justify-content-center'>
            <IonCol size='auto'>
              <IonButton routerLink={'/Home/' + username}>Login</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
