	import React, { useState, useEffect, createContext } from 'react'; 
	import { Routes, Route } from 'react-router-dom';
	import './App.css';
	import Home from './components/screens/home/Home';
	import DetailedPage from '../src/components/screens/DetailedPages/DetailedPage';
	import Login from './components/auth/Login';
	import Signup from './components/auth/Signup';
	import { SearchProvider } from './components/general/includes/SearchContext';
import Approute from './components/routing/Approute';
import Authroute from './components/routing/Authroute';

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
				<SearchProvider>
						<Approute/>
						<Authroute/>
							{/* <Route path='/' element={<Home />} />
							<Route path='/video/:videoId' element={<DetailedPage />} />
							<Route path='login' element={<Login />} />
							<Route path='signup' element={<Signup />} /> */}
				</SearchProvider>
			</UserContext.Provider>
		</>
	);
	}

	export default App;

