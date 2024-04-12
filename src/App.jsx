import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import DetailedPage from '../src/components/DetailedPages/DetailedPage'
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:videoId' element={<DetailedPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

