import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { useState } from 'react';
import Login from './components/Login/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [services, setServices] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <UserContext.Provider value={{login : [loggedInUser, setLoggedInUser], service : [services, setServices], logged: [isLogin, setIsLogin]}}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
