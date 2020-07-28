import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/react';
import React from 'react';
import './Home.css';
import { RouteComponentProps } from 'react-router';

interface HomePageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Home: React.FC<HomePageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent class='.ion-justify-content-start ion-padding-start'>
        <IonImg class='container' src={require('./../assets/icon.png')} />
        <div>
          <h3>User: {match.params.id}</h3>
          <h1>Home</h1>
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
              <IonButton>Home</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
