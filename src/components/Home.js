import React from 'react';
import { useState, useEffect } from 'react';

const Home = ({username}) => {

    const [trendStock, setTrendStock] = useState([])


    // FAKE API REQUEST

    const getTrendingStocks = async () => {
        try {
          const response = await fetch('/trending.json')
          const data = await response.json()
          setTrendStock(data)
        } catch (err) {
          console.log(err)
        }
      }


    // REAL API REQUEST

    // const getTrendingStocks = async () => {
    //     try {
    //       const response = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-key": "6ee25a92b8msh36e4143d877d5f0p186b2djsne2a757110594",
    //             "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    //         }
    //     })
    //       const data = await response.json()
    //       setTrendStock(data)
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   }

      useEffect(() => {
          getTrendingStocks()
      }, [])

      console.log(trendStock)

      const data = sessionStorage.getItem('username')

    return (
        <div>
            <h2>Welcome Back {data}!</h2>

            <div className='trending'>
                <h3>Top Trending Stocks</h3>
                <ul>
                  {/* trendStock.finance.result[0].quotes */}
                    {trendStock.map(stock => {
                    return (
                            <li key={stock.symbol}>{stock.symbol}</li>
                            )
                        })}  
                </ul>
            </div>
        </div>
    );
};

export default Home;