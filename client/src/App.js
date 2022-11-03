import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import DocumentCard from './components/DocumentCard'
import UserDocuments from './pages/userDocuments'
import UpdateDocument from './components/UpdateDocument'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/DocumentCard" element={<UserDocuments />} />
          <Route path="/login/:id" element={<DocumentCard />} />
          <Route
            path="/DocumentCard/UpdateDocument"
            element={<UpdateDocument />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
