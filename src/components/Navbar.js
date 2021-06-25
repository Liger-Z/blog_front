import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  const handleClick = event => {
    const target = event.target;

    target.parentNode.parentNode.parentNode.classList.toggle('hide');    
  }

  return (
    <Router>
      <div className="navbar-container">
        <nav id="navbar">
          <button><i className="las la-bars" onClick={handleClick}></i></button>
          <ul>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <div id="background-filter"></div>
      </div>
    </Router>
  );
};

export default Navbar;