import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  const handleClick = (event) => {
    const target = event.target;

    switch (target.nodeName) {
      case 'I':
        target.parentNode.parentNode.parentNode.classList.toggle('hide');
        break;
      case 'A':
        target.parentNode.parentNode.parentNode.parentNode.classList.toggle(
          'hide'
        );
        break;
      case 'DIV':
        target.parentNode.classList.toggle('hide');
        break;
      default:
        console.log('Triggered default case somehow!?');
    }
  };

  return (
    <div className="navbar-container hide">
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
          {user.isAdmin && <li>
            <Link to="/posts/new" onClick={handleClick}>
              New Post
            </Link>
          </li>}
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
          <li>
            <Link to="/logout" onClick={handleClick}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
      <div className="background-filter" onClick={handleClick}></div>
    </div>
  );
};

export default Navbar;
