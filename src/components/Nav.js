import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';

const Mynav = ({loggedIn, accountBalance}) => {

    const newAccountBalance = parseInt(accountBalance)
    

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
            <Nav.Link href="/home">PI</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Mynav;