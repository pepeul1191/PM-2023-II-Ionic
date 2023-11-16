import { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
    console.log(localStorage.getItem('userId'))
    console.log(localStorage.getItem('memberId'))
    if(
      localStorage.getItem('userId') == null || localStorage.getItem('memberId') == null
    ){
      console.log("2 +++++++++++++++++++++++++++++++++++++++++");
      history.push('/login');
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
      <Link to="/reset-password">Ir a Reset Password</Link><br></br><br></br>
      <Link to="/sign-in">Ir a Sign In</Link>
    </div>
  );
};

export default Home;
