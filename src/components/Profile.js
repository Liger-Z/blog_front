import { format } from 'date-fns';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <ul>
        <li><p>Username: {user.username}</p></li>
        <li><p>Email: {user.email}</p></li>
        <li><p>{`Date Joined: ${format(new Date(user.createdAt), 'P')}`}</p></li>
      </ul>
    </div>
  )
}

export default Profile;