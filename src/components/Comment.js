// TODO: Allow user to edit their own comment (but don't allow admins or moderators)
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import CommentOptions from './CommentOptions';
import CommentEdit from './CommentEdit';

const Comment = ({
  comment,
  postId,
  commentRerender,
  setCommentRerender,
  user,
}) => {
  const [permitted, setPermitted] = useState(false);
  const [edit, setEdit] = useState(false);

  const bodyParser = comment.body.split('\n\n').map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>;
  });

  useEffect(() => {
    const userPermission = () => {
      try {
        if (user.isAdmin || user.isModerator || user.id === comment.user._id) {
          setPermitted(true);
        }
      } catch {
        console.log('No user for this comment');
      }
    };

    userPermission();
  }, [user, comment]);

  return (
    <div className="comment-container">
      {!edit && (
        <div>
          <p>{comment.user ? comment.user.username : 'Anonymous'}</p>
          <p>{format(new Date(comment.createdAt), 'Pp')}</p>
        </div>
      )}

      {!edit && <div className="comment-body">{bodyParser}</div>}

      {edit && (
        <CommentEdit
          commentRerender={commentRerender}
          setCommentRerender={setCommentRerender}
          previousBody={comment.body}
          postId={postId}
          commentId={comment._id}
          setEdit={setEdit}
        />
      )}
      {permitted && (
        <CommentOptions
          commentRerender={commentRerender}
          setCommentRerender={setCommentRerender}
          setEdit={setEdit}
          postId={postId}
          commentId={comment._id}
        />
      )}
    </div>
  );
};

export default Comment;
