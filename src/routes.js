import { Switch, Route, Redirect } from "react-router-dom";
import  LogIn  from './components/LogIn';
import  LogOut  from './components/LogOut';
import  Register  from './components/Register';
import Game from './components/Game';
import HighestScores from './components/HighestScores';
import Metrics from './components/Metrics';

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
    <Route exact path="/login" component={LogIn} />
    <Route path="/logout" component={LogOut} />
    <Route path="/register" component={Register}/> 
    <Route path="/game" component={Game}/>
    <Route path="/highestscores" component={HighestScores}/>
    <Route path="/metrics" component={Metrics}/>
  </Switch>
);