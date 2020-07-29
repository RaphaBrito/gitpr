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
  useIonViewDidEnter,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './PullRequests.css';
import { getPullRequests } from './../../services/index';
import IPullRequest from './../../models/PullRequest';

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

  useIonViewDidEnter(() => {
    setShowLoading(false);
  });

  useEffect(() => {
    (async () => {
      const result = await getPullRequests(routeParams.owner, routeParams.name);
      setPullRequests(result);
    })();
  }, []);

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
