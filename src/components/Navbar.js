import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleClick = (event) => {
    const target = event.target;
    console.log(target);
    switch (target.nodeName) {
      case 'I':
        target.parentNode.parentNode.parentNode.classList.toggle('hide');
        break;
      case 'A':
        target.parentNode.parentNode.parentNode.parentNode.classList.toggle(
          'hide'
        );
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
          <li>
            <Link to="/login" onClick={handleClick}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={handleClick}>
              Sign-Up
            </Link>
          </li>
        </ul>
      </nav>
      <div id="background-filter"></div>
    </div>
  );
};

export default Navbar;
