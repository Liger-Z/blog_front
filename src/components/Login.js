import { useState } from 'react';

const Login = ({ setUser }) => {
  const [field, setField] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState({
    password: '',
    username: '',
  });

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

    const data = await response.json();

    if (response.status === 400) {
      setError(data);
    } else {
      setUser(data.user);
      localStorage.setItem('jwt', data.token);
    }

  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Username</label>
        <br />
        <input
          type="text"
          name="username"
          value={field.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={field.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
