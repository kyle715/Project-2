import './App.css';
import Mynav from './components/Nav';
import MainPage from './components/MainPage';
import Buystocks from './components/Buystocks';
import MyStocks from './components/MyStocks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'


function App() {

  const [accountBalance, setAccountBalance] = useState(localStorage.getItem('accountBalance') || 10000)
  const [myStocks, setMyStocks] = useState(JSON.parse(localStorage.getItem('stock')) || [])
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('loggedIn') || false)
  const [stockSearch, setStockSearch] = useState([])
  const [trendStock, setTrendStock] = useState(sessionStorage.getItem('searchStocks') || [])


  const getTrendingStocks = async () => {
        try {
          const response = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6ee25a92b8msh36e4143d877d5f0p186b2djsne2a757110594",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        })
          const data = await response.json()
          setTrendStock(data)
          console.log('searched')
          sessionStorage.setItem('searchStocks', JSON.stringify(data))
        } catch (err) {
          console.log(err)
        }
      }

    useEffect(() => {
      getTrendingStocks()
  }, [])

  return (
    <div>
      <Mynav loggedIn={loggedIn} accountBalance={accountBalance}/>
      <Route exact path ='/' render={() => (
        <MainPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      )} />
      <Route path='/home' 
      render = {() => (
        <Home myStocks={myStocks} trendStock={trendStock} loggedIn={loggedIn} accountBalance={accountBalance}/>
      )} />
      <Route path='/buyStock' 
      render = {() => (
        <Buystocks stockSearch={stockSearch} setStockSearch={setStockSearch} accountBalance={accountBalance} setAccountBalance={setAccountBalance} myStocks={myStocks} setMyStocks={setMyStocks}  />
      )} />
      <Route path='/myStocks' 
      render = {() => (
        <MyStocks myStocks={myStocks} accountBalance={accountBalance} setAccountBalance={setAccountBalance}/>
      )} />
    </div>
  );
}

export default App;
