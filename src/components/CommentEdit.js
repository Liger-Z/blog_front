import { useState } from 'react';

const CommentEdit = ({  commentId, commentRerender, setCommentRerender, previousBody, postId, setEdit }) => {
  const [field, setField] = useState({
    body: `${previousBody}`,
  });

  const handleCancel = () => {
    setEdit(false);
  };

  const handleChange = (event) => {
    const target = event.target;

    setField({
      body: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`http://localhost:5000/posts/${postId}/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(field),
    });

    setCommentRerender(!commentRerender);
    setEdit(false);
  };

  return (
    <div className="commentedit-container">
      <form onSubmit={handleSubmit}>
        <h2>Editing comment...</h2>

        <textarea name="body" value={field.body} onChange={handleChange} />
        <div>
          <button
            type="button"
            onClick={handleCancel}
            className="cancel-button"
          >
            Cancel
          </button>
          <button type="submit" className="confirm-button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentEdit;
