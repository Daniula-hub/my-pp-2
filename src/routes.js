import { Switch, Route, Redirect } from "react-router-dom";
import  Login  from './components/Login';
import  Register  from './components/Register';
import Game from './components/Game';

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
    <Route path="/game" component={Game}/> 
    <Route path="/register" component={Register}/> 
  </Switch>
);