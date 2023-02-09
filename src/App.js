import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Products from './components/pages/Products/Products';
import Users from './components/pages/Users/Users';
import Home from './components/pages/Home/Home';

import ContextProvider from './components/context/ContextApi';

function App() {

  return (
    <>
      <Router>
        <ContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
