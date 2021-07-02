import { useState } from 'react';

const Login = () => {
  const [field, setField] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const target = event.target;

    setField({
      ...field,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
