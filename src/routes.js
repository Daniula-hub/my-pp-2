import { Switch, Route } from "react-router-dom";
import  Login  from './components/Login';
import Home from './components/Home';

export default (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/home" component={Home} />
      
    </Switch>
  );