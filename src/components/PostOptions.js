import { useHistory } from 'react-router-dom';
import ConfirmationBox from './ConfirmationBox';

const PostOptions = ({ postId, setEdit }) => {
  let history = useHistory();

  const handleEdit = () => {
    setEdit(true)
  }

  const handleRemove = (event) => {
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
          <button id="edit-post-button" onClick={handleEdit}>Edit</button>
        </li>
        <li>
          <button onClick={handleRemove}>Remove</button>
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
