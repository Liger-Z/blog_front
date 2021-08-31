import { useState } from 'react';

const PasswordChange = ({ user }) => {
  const [field, setField] = useState({
    oldPassword: '',
    newPassword: '',
    newPasswordConfirmation: '',
  });

  const handleChange = (event) => {
    const target = event.target;

    setField({ ...field, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify(field),
    });

    const data = await response.json();

    console.log(response, data);
  };

  return (
    <div className="passwordchange-container">
      <form onSubmit={handleSubmit}>
        <h2>Password Change</h2>
        <label>Enter your old password</label>
        <input
          type="password"
          name="oldPassword"
          value={field.oldPassword}
          onChange={handleChange}
        />
        <label>New Password</label>
        <input
          type="password"
          name="newPassword"
          value={field.newPassword}
          onChange={handleChange}
        />
        <label>New Password Confirmation</label>
        <input
          type="password"
          name="newPasswordConfirmation"
          value={field.newPasswordConfirmation}
          onChange={handleChange}
        />
        <button>Change Password</button>
      </form>
    </div>
  );
};

export default PasswordChange;
