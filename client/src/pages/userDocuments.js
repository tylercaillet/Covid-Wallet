import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DocumentCard from '../components/DocumentCard'
import Login from '../components/Login'
import CreateUser from '../components/CreateUser'

const Base_URL = '/api'

const UserDocument = () => {
  let navigate = useNavigate()

  const [documents, setDocuments] = useState([])
  const [login, setLogin] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginQuery, setLoginQuery] = useState('')

  const getDocuments = async () => {
    const res = await axios.get(`${Base_URL}/covids`)

    setDocuments(res.data.covids)
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
                image={result.image}
                name={result.name}
                onClick={viewUser}
              />
            ))}
          </section>
        </div>
      ) : (
        <div className="documents">
          <h2>Documents:</h2>
          <section className="container-grid">
            {documents?.map((document) => (
              <DocumentCard
                key={document._id}
                id={document._id}
                image={document.image}
                title={document.title}
                first={document.first}
                second={document.second}
                DOB={document.DOB}
                getDocuments={getDocuments}
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
