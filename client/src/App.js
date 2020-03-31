import React from 'react';
import './App.css';
import Login from './components/login/login';
import Navigation from './components/navigation/navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './components/private_route/private_route';
import AdminRoute from './components/private_route/admin_route';
import Signup from './components/signup/signup';
import AdminDashboard from './components/dashboard/adminDashboard';
import { HomePage } from './components/home/home';


function App() {
  return (
    <Router>
    <Navigation />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        </Switch>
    </Router>
  );
}

export default App;