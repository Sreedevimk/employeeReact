import './App.css'


import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'
import Navbar from './components/Navbar'
import Login from './components/Login'
import PrivateRoutes from './components/Privateroutes'


function App() {
  return (
    <>
    <Navbar/>
        <Routes>
         <Route path='/' element={<Login/>}></Route>
         <Route element={<PrivateRoutes/>}> 
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          </Route>
        </Routes>
    </>
  )
}
export default App
