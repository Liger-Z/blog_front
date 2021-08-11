import { useState } from 'react';
import ConfirmationBox from './ConfirmationBox';

const CommentOptions = ({
  commentRerender,
  setCommentRerender,
  setEdit,
  postId,
  commentId,
}) => {
  const [showConfirmationBox, setShowConfirmationBox] = useState(false);
  
  const handleClick = (event) => {
    const target = event.target;

    switch (target.classList[1]) {
      case 'la-edit':
        console.log('Editing...');
        setEdit(true);
        break;
      case 'la-trash-alt':
        console.log('Removing...');
        setShowConfirmationBox(true);
        break;
      default:
        console.log('How did this happen?');
    }
  };

  const handleConfirm = async (event) => {
    event.preventDefault();

    await fetch(`http://localhost:5000/posts/${postId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });

    setCommentRerender(!commentRerender);
    const target = event.target;
    target.parentNode.parentNode.parentNode.classList.toggle('hide');
  };

  const handleCancel = () => {
    setShowConfirmationBox(false);
  }

  return (
    <div className="commentoptions-container">
      <div>
        <button onClick={handleClick}>
          <i className="las la-trash-alt"></i>
        </button>

        <button onClick={handleClick}>
          <i className="las la-edit"></i>
        </button>
      </div>

      {showConfirmationBox && (
        <ConfirmationBox
          title="Remove Comment?"
          description="This comment will be removed forever!"
          confirmButton="Remove"
          cancelButton="Keep"
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default CommentOptions;
