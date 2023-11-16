import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonRow, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/sign_in.css';

const SignIn: React.FC = () => {
  useEffect(() => {
    console.log("SIGN IN");
  }, []);

  return (
    <IonPage>
      <IonContent 
        className="ion-padding">
        <IonRow 
          className="ion-justify-content-center">
            <p>SignIn</p>
            <Link to="/">Ir a Home</Link><br></br><br></br>
            <Link to="/reset-password">Ir a Reset Password</Link>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
