import { Switch, Route, Redirect } from "react-router-dom";
import  Login  from './components/Login';
import  Register  from './components/Register';
import Game from './components/Game';
import HighestScores from './components/HighestScores';

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
    <Route path="/register" component={Register}/> 
    <Route path="/game" component={Game}/>
    <Route path="/highestscores" component={HighestScores}/>
  </Switch>
);