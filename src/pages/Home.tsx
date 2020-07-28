import {
  IonContent,
  IonPage,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonList,
  IonLabel,
  IonHeader,
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
    <IonPage className='ion-padding'>
      <IonHeader>
        <IonItem>
          <IonGrid>
            <IonRow class='user'>
              <IonCol>
                <h1>{match.params.id}</h1>
              </IonCol>
              <IonCol>
                <IonImg
                  class='user-img'
                  src={'https://avatars0.githubusercontent.com/u/12904326?v=4'}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          <IonItem button routerLink={'/PullRequests/Robocin'} detail>
            <IonLabel>Button Item with Detail Arrow</IonLabel>
          </IonItem>
          <IonItem button routerLink={'/PullRequests/Robocin'} detail>
            <IonLabel>Button Item with Detail Arrow</IonLabel>
          </IonItem>
          <IonItem button routerLink={'/PullRequests/Robocin'} detail>
            <IonLabel>Button Item with Detail Arrow</IonLabel>
          </IonItem>
          <IonItem button routerLink={'/PullRequests/Robocin'} detail>
            <IonLabel>Button Item with Detail Arrow</IonLabel>
          </IonItem>
          <IonItem button routerLink={'/PullRequests/Robocin'} detail>
            <IonLabel>Button Item with Detail Arrow</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
