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
  IonLoading,
  IonIcon,
  useIonViewWillEnter,
} from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';
import { RouteComponentProps, useHistory } from 'react-router';
import IUser from './../../models/User';
import IRepository from '../../models/Repository';
import { exit } from 'ionicons/icons';
import { removeUser } from './../../storage/saveUser';
import HomeController from './../../controllers/HomeController';

interface HomePageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Home: React.FC<HomePageProps> = ({ match }) => {
  const history = useHistory();

  const [user, setUser] = useState<IUser>({} as IUser);
  const [repos, setRepos] = useState<IRepository[]>([]);
  const [showLoading, setShowLoading] = useState(true);

  useIonViewWillEnter(() => {
    HomeController.getInstance().loadData(
      match.params.id,
      setUser,
      setRepos,
      setShowLoading,
      history
    );
  });

  return (
    <IonPage className='ion-padding'>
      <IonLoading
        cssClass='loading'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Loading Repositories...'}
      />
      <IonHeader>
        <IonItem>
          <IonGrid>
            <IonRow class='user'>
              <IonCol>
                <IonItem
                  button
                  onClick={(e) => {
                    e.preventDefault();
                    (async () => {
                      await removeUser();
                      history.goBack();
                    })();
                  }}
                >
                  <IonIcon icon={exit} />
                </IonItem>
              </IonCol>
              <IonCol>
                <h1>{user.name ? user.name : user.login}</h1>
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
