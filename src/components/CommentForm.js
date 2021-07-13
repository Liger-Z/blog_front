import { useState } from 'react';

const CommentForm = ({ postId, newComment, setNewComment }) => {
  const [field, setField] = useState({
    body: '',
  });

  const handleChange = (event) => {
    const target = event.target;

    setField({
      body: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    await fetch(`http://localhost:5000/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify(field),
    });

    setField({ body: '' });
    setNewComment(!newComment);
   };

  return (
    <div className="commentform-container">
      <form onSubmit={handleSubmit}>
        <h2>Leave a comment!</h2>

        <textarea name="body" value={field.body} onChange={handleChange} />
        <button>Send</button>
      </form>
    </div>
  );
};

export default CommentForm;
