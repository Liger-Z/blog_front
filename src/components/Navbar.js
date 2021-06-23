import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <nav class="navbar-container">
        <button><i class="las la-bars"></i></button>
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;