import React from 'react';
import './App.css';
import Navbar from './Component/Navbar'
import Card from './Component/Card'
import Record from './Component/Record'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div>
       <Router>
       <Navbar />
        <Switch>
          <Route path="/"  exact  component={Card} />
          <Record path="/Record"  exact  component={Record} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
