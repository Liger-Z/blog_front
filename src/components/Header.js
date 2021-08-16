import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = ({ user }) => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(true);
  };

  return (
    <header className="header-container">
      {showNav && <Navbar setShowNav={setShowNav} user={user} />}
      <div className="header-main">
        <h1>
          <Link to="/">The<span>Blog</span></Link>
        </h1>
        <button>
          <i className="las la-bars" onClick={handleClick}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
