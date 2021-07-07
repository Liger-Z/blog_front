import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const CommentList = ({ postId }) => {
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
  }, [postId]);

  const renderComments = comments.map((comment) => {
    return (
      <div key={comment._id} className="comment-container">
        <div>
          <p>{comment.user ? comment.user.username : 'Anonmyous'}</p>
          <p>{format(new Date(comment.createdAt), 'Pp')}</p>
        </div>

        <p>{comment.body}</p>
      </div>
    );
  });

  return <div className="commentlist-container">{renderComments}</div>;
};

export default CommentList;
