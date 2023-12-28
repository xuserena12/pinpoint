import './Card.css';

const Card = ( { location, date, rating, blurb, image } ) => {
  return (
    <div>
      <div className="polaroid">
        <div className="image-container"></div>
      </div>
      <div className="button-container">
        <button className="button">Edit</button>
        <button className="button">Delete</button>
      </div>
    </div>
  );
}

export default Card;