import Navbar from './Navbar';

const Header = () => {
  const handleClick = event => {
    const target = event.target;

    target.parentNode.previousSibling.classList.toggle('hide');
  }
  
  return (
    <header id="site-header">
      <Navbar />
      <button><i className="las la-bars" onClick={handleClick}></i></button>
      <h1>The Blog</h1>
    </header>
  )
}

export default Header;