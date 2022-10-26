import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Login from '../components/Login'
import CreateUser from '../components/CreateUser'
import DocumentCard from '../components/DocumentCard'

const Base_URL = 'http://localhost:3001/api'

const UserDocument = () => {
  let navigate = useNavigate()

  const [documents, setDocuments] = useState([])
  const [login, setLogin] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginQuery, setLoginQuery] = useState('')

  const getDocuments = async () => {
    const res = await axios.get(`${Base_URL}/covids`)

    setDocuments(res.data.results)
  }

  const getLogin = async (event) => {
    event.preventDefault()
    setLoggedIn(true)
    const res = await axios.get(`${Base_URL}/userOne`)

    setLogin(res.data.results)
    setLoginQuery('')
  }

  const handleChange = (event) => {
    setLoginQuery(event.target.value)
  }

  const viewDocument = (id) => {
    navigate(`/documents/${id}`)
  }

  const viewUser = (id) => {
    navigate(`/users/${id}`)
  }

  useEffect(() => {
    getDocuments()
  }, [])

  return (
    <div>
      <Login onSubmit={getLogin} onChange={handleChange} value={loginQuery} />
      {loggedIn ? (
        <div className="loggedin">
          <h2>User logged in</h2>
          <section className="user-logged container-grid">
            {login?.map((result) => (
              <CreateUser
                key={result.id}
                id={result.id}
                image={result.background_image}
                name={result.name}
                onClick={viewUser}
              />
            ))}
          </section>
        </div>
      ) : (
        <div className="documents">
          <h2>Documents</h2>
          <section className="container-grid">
            {documents?.map((document) => (
              <DocumentCard
                key={document.id}
                id={document.id}
                image={document.image_background}
                name={document.name}
                onClick={viewDocument}
              />
            ))}
          </section>
        </div>
      )}
    </div>
  )
}

export default UserDocument
