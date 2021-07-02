import React from 'react';
import { Redirect } from 'react-router';
import { useState } from 'react';

const MainPage = ({loggedIn, setLoggedIn}) => {

    const initalUserState = ''

    const [formState, setFormState] = useState(initalUserState)


    function handleChange(event) {
        setFormState({ ...formState, [event.target.id]: event.target.value });
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            setLoggedIn(true)
            sessionStorage.setItem('username', formState.username)
            sessionStorage.setItem('loggedIn', true)
          }
          

    if(loggedIn) {
        return <Redirect to='/home' />
    } 
    return (
        <div className='mainPage'>
            <h1 className='welcome'>Welcome to Stock Website!</h1>
            <div className='logIn'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div id="logInForm">    
            <form onSubmit={handleSubmit}>
                <input placeholder='Username' type='text'value={formState.formState} onChange={handleChange} id='username' />
                <button className='signInButton'>Log in</button>
            </form>
            </div>
            </div>
        </div>
    );
};

export default MainPage;