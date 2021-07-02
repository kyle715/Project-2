import React from 'react';

const Profileblock = ({username, accountBalance, myStocks}) => {

    console.log(myStocks)
    
    return (
        <div className='profileBlock'>
            <img classname='profileImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrb7XeVpElaj3yF0M2zBadpBwR1H32HQQumw&usqp=CAU' />
            <div>
                <h3 className='profileName'>{username}</h3>
                <h3 className='profileBalance'>Account Balance:{accountBalance}</h3>
            </div>
            <div className='profileStocks'>
                <p>My Owned Stocks</p>
                <ul>
                  {myStocks.map((stock, index) => {
                        return (
                            <li className='trendList' id={index} value={stock.price}>{stock.ticker} {stock.price}</li>
                            )
                     })}
                </ul>
            </div>
        </div>
    );
};

export default Profileblock;