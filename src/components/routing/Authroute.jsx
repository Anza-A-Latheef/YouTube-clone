    import React from 'react'
	import { Routes, Route } from 'react-router-dom';
    import Login from '../auth/Login';
    import Signup from '../auth/Signup';

    const Authroute = () => {
    return (
        <>
        <Routes>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
        </Routes>
        </>
    )
    }

    export default Authroute
