import './InputForm.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";


const InputForm = () => {
  const [destination, setDestination] = useState({
    city: "",
    country: "",
    rating: "",
    date: "",
    image: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
  };

  const handleChange = (e) => {
    console.log("changed!");
    console.log(e.target.name);
    console.log(e.target.value);
    setDestination({ ...destination, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
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
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default InputForm;