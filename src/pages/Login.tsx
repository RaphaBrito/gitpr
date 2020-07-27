import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonImg,
  IonThumbnail,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/react';
import React from 'react';
import './Login.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent class='.ion-justify-content-start ion-padding-start'>
        <IonImg class='container' src={require('./../assets/icon.png')} />
        <div>
          <h3>Proceed with your</h3>
          <h1>Login</h1>
        </div>

        <IonGrid>
          <IonRow class='ion-justify-content-center'>
            <IonCol size='auto'>
              <IonInput class='input' placeholder='GitHub Username'></IonInput>
              <IonIcon name='person' slot='end'></IonIcon>
            </IonCol>
          </IonRow>
          <IonRow class='ion-justify-content-center'>
            <IonCol size='auto'>
              <IonButton>Login</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
