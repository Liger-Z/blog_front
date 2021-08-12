import { useEffect, useState } from 'react';
import Comment from './Comment';

const CommentList = ({ postId, commentRerender, setCommentRerender, user }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `http://localhost:5000/posts/${postId}/comments`
      );
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, [postId, commentRerender]);

  const renderComments = comments.map((comment) => {
    return (
      <Comment
        key={comment._id}
        comment={comment}
        postId={postId}
        commentRerender={commentRerender}
        setCommentRerender={setCommentRerender}
        user={user}
      />
    );
  }).reverse(); // Latest comments should appear first

  return <div className="commentlist-container">{renderComments}</div>;
};

export default CommentList;
