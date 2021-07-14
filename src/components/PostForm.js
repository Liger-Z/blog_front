import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PostForm = () => {
  const [field, setField] = useState({
    title: '',
    body: '',
  });

  let history = useHistory();

  const handleChange = (event) => {
    const target = event.target;

    setField({ ...field, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify(field)
    });

    history.push('/');
  };

  return (
    <div className="postform-container">
      <form onSubmit={handleSubmit}>
        <h1>New Post</h1>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={field.title}
          onChange={handleChange}
        />
        <label>Body</label>
        <textarea name="body" value={field.value} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
