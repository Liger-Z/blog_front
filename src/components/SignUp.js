import { useState } from 'react';

const SignUp = () => {
  const [field, setField] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
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
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign-Up</h2>
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
