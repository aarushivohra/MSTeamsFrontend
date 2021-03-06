import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Routers from './Router';
import { BrowserRouter } from 'react-router-dom';




function App() {


  return (
    <div className="App">
      
    <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />

    <BrowserRouter>
      <Routers/>
    </BrowserRouter>

    </div>
  );
}

export default App;
