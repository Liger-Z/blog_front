import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [field, setField] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState({
    password: '',
    username: '',
  });

  let history = useHistory();

  const handleChange = (event) => {
    const target = event.target;

    setField({
      ...field,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(field),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.status === 400) {
      setError(data);
    } else {
      setUser(data.user);
      localStorage.setItem('jwt', data.token);
      history.push('/');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label className={error.username && !field.username ? 'error-label' : ''}>Username</label>
        <br />
        <input
          type="text"
          name="username"
          value={field.username}
          onChange={handleChange}
          className={error.username && !field.username ? 'error-input' : ''}
        />
        {error.username && <p className="error-msg">{error.username}</p>}
        <label className={error.password && !field.password ? 'error-label' : ''}>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={field.password}
          onChange={handleChange}
          className={error.password && !field.password ? 'error-input' : ''}
        />
        {error.password && <p className="error-msg">{error.password}</p>}
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
