// TODO: Allow user to edit their own comment (but don't allow admins or moderators)
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ConfirmationBox from './ConfirmationBox';

const Comment = ({
  comment,
  postId,
  commentRerender,
  setCommentRerender,
  user,
}) => {
  const [permitted, setPermitted] = useState(false);

  const handleClick = (event) => {
    const target = event.target;
    target.parentNode.parentNode.lastChild.classList.toggle('hide');
  };

  const handleConfirm = async (event) => {
    event.preventDefault();

    await fetch(
      `http://localhost:5000/posts/${postId}/comments/${comment._id}`,
      {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
      }
    );

    setCommentRerender(!commentRerender);
    const target = event.target;
    target.parentNode.parentNode.parentNode.classList.toggle('hide');
  };

  useEffect(() => {
    const userPermission = () => {
      try {
        if (
          user.isAdmin ||
          user.isModerator ||
          user.id === comment.user._id
        ) {
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
      <div>
        <p>{comment.user ? comment.user.username : 'Anonymous'}</p>
        <p>{format(new Date(comment.createdAt), 'Pp')}</p>
      </div>

      <p>{comment.body}</p>

      {permitted && (
        <button onClick={handleClick}>
          <i className="las la-trash-alt"></i>
        </button>
      )}
      {permitted && (
        <ConfirmationBox
          title="Remove Comment?"
          description="This comment will be removed forever!"
          confirmButton="Remove"
          cancelButton="Keep"
          handleConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default Comment;
