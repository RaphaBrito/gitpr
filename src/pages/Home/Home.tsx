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
import { getUser, getRepos } from '../../services/index';
import IUser from './../../models/User';
import IRepository from '../../models/Repository';

interface HomePageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Home: React.FC<HomePageProps> = ({ match }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [repos, setRepos] = useState<IRepository[]>([]);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const result = await getUser(match.params.id);
      setUser(result);
    })();
  }, [match.params.id]);

  useEffect(() => {
    (async () => {
      const result = await getRepos(match.params.id);
      setRepos(result);
    })();
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
