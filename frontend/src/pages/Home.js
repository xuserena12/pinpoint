import { useEffect, useState } from 'react';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
  const [destinations, setDestinations] = useState([]);

useEffect(() => {
  fetch("/api")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setDestinations(data);
  });
}, []);

return (
  <div className="bg-main">
    <div className="center-container">
      {/* { destinations && destinations.length > 0 ? destinations.map((destination) => (
        <div>{destination.country}</div>
      )) : 
    <div>
      nothing here sad
    </div>  
    } */}
      <div className="outer-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  </div>
  );
}

export default Home;