import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }).reverse(); // Latest posts should appear first

  // // Get posts from the blog api when the component mounts
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();

      setPostList(data);
      setLoading(false);
    };
  
    getPosts();
  }, []);

  return (
    <div className="postlist-container">
      <h1>Post List</h1>
      {loading && <p><i class="las la-circle-notch"></i></p>}
      {!loading && renderPostList} 
    </div>
  );
};

export default PostList;
