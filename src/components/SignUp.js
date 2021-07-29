/*
TODO: Make it so errors show up (and thus it does not automatically
  redirect if wrong info is entered)
*/

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [field, setField] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
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

    await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(field)
    });

    history.push('/login');
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign-Up</h1>
        <label>Username</label>
        <br />
        <input
          type="text"
          name="username"
          value={field.username}
          onChange={handleChange}
        />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={field.email}
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
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          name="passwordConfirmation"
          value={field.passwordConfirmation}
          onChange={handleChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
