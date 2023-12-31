import './Card.css';

const Card = ( { destination } ) => {
  const handleDelete = async () => {
    console.log(destination._id);
    console.log("this item has been deleted :)");
    try {
      const response = await fetch(`/home/${destination._id}`, {
        method: 'DELETE',
      });
      
      const json = await response.json()
  
      if (!response.ok) {
        throw new Error('Response was not ok');
      }
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="polaroid">
        <div className="image-container">
          <div className="image"></div>
        </div>
        <p className="city">
          {destination.city}
        </p>
      </div>
      <button className="edit">Edit</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Card;