import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = ({ checkToken }) => {
  const hasPushedHistory = useRef(false);
  let history = useHistory();

  useEffect(() => {
    if (!hasPushedHistory.current) {
      localStorage.removeItem('jwt');
      checkToken();
      hasPushedHistory.current = true;
      setTimeout(() => {
        history.push('/');
      }, 2000);
    }
  }, [checkToken, history]);

  return (
    <div>
      <h1>Logout</h1>
      <p>You are now logged out!</p>
      <p>Redirecting to the home page...</p>
    </div>
  );
};

export default Logout;
