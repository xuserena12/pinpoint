import './InputForm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [destination, setDestination] = useState({
    city: "",
    country: "",
    rating: "",
    date: "",
    image: ""
  });

  const handleChange = (e) => {
    console.log("changed!");
    console.log(e.target.name);
    console.log(destination);

    setDestination({ ...destination, [e.target.name]: e.target.value });
    console.log(destination);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log("submitted!");
  //   console.log(destination);
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/home', destination);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
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