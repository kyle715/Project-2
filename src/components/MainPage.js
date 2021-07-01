import React from 'react';
import { Redirect } from 'react-router';
import { useState } from 'react';

const MainPage = () => {

    const initalUserState = ''

    const [formState, setFormState] = useState(initalUserState)
    const [loggedin, setloggedin] = useState(false)


    function handleChange(event) {
        setFormState({ ...formState, [event.target.id]: event.target.value });
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            setloggedin(true)
            sessionStorage.setItem('username', formState.username)
          }


    if(loggedin) {
        return <Redirect to='/home' />
    } 
    return (
        <div>
            <h1>Welcome to Stock Website!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <form onSubmit={handleSubmit}>
                <input type='text'value={formState.formState} onChange={handleChange} id='username' />
                <button>Log in</button>
            </form>
        </div>
    );
};

export default MainPage;