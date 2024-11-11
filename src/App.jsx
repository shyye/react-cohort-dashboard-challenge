import { createContext } from 'react'
import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Menu'
import { Route, Routes } from 'react-router-dom'
import PostsContainer from './components/posts/PostsContainer'

const AppContext = createContext()

function App() {

  return (
    <>
      <Header />
      <Sidebar />

      <AppContext.Provider value={{}}>
        <Routes>
          <Route path="/" element={<PostsContainer />} />
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export { App }
