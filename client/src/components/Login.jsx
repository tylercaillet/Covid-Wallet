import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const LoginForm = () => {
    let navigate = useNavigate()
    let { id } = useParams()
    const initialState = { username: '', password: '' };
    const [formState, setFormState] = useState(initialState);

    const handleChange = event => {
       setFormState({ ...formState, [event.target.id]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/userOne')
        console.log(formState);
        setFormState(initialState);
        navigate(`/login/${id}`)
    }
    return (
        <div className="formContainer">
        <form onSubmit={handleSubmit}>
            <label htmlFor="username" className='userName'>Username:</label>
            <input
            id="username"
            type="text"
            onChange={handleChange}
            value={formState.username}
            />
            <label htmlFor="password" className='password'>Password:</label>
            <input
            id="password"
            type="password"
            onChange={handleChange}
            value={formState.password}
            />
            <button type="submit">Login</button>
        </form>
        </div>
    )
}





export default LoginForm