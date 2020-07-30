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
  IonLoading,
  useIonViewWillEnter,
} from '@ionic/react';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import './PullRequests.css';
import IPullRequest from './../../models/PullRequest';
import PullRequestsController from './../../controllers/PullRequestsController';

interface Params {
  name: string;
  id: number;
  owner: string;
}

const PullRequests: React.FC = () => {
  const location = useLocation();
  const routeParams = location.state as Params;

  const [pullRequests, setPullRequests] = useState<IPullRequest[]>([]);

  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {
    PullRequestsController.getInstance().loadData(
      routeParams.owner,
      routeParams.name,
      setPullRequests,
      setShowLoading
    );
  });

  return (
    <IonPage className='ion-padding'>
      <IonHeader>
        <IonItem>
          <IonGrid>
            <IonRow class='user'>
              <IonCol>
                <h1>{routeParams ? routeParams.name : ''}</h1>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonHeader>
      <IonContent className='ion-padding'>
        <div className='text'>
          <h1>Pull Requests</h1>
        </div>
        <IonList>
          {pullRequests.map((pull) => (
            <IonItem key={pull.id} class='item'>
              <IonLabel>{pull.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonLoading
          cssClass='loading'
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Loading Pull Requests...'}
        />
      </IonContent>
    </IonPage>
  );
};

export default PullRequests;
