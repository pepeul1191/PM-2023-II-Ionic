// src/pages/Home.tsx

import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/login.css';
import { IonContent, IonRow, IonPage, IonInput, IonButton, IonLabel, IonCol, useIonViewWillLeave } from '@ionic/react';
import { validate } from '../services/UserService';
import LogoSVG from '../assets/svg/logo.svg';
import { IonIcon } from '@ionic/react';
import { HTTPStdResponse } from '../interfaces/HttpStdResponse'; 
import { search } from "ionicons/icons";

const Login: React.FC = () => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    console.log("LOGIN");
    console.log("1 +++++++++++++++++++++++++++++++++++++++++");
    console.log(localStorage.getItem('userId'))
    console.log(localStorage.getItem('memberId'))
    if(
      localStorage.getItem('userId') != null && localStorage.getItem('memberId') != null
    ){
      history.push('/');
    }
  }, []);

  const handleLogin = () => {
    //alert(`Inicio de sesión exitoso. User: ${user}, Contraseña: ${password}`);
    validate(user, password)
      .then((data: HTTPStdResponse) => {
        if(data.success){
          var userInfo = JSON.parse(data.data);
          console.log(userInfo);
          localStorage.setItem('userId', userInfo.user_id);
          localStorage.setItem('memberId', userInfo.member_id);
          console.log(localStorage);
          console.log('1 +++++++++++++++++++++++++++++++++++');
          history.push('/');
          console.log(' +++++++++++++++++++++++++++++++++++');
        }else{
          alert('usuario y/o contraseña no existen')
        }
      }).catch(
        error => {
          history.push('/sign-in');
          console.log(error)
      });
  };

  const handleHome = () => {
    history.replace('/');     
  };

  return (
    <IonPage>
      <IonContent 
        className="ion-padding">
        <IonRow 
          className="ion-justify-content-center">
            <IonIcon src={LogoSVG} className='logo'/>
        </IonRow>
        <IonRow 
          className="ion-justify-content-center title">
          {/* La clase 'ion-justify-content-center' centra el contenido horizontalmente */}
          <IonLabel>
            Bienvenido
          </IonLabel>
        </IonRow>
        <IonCol>
          <div className="ion-padding">
            <IonInput 
              label="Usuario"
              labelPlacement="floating"
              fill="outline"
              className="input" 
              value={user}
              placeholder="Ingrse su usuario"
              onIonChange={(e) => setUser(e.detail.value! as string)}
            />
            <IonInput 
              type="password"
              label="Contraseña"
              labelPlacement="floating"
              className="input" 
              fill="outline"
              value={password}
              placeholder="Ingrse su contraseña"
              onIonChange={(e) => setPassword(e.detail.value! as string)}
            />
            <IonButton 
              expand="block" 
              className="btn" 
              fill="outline"
              onClick={handleLogin}>
              <span>Iniciar Sesión</span>
            </IonButton>
            <IonButton 
              expand="block" 
              className="btn" 
              fill="outline"
              onClick={handleHome}>
              <span>Ir a Home</span>
            </IonButton>
          </div>
          </IonCol>
      </IonContent>
    </IonPage>
  )
};

export default Login;