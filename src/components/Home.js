import React from 'react';
import { useState, useEffect } from 'react';
import Profileblock from './Profileblock';

const Home = ({trendStock, accountBalance, myStocks}) => {

    const trendStockResult = JSON.parse(sessionStorage.getItem('searchStocks'))

    const data = sessionStorage.getItem('username')
    console.log(trendStockResult)

  return (
      <div className='trending'>
          <h2>Welcome Back {data}!</h2>

          <div className='trendArea'>
              <h3>Top Trending Stocks</h3>
              <div>
              <ul>
                  {trendStockResult.finance.result[0].quotes.map(stock => {
                    return (
                      <li className="trendList" key={stock.symbol}>{stock.symbol} Current Value:{stock.regularMarketPrice}</li>
                      )
                    })}  
              </ul>
              </div>
          </div>
          <Profileblock myStocks={myStocks} username={data} accountBalance={accountBalance}/>
      </div>
  );
};

export default Home;