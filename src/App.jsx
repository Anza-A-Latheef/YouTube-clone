import React, { useState, useEffect, createContext } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/screens/home/Home';
import DetailedPage from '../src/components/screens/DetailedPages/DetailedPage';
import Login from './components/routing/Login';
import Signup from './components/routing/Signup';

export const UserContext = createContext();

function App() {
  const [userData,setUserData]=useState({});
const updateUserData=(action)=>{
  switch(action.type){
    case "LOGOUT":
      setUserData(null);
      localStorage.clear();
      break;
    case "LOGIN":
      setUserData(action.payload);
      break;
    default:
      break
  }
};
useEffect(() => {
  const storedUserData = localStorage.getItem("user_data");
  if (storedUserData) {
    setUserData(JSON.parse(storedUserData));
  }
}, []);

  return (
    <>
    <UserContext.Provider value={{userData, updateUserData}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:videoId' element={<DetailedPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;

