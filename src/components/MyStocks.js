import React, { useEffect, useState, Redirect } from 'react';

const MyStocks = ({accountBalance, setAccountBalance}) => {
    
    const loggedIn = sessionStorage.getItem('loggedIn')
    
    const [myStocks, setMyStocks] = useState(JSON.parse(localStorage.getItem('stock')) || [])
    
    const sellStock = (e) => {
        e.preventDefault()
        const stockValue = e.target.parentElement.childNodes[2].data
        let numAccountBalance = parseInt(accountBalance)
        let numStockValue = parseInt(stockValue)
        const newAccountBalance = numAccountBalance + numStockValue + 1
        setAccountBalance(newAccountBalance)
        localStorage.setItem('accountBalance', newAccountBalance)
        myStocks.splice(e.target.parentElement.id, 1)
        setMyStocks(myStocks)
        localStorage.setItem('stock', JSON.stringify(myStocks))
    }
    
    // useEffect(() => {
    // }, [])
    
    console.log(myStocks)
    
    
    
    if(!loggedIn) {
        return <Redirect to='/' />
    }
    if(!myStocks) {
        return(
            <div>
                <h1>My Stocks</h1>
            </div>
        )
    }
    return (
        <div>
            <h2>My Stocks</h2>
            <ul>
                {myStocks.map((stock, index) => {
                    return (
                        <li id={index} value={stock.price}>{stock.ticker} {stock.price} <button onClick={sellStock}>Sell</button></li>
                    )
                })}
            </ul>
        </div>
    );
};

export default MyStocks;