import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
