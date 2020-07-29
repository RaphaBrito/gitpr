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
import React, { useEffect, useState } from 'react';
import './Home.css';
import { RouteComponentProps, useHistory } from 'react-router';
import api from './../../services/api';

interface HomePageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

interface IUser {
  login: string;
  avatar_url: string;
  name: string;
}
interface IRepos {
  name: string;
  id: number;
  owner: string;
}

const Home: React.FC<HomePageProps> = ({ match }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [repos, setRepos] = useState<IRepos[]>([]);

  const history = useHistory();

  useEffect(() => {
    async function getUser() {
      const response = await api.get(`users/${match.params.id}`);
      const userObj: IUser = {
        login: response.data.login,
        avatar_url: response.data.avatar_url,
        name: response.data.name,
      };
      setUser(userObj);
    }

    getUser();
  }, [match.params.id]);

  useEffect(() => {
    async function getRepos() {
      const response = await api.get(`users/${match.params.id}/repos`);
      setRepos(
        response.data.map((repo: any) => {
          return {
            name: repo.name,
            id: repo.id,
            owner: repo.owner.login,
          };
        })
      );
    }
    getRepos();
  }, [user, match.params.id]);

  return (
    <IonPage className='ion-padding'>
      <IonHeader>
        <IonItem>
          <IonGrid>
            <IonRow class='user'>
              <IonCol>
                <h1>{user.name}</h1>
              </IonCol>
              <IonCol>
                <IonImg class='user-img' src={user.avatar_url} />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonHeader>
      <IonContent className='ion-padding'>
        <div className='text'>
          <h1>Repositories</h1>
        </div>
        <IonList>
          {repos.map((repo) => (
            <IonItem
              key={repo.id}
              class='item'
              button
              onClick={(e) => {
                e.preventDefault();
                history.push('/PullRequests', repo);
              }}
              detail
            >
              <IonLabel>{repo.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
