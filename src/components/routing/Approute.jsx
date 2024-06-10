import React from 'react'
import Protected from '../auth/Protected'
import Home from '../screens/home/Home'
import { Routes, Route } from 'react-router-dom';
import DetailedPage from '../screens/DetailedPages/DetailedPage';

function Approute() {
  return (
    <>
    <Routes>
		<Route path='/' element={<Protected Component={Home}/>} />
		<Route path='/video/:videoId' element={<Protected Component={DetailedPage}/>} />
		
        {/* <Route path='/' element={<Home />} />
		<Route path='/video/:videoId' element={<DetailedPage />} /> */}
	</Routes>
    </>
  )
}

export default Approute
