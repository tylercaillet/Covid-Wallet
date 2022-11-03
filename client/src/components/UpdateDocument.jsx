import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'


const BASE_URL = '/api'

  



const UpdateDocument = ({}) => {
    let { covidId } = useParams()
    let id = ''
    console.log(covidId) 
    let navigate = useNavigate()
    
    const initalForm = {
        title: '',
        DOB: '', 
        first: '',
        second: '',
        image: '',
        userOne_id: covidId
    }
    
    const [covidState, setCovidState] = useState(initalForm)

    useEffect(() => {
        const getCovidById = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/covids/${id}`)
                setCovidState(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        getCovidById() 
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
            try {
                axios.put(`${BASE_URL}/covids/${id}`, covidState)
            } catch (err) {
                console.log(err)
            }
            setCovidState(initalForm)
            navigate('/DocumentCard')
        
    }

    const handleChange = (e) => {
        setCovidState({...covidState, [e.target.id]: e.target.value})
    }
    return (
        <div className="update-document">
          <h1>Edit Document</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Document Name:</label>
              <input
                type="text"
                id="title"
                onChange={handleChange}
                value={covidState?.title}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="image">Image URL:</label>
              <input
                type="text"
                id="image"
                onChange={handleChange}
                value={covidState?.image}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="first">First</label>
              <input
                type="text"
                id="first"
                onChange={handleChange}
                value={covidState?.first}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="second">Second</label>
              <input
                type="text"
                id="second"
                onChange={handleChange}
                value={covidState?.second}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="DOB">DOB</label>
              <input
                type="text"
                id="DOB"
                onChange={handleChange}
                value={covidState?.DOB}
                required
              ></input>
            </div>
            <div>
              <button type="submit" className="button2">
                Submit
              </button>
            </div>
          </form>
        </div>
      )

}

export default UpdateDocument