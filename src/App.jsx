import { createContext } from 'react'
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Menu'
import { Route, Routes } from 'react-router-dom'
import PostsContainer from './components/posts/PostsContainer'

const AppContext = createContext()

function App() {
  // Dummy data for logged in user
  const loggedInUser = {
    firstname: 'John',
    lastname: 'Doe',
    initials: 'JD',
  }

  return (
    <>
      <AppContext.Provider value={{loggedInUser}}>
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
