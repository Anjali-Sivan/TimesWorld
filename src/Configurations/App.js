import React from 'react';
import { Provider } from 'react-redux';
import store from './reduxstore';
import HomePage from '../Routes/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryListing from '../Routes/CountryListing';
import '../index.css';


const App = () => {
    return (
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/countries' element={<CountryListing/>}/>
        </Routes>
   </BrowserRouter>
    </Provider>
    )
}


export default App;