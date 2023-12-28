import './InputForm.css';
import { useState, useEffect } from 'react';

const InputForm = () => {
  const [destination, setDestination] = useState({
    city: "",
    country: "",
    rating: "",
    date: "",
    image: ""
  });

  const handleSubmit = () => {
    console.log("Submitted!");
  };

  return (
    <div>
      <form>
        <ul>
          <li>
            <input type="text" id="name" placeholder="Country" />
          </li>
          <li>
            <input type="text" id="city" placeholder="City" />
          </li>
          <li>
            <input type="number" min="0" max="5" id="rating" placeholder="Rating" />
          </li>
          <li>
            <input type="date" id="date" />
          </li>
        </ul>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
}

export default InputForm;