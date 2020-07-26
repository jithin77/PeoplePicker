import React from 'react';
import './App.css';
import Topbar from './Layout/Topbar'
import EmployeeTable from './Components/EmployeeTable';
import About from './Components/Aboutus.js'
import CreateEmployeeForm from './Components/CreateEmployeeForm'
import PeoplePicker from './Components/PeoplePicker'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">           
            <Topbar/>
            <Switch>
                <Route path="/" exact component={EmployeeTable}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/createEmployeeForm/:mode" exact component={CreateEmployeeForm}></Route>
                <Route path="/createEmployeeForm/:mode/:id" exact component={CreateEmployeeForm}></Route>
                <Route path="/EmployeeTable" component={EmployeeTable}></Route>
                <Route path="/people" component={PeoplePicker}></Route>
            </Switch>              
        </div>
    </Router>
  );
}

export default App;
