
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Precios from './pages/Precios';
import Destinos from './pages/Destinos';
import FAQ from './pages/FAQ';
import AccountPage from './pages/Account';
import NoPage from './pages/NoPage';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={
            <PublicRoute>
              <Home/>
            </PublicRoute>
          }></Route>
          <Route path='/' element={
            <PublicRoute>
              <Home/>
            </PublicRoute>
          }></Route>
          <Route path="/Precios" element={
            <PublicRoute>
              <Precios/>
            </PublicRoute>
          }></Route>
          <Route path="/Destinos" element={
            <PublicRoute>
              <Destinos/>
            </PublicRoute>
          }></Route>
          <Route path="/FAQ" element={
            <PublicRoute>
              <FAQ/>
            </PublicRoute>
          }></Route>
          <Route path="/Account" element={
            <PrivateRoute>
              <AccountPage/>
            </PrivateRoute>
          }></Route>
          <Route path="/noPage" element={<NoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
