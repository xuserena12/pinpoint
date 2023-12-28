import { useEffect, useState } from 'react';
import Card from '../components/Card';
import InputForm from '../components/InputForm';
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

      {/* { destinations && destinations.length > 0 ? destinations.map((destination) => (
        <div>{destination.country}</div>
      )) : 
    <div>
      nothing here sad
    </div>  
    } */}

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