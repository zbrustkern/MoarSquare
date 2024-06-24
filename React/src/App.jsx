import { useState, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import PostList from './components/PostList/PostList';
import * as authService from '../src/services/authService';
import * as postService from '../src/services/postService';

export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [posts, setPosts] = useState([]);

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  useEffect( () => {
    const fetchAllPosts = async () => {
      const postsData = await postService.indexPosts()
      setPosts(postsData.posts);
    }
    if (user) fetchAllPosts()
  }, [user])

  const handleDeletePost = async (postId) => {
    await postService.deletePost(postId);
    setPosts(posts.filter((post) => post.id !== postId));
    };

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <Routes>
          {user ? (
            <>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/posts" element={<PostList posts={posts} handleDeletePost={handleDeletePost} user={user}/>} />
            </>
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
