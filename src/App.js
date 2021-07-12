import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import Post from './components/Post';

function App() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    isAdmin: false,
    isModerator: false,
  });

  useEffect(() => {
    const postAuth = async () => {
      const response = await fetch('http://localhost:5000/auth', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      setUser(data.user);
    };

    postAuth();
  }, []);

  /*
  Will need to figure out when to make authentication requests and if a request
  fails the token should be removed.
  */
  const checkToken = () => {
    if (localStorage.getItem('jwt') === null) {
      setUser({
        username: '',
        email: '',
        isAdmin: false,
        isModerator: false,
      });
    } 
  };

  return (
    <Router>
      <div className="App">
        <Header user={user} />
        <Switch>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/logout">
            <Logout checkToken={checkToken} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/posts/:postId">
            <Post />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
