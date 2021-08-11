import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ConfirmationBox from './ConfirmationBox';

const PostOptions = ({ postId, setEdit }) => {
  const [showConfirmationBox, setShowConfirmationBox] = useState(false);
  let history = useHistory();

  const handleEdit = () => {
    setEdit(true);
  };

  const handleRemove = () => {
    setShowConfirmationBox(true);
  };

  const removePost = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:5000/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });

    const data = await response.json();

    console.log(response, data);

    history.push('/');
  };

  const handleCancel = () => {
    setShowConfirmationBox(false);
  };

  return (
    <div className="postoptions-container">
      <ul>
        <li>
          <button id="edit-post-button" onClick={handleEdit}>
            Edit
          </button>
        </li>
        <li>
          <button onClick={handleRemove}>Remove</button>
        </li>
      </ul>

      {showConfirmationBox && (
        <ConfirmationBox
          title="Remove Post?"
          description="You will not be able to get this post back!"
          cancelButton="Keep"
          confirmButton="Remove"
          handleConfirm={removePost}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default PostOptions;
