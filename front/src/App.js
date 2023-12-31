import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SimpleNav from './components/SimpleNav';
import FullNav from './components/FullNav';
import Login from "./pages/Login";
import Register from './pages/Register';
import Employees from './pages/Employees';
import "./index.css"
import { Container } from '@mui/material';
import Account from './pages/Account';
import { useEffect } from 'react';
import { show_alert } from './utilities';

function App() {
  useEffect(()=>{
    show_alert('Bienvenido al sistema', 'info')
  },[])
  return (
    <BrowserRouter>
    {window.location.pathname !== "/login" && window.location.pathname !== "/register" ? <FullNav /> : <SimpleNav />}
        <Container className='principalContainer'>
          <Routes>
            <Route 
              path='/login' 
              element={<Login />} 
            />
            <Route 
              path='/register' 
              element={<Register />} 
            /> 
            <Route 
              path='/Account' 
              element={<Account />} 
            /> 
            <Route 
              path='/' 
              element={<Employees />} 
            /> 
          </Routes>
        </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
