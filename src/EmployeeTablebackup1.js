import React, { Component } from 'react';
import { Container, Row, Col,Badge, Table } from 'reactstrap';
import CreateEmployee from './CreateEmployeeForm'
import getListName from './getListName';
import getListItems from './getListItems'

class EmployeeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Employees: []
        };
    }

    componentDidMount() {
        getListName('Test Emp').then(r => this.setState({Title:r.d.Title}));
        getListItems('Test Emp').then(r => this.setState({Employees:r}));
    }

    updateNew = (emp) =>{
        this.setState({Employees:this.state.Employees.concat(emp)});
    }
    render() {
        const employees =  this.state.Employees.map((item, key) =>
        <tr key={item.ID}>
            <th scope="row">{item.ID}</th>
            <td>{item.Title}</td>
            <td>{item.Department}</td>
            <td>{item.Designation}</td>
        </tr>
        );
        return  (
            <Container>
            <Row>
              <Col>
                {/* <h1>List Name <Badge color="secondary">{this.state.Title}</Badge></h1> */}
                <h1>Employee Details</h1>
                    <Table>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees}
                            </tbody>          
                    </Table>               
               {/* <CreateEmployee updateEmployees={this.updateNew}> </CreateEmployee> */}
              </Col>
            </Row>
            </Container>

                    
        )
    }
}

export default EmployeeTable;