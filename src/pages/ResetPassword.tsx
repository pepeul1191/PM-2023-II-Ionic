import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonRow, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/reset_password.css';

const ResetPassword: React.FC = () => {
  useEffect(() => {
    console.log("RESET PASSWORD");
  }, []);

  return (
    <IonPage>
      <IonContent 
        className="ion-padding">
        <IonRow 
          className="ion-justify-content-center">
            <p>Reset Password</p>
            <Link to="/">Ir a Home</Link><br></br><br></br>
            <Link to="/sign-in">Ir a Sign In</Link>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ResetPassword;
