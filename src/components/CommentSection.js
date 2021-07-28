import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentSection = ({ postId }) => {
  const [commentRerender, setCommentRerender] = useState(false);

  return (
    <div>
      <CommentForm
        postId={postId}
        commentRerender={commentRerender}
        setCommentRerender={setCommentRerender}
      />
      <CommentList
        postId={postId}
        commentRerender={commentRerender}
        setCommentRerender={setCommentRerender}
      />
    </div>
  );
};

export default CommentSection;
