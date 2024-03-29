import './InputForm.css';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';


const InputForm = ( ) => {
  const { user } = useAuthContext();

  const userId = localStorage.getItem('id');

  const [destination, setDestination] = useState({
    city: "",
    country: "",
    rating: "",
    date: "",
    id: user.id,
  });


  const handleChange = (e) => {
    setDestination({ ...destination, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.log('You must be logged in');
      return;
    }
    
    try {
      const response = await fetch('/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(destination),
      })
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
      console.log( data);

      // reset to empty string
      setDestination({
        city: "",
        country: "",
        rating: "",
        date: "",
        user_id: ","
      });
    } catch (error) {
      console.error(error.message);
    }
  };


    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            value={destination.country}
            onChange={handleChange}
            />
          </li>
          <li>
            <input
            type="text"
            id="city"
            name="city"
            placeholder="City" 
            value={destination.city}
            onChange={handleChange}
            />
          </li>
          <li>
            <input
            type="number"
            min="0"
            max="5"
            id="rating"
            name="rating"
            placeholder="Rating"
            value={destination.rating}
            onChange={handleChange}
            />
          </li>
          <li>
            <input
            type="date"
            id="date"
            name="date"
            value={destination.date}
            onChange={handleChange}
            />
          </li>
        </ul>
        <button
        className="add-btn"
        type="submit"
        >Add
        </button>
      </form>
    </div>
  );
}

export default InputForm;