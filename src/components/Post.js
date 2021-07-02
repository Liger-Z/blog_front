import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const { postId } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`http://localhost:5000/posts/${postId}`)
      const data = await response.json();

      setPost({
        title: data.title,
        body: data.body
      })
    };

    getPost();
  }, [postId]);

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
