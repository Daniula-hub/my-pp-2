import { Switch, Route, Redirect } from "react-router-dom";
import  Login  from './components/Login';
import  Register  from './components/Register';
import Home from './components/Home';

export default (
  <Switch>
    <Route
      exact
      path="/"
      render={() => {
          return (
            <Redirect to="/login" />
          )
      }}
    />
    <Route exact path="/login" component={Login} />
    <Route path="/home" component={Home}/> 
    <Route path="/register" component={Register}/> 
  </Switch>
);