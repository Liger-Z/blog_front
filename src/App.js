import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import PostParent from './components/PostParent';
import PostForm from './components/PostForm';

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
      const data = await response.json();
      if (data.user !== null) {
        setUser(data.user);
      }
    };

    postAuth();
  }, []);

  /*
  Will need to figure out when to make authentication requests and if a request
  fails the token should be removed.
  */
  const checkToken = async () => {
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
          <Route exact path="/posts/new">
            <PostForm />
          </Route>
          <Route exact path="/posts/:postId">
            <PostParent user={user}/>
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
