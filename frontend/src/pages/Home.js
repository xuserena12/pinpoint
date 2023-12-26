import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {

  useEffect(() => {
    const getResources = async () => {
      const response = await fetch('/api/resources');
      const data = await response.json();
      console.log(data);
      return data;
    };
    
    getResources();
  }, [])
  
  return (
  <div class="bg-main">
    <div class="center-container">
      hi
    </div>
  </div>
  );
}

export default Home;