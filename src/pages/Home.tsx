import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [memberId, setMemberId] = useState('');

  useEffect(() => {
    // Cuando el componente se monta, intenta recuperar datos de localStorage
    const storedUserId = localStorage.getItem('userId');
    const storedMemberId = localStorage.getItem('memberId');
    console.log(localStorage)
    // Actualiza el estado con los datos recuperados
    if (storedUserId) {
      setUserId(storedUserId);
    }
    if (storedMemberId) {
      setMemberId(storedMemberId);
    }
  }, []);

  const handleClick = () => {
    console.log('Texto clicado!');
    // Puedes realizar otras acciones aquí
  };

  return (
    <div>
      <h1 onClick={handleClick}>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <p>UserId : {userId}</p>
      <p>MemberId : {memberId}</p>
      <Link to="/login">Ir a Login</Link>
    </div>
  );
};

export default Home;
