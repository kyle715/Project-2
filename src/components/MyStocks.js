import React from 'react';

const MyStocks = () => {

    let myStocks = JSON.parse(sessionStorage.getItem('stock'))

    console.log(myStocks)

    if(!myStocks) {
        return(
            <div>
                <h1>My Stocks</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>My Stocks</h1>
            <ul>
                {myStocks.map(stock => {
                    return (
                        <p>{stock.ticker} {stock.price}</p>
                    )
                })}
            </ul>
        </div>
    );
};

export default MyStocks;