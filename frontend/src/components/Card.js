import './Card.css';
import { useAuthContext } from '../hooks/useAuthContext';

const Card = ( { destination } ) => {
  const { user } = useAuthContext();

  const handleDelete = async () => {

    if (!user) {
      return;
    }

    console.log(destination._id);
    console.log("this item has been deleted :)");
    try {
      const response = await fetch(`/home/${destination._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
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
          <i>
            {destination.city}, {destination.country}
          </i>
        </p>
        <p>
          Rating: {destination.rating}
        </p>
      </div>
      <button className="edit">Edit</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Card;