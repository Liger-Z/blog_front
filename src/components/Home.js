import PostList from './PostList';

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <p>Welcome to my blog! Here you'll find my random thoughts on lots of different topics.</p>
      </div>

      <PostList />
    </div>
  );
};

export default Home;