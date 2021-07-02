import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const Mynav = ({loggedIn, accountBalance}) => {

    const newAccountBalance = parseInt(accountBalance)

    const logOut = () => {
        sessionStorage.removeItem('loggedIn')
        sessionStorage.removeItem('username')
        return <Redirect to='/' />
    }
    

    if(!loggedIn){
        return(
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">Stock Website</Navbar.Brand>
            </Navbar>
        )
    }

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Stock Website</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="/home">Account Balance: ${newAccountBalance}</Nav.Link>
            <Nav.Link href="/buyStock">Buy Stocks</Nav.Link>
            <Nav.Link href="/myStocks">My Stocks</Nav.Link>
            <Nav.Link href="/"><button onClick={logOut}>Log Out</button></Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Mynav;