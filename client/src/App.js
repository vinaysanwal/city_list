import React, {Fragment, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';


//Redux 

import { Provider } from 'react-redux';
import store from './store'
import setAuthToken from './utils/setAuthToken';
import {loadUser} from './actions/auth';
import Dashboard from './components/layout/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute'


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  
  return (
  <Provider store={store}>
   <Router>
    <Fragment>
    <Navbar />
       <Route exact path="/" component={Landing} />
       <Alerts />
       <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
       </Switch>
   </Fragment> 
  </Router>
  </Provider>
  )};

export default App;
