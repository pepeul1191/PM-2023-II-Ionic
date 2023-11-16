import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/home.css';

const Home: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [memberId, setMemberId] = useState('');
  const history = useHistory();

  useEffect(() => {
    console.log("HOME");
    console.log("1 +++++++++++++++++++++++++++++++++++++++++");
    if(
      localStorage.getItem('userId') == null || localStorage.getItem('memberId') == null
    ){
      console.log("IF +++++++++++++++++++++++++++++++++++++++++");
      history.push('/login');
    }else{
      console.log("ELSE +++++++++++++++++++++++++++++++++++++++++");
      setUserId(localStorage.getItem('userId')!!);
      setMemberId(localStorage.getItem('memberId')!!);
    }
  }, []);

  const handleExit = () => {
    console.log("1 +++++++++++++++++++++++++++++++++++++++++");
    console.log(localStorage.getItem('userId'));
    console.log(localStorage.getItem('memberId'));
    localStorage.clear()
    console.log("2 +++++++++++++++++++++++++++++++++++++++++");
    console.log(localStorage.getItem('userId'));
    console.log(localStorage.getItem('memberId'));
    history.push('/login');
  };

  return (
    <IonPage>
      <IonContent 
        className="ion-padding">
          <h1>Home Page</h1>
          <p>Welcome to the Home page!</p>
          <p>UserId : {userId}</p>
          <p>MemberId : {memberId}</p>
          <IonButton 
            expand="block" 
            className="btn" 
            fill="outline"
            onClick={handleExit}>
            <span>Cerrar Sesión</span>
          </IonButton>
          <Link to="/reset-password">Ir a Reset Password</Link><br></br><br></br>
          <Link to="/sign-in">Ir a Sign In</Link>  
      </IonContent>
    </IonPage>
  );
};

export default Home;
