import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';

import Counter from './components/counter';
import TempConverter from './components/tempConverter';
import FlightBooker from './components/flightBooker';

import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/tempConverter">Temperature Converter</NavLink>
          <NavLink to="/flightBooker">Flight Booker</NavLink>
        </nav>
        <main>
          <Route path="/counter" component={Counter}/>
          <Route path="/tempConverter" component={TempConverter}/>
          <Route path="/flightBooker" component={FlightBooker}/>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
