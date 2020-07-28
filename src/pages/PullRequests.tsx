import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonItem,
  IonList,
  IonLabel,
} from '@ionic/react';
import React from 'react';
import './PullRequests.css';
import { RouteComponentProps } from 'react-router';
interface PullRequestsPageProps
  extends RouteComponentProps<{
    repo: string;
  }> {}

const PullRequests: React.FC<PullRequestsPageProps> = ({ match }) => {
  return (
    <IonPage className='ion-padding'>
      <IonHeader>
        <IonItem>
          <IonGrid>
            <IonRow class='user'>
              <IonCol>
                <h1>Repo: {match.params.repo}</h1>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          <IonItem>
            <IonLabel>Details of the Pull Request</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Details of the Pull Request</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Details of the Pull Request</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Details of the Pull Request</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Details of the Pull Request</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PullRequests;
