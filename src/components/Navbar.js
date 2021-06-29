import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleClick = (event) => {
    const target = event.target;

    target.parentNode.parentNode.parentNode.classList.toggle('hide');
  };

  return (
    <div className="navbar-container hide">
      <nav id="navbar">
        <button>
          <i className="las la-bars" onClick={handleClick}></i>
        </button>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div id="background-filter"></div>
    </div>
  );
};

export default Navbar;
