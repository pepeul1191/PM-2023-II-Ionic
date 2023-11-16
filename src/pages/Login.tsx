// src/pages/Home.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { IonContent, IonRow, IonPage, IonInput, IonButton, IonLabel, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { validate } from '../services/user_service';
import LogoSVG from '../assets/svg/ic_ulima.svg';
import { IonIcon } from '@ionic/react';
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
      //history.push('/');
    }
  });

  const handleLogin = () => {
    history.push('/');
    //alert(`Inicio de sesión exitoso. User: ${user}, Contraseña: ${password}`);
    validate(user, password)
      .then(data => {
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
          console.log(error)
      });
  };

  return (
    <IonPage>
      <IonContent 
        className="ion-padding">
        <IonRow 
          className="ion-justify-content-center">
            <IonIcon src={search} className='logo' style={{fontSize:32, color: 'red'}}/>
        </IonRow>
        <IonRow 
          className="ion-justify-content-center title">
          {/* La clase 'ion-justify-content-center' centra el contenido horizontalmente */}
          <IonLabel>
            Bienvenido
          </IonLabel>
        </IonRow>
        <IonCol>
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
        </IonCol> 
        <br></br>
        <Link to="/home">Ir a Home</Link>
      </IonContent>
    </IonPage>
  )
};

export default Login;