import { createContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Menu'
import { Route, Routes } from 'react-router-dom'
import PostsContainer from './components/posts/PostsContainer'

const AppContext = createContext()

function App() {

  const [posts, setPosts] = useState([]);

  // Dummy data for logged in user
  const loggedInUser = {
    firstname: 'John',
    lastname: 'Doe',
    initials: 'JD',
  }

  // Get Posts
  const getData = async () => {
    const res = await fetch("https://boolean-uk-api-server.fly.dev/shyye/post");
    const data = await res.json();
    setPosts(data);
  };

  // Load data
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AppContext.Provider value={{loggedInUser, posts}}>
        <Header />
        <Sidebar />
      
        <Routes>
          <Route path="/" element={<PostsContainer />} />
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export { App, AppContext }
