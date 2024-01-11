import { Link } from 'react-router-dom';
import './Banner.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Banner = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  }

  return (
    <div className="banner">
      <div className="name">Pinpoint</div>
      <div>
        { user && (
            <div>
              <span>{user.email}</span>
              <button className="logout-btn" onClick={handleClick}>Logout</button>
            </div>
          )}
      </div>
    </div>
  );
}

export default Banner;