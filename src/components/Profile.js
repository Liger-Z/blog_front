import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <ul>
        <li>
          <p>Username: {user.username}</p>
        </li>
        <li>
          <p>Email: {user.email}</p>
        </li>
        <li>
          <p>{`Date Joined: ${format(new Date(user.createdAt), 'P')}`}</p>
        </li>
      </ul>

      <Link to="/profile/changepassword">Change Password</Link>
    </div>
  );
};

export default Profile;
