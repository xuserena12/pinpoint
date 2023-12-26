import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
const [backendData, setBackendData] = useState([]);

useEffect(() => {
  fetch("/api")
    .then(response => response.json())
    .then(data => {
      setBackendData(data.users); // Assuming data is an object with a 'users' array
      console.log(data);
    });
}, []);

  return (
  <div class="bg-main">
    <div class="center-container">
      hi
    </div>
  </div>
  );
}

export default Home;