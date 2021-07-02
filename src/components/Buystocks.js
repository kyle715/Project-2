import React from 'react';
import { useState, useEffect } from 'react';

const Buystocks = ({stockSearch, setStockSearch, myStocks, setMyStocks, accountBalance, setAccountBalance}) => {
    
    const [searchString, setSearchString] = useState('')
    const [APICall, setAPICall] = useState(false)


// REAL API REQUEST

    const searchStocks = async (searchString) => {
        try {
            const response = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${searchString}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "6ee25a92b8msh36e4143d877d5f0p186b2djsne2a757110594",
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
                }
            })
          const data = await response.json()
          setStockSearch(data)
          console.log(data)
          console.log(stockSearch.quoteResponse.result.length)
          setAPICall(true)

        } catch (err) {
            console.log(err)
        }       
    }
        
    // useEffect(() => {
    //     searchStocks(searchString)
    // }, [])

    function handleChange(event) {
        setSearchString(event.target.value);
      }

      function handleSubmit(event) {
        event.preventDefault();
        searchStocks(searchString);
      }
      
      const buyStock = (e) => {
          
          
          e.preventDefault()
          let parentString = e.target.parentElement.innerText
          let parentStringSplit = parentString.toString().split(' ')
          let stockPrice = parentStringSplit[2]
          let stockName = parentStringSplit[0]
          const boughtStock = ({
              ticker: stockName,
              price: stockPrice 
            })
            
            if(accountBalance > parseInt(stockPrice)) {
            setMyStocks([...myStocks, boughtStock])
            const newAccountBalance = accountBalance - stockPrice
            
            setAccountBalance(newAccountBalance)
            sessionStorage.setItem('accountBalance', newAccountBalance)
            
        } else {
            console.log(stockPrice)
            console.log(accountBalance)
        }
        
    }


    useEffect(() => {
        sessionStorage.setItem('stock', JSON.stringify(myStocks))
    }, [myStocks])
        
    
    if(!APICall) {
          console.log("it hit this")
          return(
              <div>
                <h2>Buy Stocks</h2>
                <form className='searchForm' onSubmit={handleSubmit}>
                    <input placeholder='Search Stock' name='searchStock' required onChange={handleChange} type='text'></input>
                </form>
              </div>
          )
      }

    return (
        <div>
            <h2>Buy Stocks</h2>
            <div>    
                <form className='searchForm' onSubmit={handleSubmit}>
                    <input placeholder='Search Stock' name='searchStock' required onChange={handleChange} type='text'></input>
                </form>
            </div>
                <ul>
                    <li>{stockSearch.quoteResponse.result[0].symbol}: Value:$ {stockSearch.quoteResponse.result[0].bid} <button onClick={buyStock}>buy this stock</button> </li>                    
                </ul>
        </div>
    );
};

export default Buystocks;