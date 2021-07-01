import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Mynav = () => {

    const accountBalance = sessionStorage.getItem('accountBalance')

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/home">Stock Website</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/home">Account Balance: ${accountBalance}</Nav.Link>
            <Nav.Link href="/buyStock">Buy Stocks</Nav.Link>
            <Nav.Link href="/myStocks">My Stocks</Nav.Link>
            <Nav.Link href="/home">PI</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Mynav;