import { useEffect, useState } from 'react';

const PostList = () => {
  const [postList, setPostList] = useState([]);

  const renderPostList = postList.map((post) => {
    console.log(postList)
    return (
      <div key={post._id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
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
      <h2>Post List</h2>
      {renderPostList}
    </div>
  );
};

export default PostList;
