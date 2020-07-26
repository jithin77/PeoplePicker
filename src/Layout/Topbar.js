import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
    
  } from 'reactstrap';

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state ={isOpen:false}
    }

    render() {
        // const [isOpen, setIsOpen] = useState(false);
        const isOpen = this.state.isOpen;
        const toggle = () => this.setState({isOpen:!isOpen});
        return  (

      <Navbar className="navbar" color="red" light expand="md">
         <Link className="navbar-brand" to="/">Employee Management Application</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <Link className="nav-link" to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link create-employee" to="/createEmployeeForm/new">Add Employee</Link>
            </NavItem>            
            <NavItem>             
              <Link className="nav-link" to="/about">About us</Link>                
            </NavItem>
            <NavItem>             
              <Link className="nav-link" to="/people">People Picker</Link>                
            </NavItem>
          </Nav>
          {/* <NavbarText><Link className="create-employee" to="/createEmployeeForm/new">Create Employee</Link></NavbarText> */}
        </Collapse>
      </Navbar>                       
        )
    }
}

export default Topbar;