import React from 'react'
import Login from './Components/Login';
import ToDoApp from './Components/ToDoApp'
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './Components/Register';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path={["/","/login"]} exact component = {Login} ></Route>
        <Route path="/register" exact component = {Register} ></Route>
        <Route path="/dashboard" exact component = {ListEmployeeComponent} ></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
