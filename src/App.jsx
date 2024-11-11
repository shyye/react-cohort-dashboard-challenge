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

  // Dummy data for posts
  const posts = [
    {
      id: 1,
      contactId: 8,
      title: "Titulus umerus tamen asperiores adicio.",
      content: "A verbera vociferor cicuta tepidus defetiscor vigilo curtus deputo vulgo. Spes amoveo aetas. Non curriculum aegrus utique summopere tollo. Victoria aestas clamo aeger. Aperte repellendus compello videlicet vicissitudo tertius conscendo volubilis spoliatio."
    },
    {
      id: 2,
      contactId: 5,
      title: "Consequatur curis decretum.",
      content: "Tenus triumphus modi cunabula tricesimus adfectus coepi demulceo dedecor turpis. Callide solio verto viridis inventore error tandem vir. Certe cenaculum spargo arbitro allatus tergo tres creo. Ait aranea socius aeneus vox trans territo corrumpo timor ultra. Certe provident usitas sint cruentus solitudo adicio utor vetus cariosus."
    },
    {
      id: 3,
      contactId: 9,
      title: "Virgo occaecati basium textus solum adamo iusto.",
      content: "Curtus demo cohaero impedit conatus ceno fugiat concedo. Esse corpus cohibeo caelum atrocitas. Validus beneficium ipsam textor totam iusto vado talus solium. Totus capio accendo deserunt concido cattus alo cresco. Verecundia vespillo validus thema copia copiose curtus neque unus. Sulum testimonium arto quod eos eligendi. Turba acidus thalassinus corpus volup patria."
    }
  ]

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
