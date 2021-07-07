import { useState } from 'react';

const CommentForm = ({ postId }) => {
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

    const response = await fetch(
      `http://localhost:5000/posts/${postId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(field),
      }
    );

    console.log(response);
    const data = await response.json();
    console.log(data);
    setField({ body: '' });
  };

  return (
    <div className="commentform-container">
      <form onSubmit={handleSubmit}>
        <h2>Leave a comment!</h2>

        <textarea
          name="body"
          value={field.body}
          onChange={handleChange}
          rows="4"
          cols="20"
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default CommentForm;
