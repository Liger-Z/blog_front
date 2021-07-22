import { useState } from 'react';

const PostEdit = ({setEdit, post, postId}) => {
  const [field, setField] = useState({
    title: post.title,
    body: post.body,
  });

  const handleChange = (event) => {
    const target = event.target;

    setField({ ...field, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`http://localhost:5000/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(field),
    });

    setEdit(false);
  };

  return (
    <div className="postform-container">
      <form onSubmit={handleSubmit}>
        <h1>Edit Post</h1>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={field.title}
          onChange={handleChange}
        />
        <label>Body</label>
        <textarea name="body" value={field.body} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostEdit;
