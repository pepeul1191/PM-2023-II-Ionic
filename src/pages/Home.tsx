import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Link, useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [memberId, setMemberId] = useState('');
  const history = useHistory();

  useEffect(() => {
    console.log("HOME");
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
