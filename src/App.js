import './App.css';
import Mynav from './components/Nav';
import MainPage from './components/MainPage';
import Buystocks from './components/Buystocks';
import MyStocks from './components/MyStocks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { useState } from 'react'
import { Route } from 'react-router-dom'


function App() {

  const [myStocks, setMyStocks] = useState(JSON.parse(sessionStorage.getItem('stock')) || [])

  
  // const [accountbalance, setAccountBalance] = useState(10000)
  sessionStorage.setItem('accountBalance', 10000)
  
  // useEffect(() => {
    //   sessionStorage.setItem('username', JSON.stringify(username))
    // }, [username])

  return (
    <div className="App">
      <Mynav />
      <Route exact path ='/' render={() => (
        <MainPage />
      )} />
      <Route path='/home' 
      render = {() => (
        <Home />
      )} />
      <Route path='/buyStock' 
      render = {() => (
        <Buystocks myStocks={myStocks} setMyStocks={setMyStocks}  />
      )} />
      <Route path='/myStocks' 
      render = {() => (
        <MyStocks myStocks={myStocks}/>
      )} />
    </div>
  );
}

export default App;
