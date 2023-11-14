// src/pages/Home.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { IonContent, IonRow, IonPage, IonInput, IonButton, IonLabel } from '@ionic/react';
import { validate } from '../services/user_service';

const Login: React.FC = () => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //alert(`Inicio de sesión exitoso. User: ${user}, Contraseña: ${password}`);
    validate(user, password)
      .then(data => {
        console.log(data)
      }).catch(
        error => {
          console.log(error)
      });
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonRow className="ion-justify-content-center title">
          {/* La clase 'ion-justify-content-center' centra el contenido horizontalmente */}
          <IonLabel>
            Bienvenido
          </IonLabel>
        </IonRow>

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
          expand="full" 
          className="btn" 
          onClick={handleLogin}
        >
          Iniciar Sesión
        </IonButton>
      </IonContent>
    </IonPage>
  )
};

export default Login;