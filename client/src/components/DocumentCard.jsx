import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BASE_URL = 'http://localhost:3001/api'

const DocumentCard = ({image, name, title,second, first,DOB, id, getDocuments}) => {
// const {id} = useParams()
const navigate = useNavigate()

const DeleteDocumentCard = async () => {
    let confirm = window.confirm('deleteDocumentationCard?')
    if (confirm === true) {
        try {
            const response = await axios.delete(`${BASE_URL}/covids/${id}`)
            console.log(response)
            getDocuments()
        } catch (err) {
            console.log(err)
        }
    }
}

    return (
        <div className='card'>
            <div className='img-wrapper'>
                
                <h1>{title}:</h1>
                <img src={image} alt={name} />
                <p>{first}</p>
                <p>{second}</p>
                <p>{DOB}</p>
                <Link to={`/DocumentCard/UpdateDocument`}>
                    <button className = 'update'>Update</button>
                </Link>
                <button onClick={() => DeleteDocumentCard()}>Delete</button>

            </div>
        </div>
    )
}

export default DocumentCard