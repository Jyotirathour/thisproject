import { createTheme,ThemeProvider } from '@mui/material';
import {useState} from "react";
import { BrowserRouter,Routes, Route, Link , Navigate } from 'react-router-dom';

import './App.css';
import Home from './components/home';
import Login from './components/login';
import Header from './components/header';

import Signup from './components/signup';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const myCustomTheme = createTheme({
    palette:{
      mode: darkTheme ? "dark" : "light",
      secondary:{
        main: '#c76000',
      }
  }
  })
  return (
    <ThemeProvider theme={myCustomTheme}>
    <div >
           <BrowserRouter>

        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}  /> 

         <Routes>
           <Route element = {<Home/>} path = "/home"/> 
           <Route element = {<Login />} path = "/login"/>
           
           <Route element = {<Signup/>} path = "/signup"/>
           
           
           
           <Route path="/" element={<Navigate replace to="/home" />}>
             

           </Route>

         </Routes>

         
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
};

export default App;
