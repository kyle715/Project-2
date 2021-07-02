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
            <h1 className='welcome'>Welcome to your Stock Portfolio!</h1>
            <div className='logIn'>
            <p>Welcome to your own Stock portfolio website! Here you can log into your account, search for stocks and use your account balance to purchase and sell stocks in real time! Enter a user name below to get started!</p>
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