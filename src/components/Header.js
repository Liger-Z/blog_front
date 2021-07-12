import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = ({user}) => {
  const handleClick = event => {
    const target = event.target;
    
    target.parentNode.previousSibling.classList.toggle('hide');
  }
  
  return (
    <header id="site-header">
      <Navbar />
      <button><i className="las la-bars" onClick={handleClick}></i></button>
      <h1><Link to="/">The Blog</Link></h1>
      <p>{user ? user.username: ''}</p>
    </header>
  )
}

export default Header;