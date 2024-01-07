import { useEffect, useState } from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
import { useAuthContext } from '../hooks/useAuthContext';
import './Home.css';

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const { user } = useAuthContext();

  const userId = localStorage.getItem('id');
  console.log(userId);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const response = await fetch(`/home?userId=${user.id}`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log(data);
        setDestinations(data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    if (user) {
      getDestinations();
    }
  }, [destinations, user]);


return (
  <div className="bg-main">
    <h1 className="title">~ Pin your memory here ~</h1>
    <div className="center-container">
      <div className="first-container">
        <div className="split">
          <InputForm />
        </div>
        <div className="split">
        </div>
      </div>
    </div>
    <div className="center-container">
      <div className="second-container">
      { destinations && destinations.length > 0 ? destinations.map((destination) => (
        <Card destination={destination}/>
      )) : 
        <div>
          nothing here sad
        </div>  
      }
      </div>
    </div>
  </div>
  );
}

export default Home;