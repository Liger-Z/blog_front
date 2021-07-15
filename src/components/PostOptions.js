import { Link, useHistory } from 'react-router-dom';
import ConfirmationBox from './ConfirmationBox';

const PostOptions = ({ postId }) => {
  let history = useHistory();

  const handleClick = (event) => {
    const target = event.target;
    const postremoveconfirm = target.parentNode.parentNode.nextSibling;
    postremoveconfirm.classList.toggle('hide');
  };

  const removePost = async (event) => {
    event.preventDefault();

    await fetch(`http://localhost:5000/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });

    history.push('/');
  };

  return (
    <div className="postoptions-container">
      <ul>
        <li>
          <Link to={`${window.location.pathname}/edit`}>Edit</Link>
        </li>
        <li>
          <button onClick={handleClick}>Remove</button>
        </li>
      </ul>

      <ConfirmationBox
        title="Remove Post?"
        description="You will not be able to get this post back!"
        cancelButton="Keep"
        confirmButton="Remove"
        handleConfirm={removePost}
      />
    </div>
  );
};

export default PostOptions;
