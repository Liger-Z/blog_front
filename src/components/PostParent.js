import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';
import PostEdit from './PostEdit';

const PostParent = ({ user }) => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const [edit, setEdit] = useState(false);

  const { postId } = useParams();

  return (
    <div>
      {!edit && (
        <Post
          user={user}
          post={post}
          setPost={setPost}
          setEdit={setEdit}
          postId={postId}
        />
      )}
      {edit && (
        <PostEdit
          user={user}
          post={post}
          setPost={setPost}
          setEdit={setEdit}
          postId={postId}
        />
      )}
    </div>
  );
};

export default PostParent;
