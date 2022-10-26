import React, { useState } from 'react';

const LoginForm = () => {
    const initialState = { username: '' };
    const [formState, setFormState] = useState(initialState);

    const handleChange = event => {
       setFormState({ ...formState, [event.target.id]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formState);
        setFormState(initialState);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
            id="username"
            type="text"
            onChange={handleChange}
            value={formState.username}
            />
            <label htmlFor="password">Password:</label>
            <input
            id="password"
            type="password"
            onChange={handleChange}
            value={formState.password}
            />
            <button type="submit">Login</button>
        </form>
    )
}


// const Login = () => {
//     return (
//         <div className='userlogin'>Hello</div>
//     )
// }


export default Login