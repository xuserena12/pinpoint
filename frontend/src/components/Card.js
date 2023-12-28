import './Card.css';

const Card = ( { location, date, rating, blurb, image } ) => {
  return (
    <div>
      <div className="polaroid">
        <div className="image-container"></div>
      </div>
      <button className="edit">Edit</button>
      <button className="delete">Delete</button>
    </div>
  );
}

export default Card;