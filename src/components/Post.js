import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Post = () => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const { postId } = useParams();

  const bodyParser = post.body.split('\n').map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>
  })

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
      {bodyParser}
      <CommentForm postId={postId} />
      <CommentList postId={postId} />
    </div>
  );
};

export default Post;
