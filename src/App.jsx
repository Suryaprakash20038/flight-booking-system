import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Ticket from './Ticket';
import { FlightContextProvider } from './FlightContext';

function App() {
  return (
    <FlightContextProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket" element={<Ticket />} />
        

        </Routes>
      </BrowserRouter>
    </FlightContextProvider>
  );
}

export default App;
