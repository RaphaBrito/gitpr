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
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './PullRequests.css';
import api from './../../services/api';

interface Params {
  name: string;
  id: number;
  owner: string;
}

interface PullRequest {
  title: string;
  id: number;
  state: string;
}

const PullRequests: React.FC = () => {
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const location = useLocation();
  const routeParams = location.state as Params;

  useEffect(() => {
    async function getPulls() {
      const response = await api.get(
        `/repos/${routeParams.owner}/${routeParams.name}/pulls`
      );
      setPullRequests(
        response.data.map((pull: any) => {
          return {
            title: pull.title,
            id: pull.id,
            state: pull.state,
          };
        })
      );
    }
    getPulls();
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
      </IonContent>
    </IonPage>
  );
};

export default PullRequests;
