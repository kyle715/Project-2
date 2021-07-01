import React from 'react';
import { useState, useEffect } from 'react';

const Buystocks = ({myStocks, setMyStocks, accountbalance, setAccountBalance}) => {
    
    const [stockSearch, setStockSearch] = useState([])
    const [searchString, setSearchString] = useState('')
    const accountBalance = sessionStorage.getItem('accountBalance')
    
//  FAKE API REQUEST FOR TSLA

const searchStocks = async () => {
    try {
        const response = await fetch('/TSLAsearch.json')
        const data = await response.json()
        setStockSearch(data)
    } catch (err) {
        console.log(err)
    }
}



// REAL API REQUEST

    // const searchStocks = async (searchString) => {
    //     try {
    //         const response = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${searchString}`, {
    //             "method": "GET",
    //             "headers": {
    //                 "x-rapidapi-key": "6ee25a92b8msh36e4143d877d5f0p186b2djsne2a757110594",
    //                 "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    //             }
    //         })
    //       const data = await response.json()
    //       setStockSearch(data)
    //       console.log(data)
    //     } catch (err) {
    //         console.log(err)
    //     }       
    // }
        
    // ADD SEARCH STRING PROP
    useEffect(() => {
        searchStocks()
    }, [])

    function handleChange(event) {
        setSearchString(event.target.value);
      }
      
    // ADD SEARCH STRING PROP

      function handleSubmit(event) {
        event.preventDefault();
        searchStocks();
      }


      
      const buyStock = (e) => {
          e.preventDefault()
        let parentString = e.target.parentElement.innerText
        let parentStringSplit = parentString.toString().split(' ')
        let stockPrice = parentStringSplit[2]
        let stockName = parentStringSplit[0]
        console.log(stockPrice, stockName)
        const boughtStock = ({
            ticker: stockName,
            price: stockPrice 
        })

        setMyStocks([...myStocks, boughtStock])
        const newAccountBalance = accountBalance - stockPrice

        sessionStorage.setItem('accountBalance', newAccountBalance)
        // setAccountBalance(() => {
        //     setAccountBalance(newAccountBalance)
        // })
        
    }
    
    useEffect(() => {
    sessionStorage.setItem('stock', JSON.stringify(myStocks))
    }, [myStocks])



    //   const boughtStocks = sessionStorage.getItem('stock')

    //   sessionStorage.setItem('boughtStocks', boughtStocks)


      if(!stockSearch.length) {
          console.log("it hit this")
          return(
              <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Search Stock' name='searchStock' required onChange={handleChange} type='text'></input>
                </form>
              </div>
          )
      }

    return (
        <div>
            <h1>Buy stocks</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='Search Stock' name='searchStock' required onChange={handleChange} type='text'></input>
            </form>
                <ul>
                        {/* REAL API RETURN
                    <li>{stockSearch.quoteResponse.result[0].symbol}: Value:$ {stockSearch.quoteResponse.result[0].bid} <button onClick={buyStock}>buy this stock</button> </li> */}
                    <li>TSLA: Value:$ {stockSearch[0].bid} <button onClick={buyStock}>buy this stock</button> </li>
                </ul>
        </div>
    );
};

export default Buystocks;