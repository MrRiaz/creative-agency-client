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
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import NoMatch from './components/Home/NoMatch/NoMatch';
import Order from './components/Dashboard/Order/Order/Order';
import ServiceList from './components/ServiceList/ServiceList/ServiceList';
import Review from './components/Dashboard/Review/Review/Review';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin/AddAdmin';
import AddService from './components/Dashboard/AddService/AddService/AddService';
import ShowAllOrder from './components/Dashboard/ShowAllOrder/ShowAllOrder/ShowAllOrder';

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
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/addOrder">
          <Order />
        </PrivateRoute>
        <Route path="/checkProduct">
          <ServiceList />
        </Route>
        <Route path="/reviewAService">
          <Review />
        </Route>
        <Route path="/addService">
          <AddService />
        </Route>
        <Route path="/checkAllOrder">
          <ShowAllOrder />
        </Route>
        <Route path="/makeAdmin">
          <AddAdmin />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
