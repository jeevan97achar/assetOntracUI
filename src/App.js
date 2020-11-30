import logo from './logo.svg';
import './App.css';
import SideNav from './Components/Navigation/SideNav'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Users from './Components/Pages/SystemAdmin/Users'
import Profile from './Components/Pages/SystemAdmin/Profile'
import SignIn from './Components/Pages/SignIn/SignIn'


function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={SideNav} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
