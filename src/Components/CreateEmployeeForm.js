import React, { Component } from 'react';
import {   Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import  { Redirect } from 'react-router-dom' 
import GetDigest from '../Services/GetDigest'
import CreateListItem from '../Services/createListItem'
import GetEmployee from '../Services/getListItembyId'

class CreateEmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        Title: "",
        Department: "",
        Designation: ""
      },
      toDashboard: false,
      mode: "new",
      loaded: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    //console.log("Parameter", this.props.match.params.id);
    if (this.props.match.params.mode === 'view') {
      this.getEmployee();
    } else if (this.props.match.params.mode === 'edit') {
      this.getEmployee();
    }
  }

  componentDidUpdate() {
    if (this.props.match.params.mode === 'new' && this.state.loaded) {
      this.setState({
        employee: {
          Title: "",
          Department: "",
          Designation: ""
        },
        loaded: false
      })
    }
  }

  getEmployee = () => {
    GetEmployee('Test Emp', this.props.match.params.id).then(r => {
      //console.log("Employee Date",r);
      this.setState({
        employee: r,
        loaded: true
      })
    });
  }
  createEmployeeHandler = (e) => {
    e.preventDefault();
    //console.log(this.state.toDashboard);
    GetDigest()
      .then(s => CreateListItem('Test Emp', this.state.employee, s).then(this.setState({
        toDashboard: true
      })));
  }

  // updateEmployees = (employee)=>{      
  //     let picked  = (({ Title, Department, Designation,ID,Id,__metadata }) => ({ Title, Department, Designation,ID,Id,__metadata}))(employee);
  //     console.log("Created emp obj in new btn",picked)
  //     this.props.updateEmployees(picked);
  // }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log("current state", this.state);
    this.setState(prevState => ({
      employee: { // object that we want to update
        ...prevState.employee, // keep all other key-value pairs
        [name]: value // update the value of specific key
      }
    }))
  }

    render() {      
      let createbtn = null;
      if (this.state.toDashboard === true) {
        return <Redirect to='/EmployeeTable' />
      }
      if(this.props.match.params.mode === 'view'){
        createbtn = null; 
      }else{
        createbtn = <Button color="danger" >Create Employee</Button>; 
      }           
      console.log("Initial State", this.state);
      
        return  (        
            <Row className="container emp-container">
            <Col md="12">
            <h2>Employee Information</h2>
            </Col>
            
              <Col  md="12"> 

             <Form onSubmit={this.createEmployeeHandler}>
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="fullname">Full Name</Label>
                          <Input type="text" name="Title" value={this.state.employee.Title} 
                            onChange={this.handleInputChange} 
                            disabled={this.props.match.params.mode === 'view'? true : false} 
                            id="fullname" placeholder="Enter Full Name" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="department">Department</Label>
                          <Input type="text" name="Department" value={this.state.employee.Department}
                            onChange={this.handleInputChange} 
                            disabled={this.props.match.params.mode === 'view'? true : false} id="department"
                             placeholder="Enter your department" />
                        </FormGroup>
                      </Col>
                    </Row>            
                    <Row form>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="designation">Designation</Label>
                          <Input type="text" name="Designation" value={this.state.employee.Designation}
                            onChange={this.handleInputChange} 
                            disabled={this.props.match.params.mode === 'view'? true : false} 
                            id="designation" placeholder="Enter your job designation"/> 
                        </FormGroup>
                      </Col>                    
                    </Row>
                    {createbtn}
                  </Form>         
               
              </Col>
            </Row>                    
        )
    }
}

export default CreateEmployeeForm;