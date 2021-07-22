import { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import PostOptions from './PostOptions';

const Post = ({ user, post, setPost, setEdit, postId }) => {
  // binary value used to refresh component when a new comment is added
  const [newComment, setNewComment] = useState(false);


  const bodyParser = post.body.split('\n\n').map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>;
  });

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`http://localhost:5000/posts/${postId}`);
      const data = await response.json();

      setPost({
        title: data.title,
        body: data.body,
      });
    };

    getPost();
  }, [postId, setPost]);

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      {user.isAdmin && <PostOptions postId={postId} setEdit={setEdit} />}
      <div className="post-body">{bodyParser}</div>
      <CommentForm
        postId={postId}
        newComment={newComment}
        setNewComment={setNewComment}
      />
      <CommentList postId={postId} newComment={newComment} />
    </div>
  );
};

export default Post;
