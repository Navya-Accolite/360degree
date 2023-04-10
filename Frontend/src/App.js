import React from 'react'
import Login from './Components/Login';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './Components/Register';
import FeedbackReceived from './Components/FeedbackReceived';
import FeedbackGiven from './Components/FeedbackGiven';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path={["/","/login"]} exact component = {Login} ></Route>
        <Route path="/register" exact component = {Register} ></Route>
        <Route path="/dashboard" exact component = {ListEmployeeComponent} ></Route>
        <Route path="/received" exact component = {FeedbackReceived} ></Route>
        <Route path="/given" exact component = {FeedbackGiven} ></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
