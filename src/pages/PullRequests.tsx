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
import './PullRequests.css';
import { RouteComponentProps, useRouteMatch } from 'react-router';
import api from './../services/api';

interface PullRequestsPageProps
  extends RouteComponentProps<{
    repo: string;
  }> {}

interface Params {
  repoName: string;
  repoId: number;
  repoOwner: string;
}

interface PullRequest {
  title: string;
  id: number;
  state: string;
}

const PullRequests: React.FC = () => {
  const route = useRouteMatch();
  const routeParams = route.params as Params;
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);

  routeParams.repoName = 'app-ideas';
  routeParams.repoId = 0;
  routeParams.repoOwner = 'florinpop17';

  useEffect(() => {
    console.log('Lista de Pulls');
    console.log(pullRequests);
  }, [pullRequests]);

  useEffect(() => {
    async function getPulls() {
      const response = await api.get(
        `/repos/${routeParams.repoOwner}/${routeParams.repoName}/pulls`
      );
      console.log(response.data);
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
                <h1>Repo: {routeParams.repoName}</h1>
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
