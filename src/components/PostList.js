import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [postList, setPostList] = useState([]);

  const renderPostList = postList.map((post) => {
    // Dont want the whole post displayed on the home page
    const trimmedBody = () => {
      return post.body.slice(0, 150) + '...';
    };

    return (
      <div key={post._id}>
        <h2><Link to={`/posts/${post._id}`}>{post.title}</Link></h2>
        <p>{trimmedBody()}</p>
      </div>
    );
  });

  // Get posts from the blog api when the component mounts
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();
      setPostList(data);
    };

    getPosts();
  }, []);

  return (
    <div className="postlist-container">
      <h1>Post List</h1>
      {renderPostList}
    </div>
  );
};

export default PostList;
