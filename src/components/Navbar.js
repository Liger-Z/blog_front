import { Link } from 'react-router-dom';

const Navbar = ({ user, setShowNav }) => {
  const handleClick = () => {
    setShowNav(false);
  };

  return (
    <div className="navbar-container">
      <nav id="navbar">
        <button>
          <i className="las la-bars" onClick={handleClick}></i>
        </button>
        <ul>
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          {user.username && (
            <li>
              <Link to="/">{user.username}</Link>
            </li>
          )}
          {user.isAdmin && (
            <li>
              <Link to="/posts/new" onClick={handleClick}>
                New Post
              </Link>
            </li>
          )}
          {!user.username && (
            <li>
              <Link to="/login" onClick={handleClick}>
                Login
              </Link>
            </li>
          )}
          {!user.username && (
            <li>
              <Link to="/signup" onClick={handleClick}>
                Sign-Up
              </Link>
            </li>
          )}
          {user.username && (
            <li>
              <Link to="/logout" onClick={handleClick}>
                Log Out
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div className="background-filter" onClick={handleClick}></div>
    </div>
  );
};

export default Navbar;
