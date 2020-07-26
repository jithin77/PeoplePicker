import React, { Component } from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import ReactDataGrid from 'react-data-grid';
import {Link} from "react-router-dom";
import getListItems from '../Services/getListItems'

class EmployeeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Employees: null
        };
        this.initColumnDefs();
    }
    

    componentDidMount() {
        //getListName('Test Emp').then(r => this.setState({Title:r.d.Title}));
         this.getEmployees();
        //  this.setState(
        //     {Employees: [{Title:"Jithin",Department:"IT",Desigation:"TL"}]}
        //  );
    }

    getEmployees = () => {
        getListItems('Test Emp').then(r => {
            //console.log(r);
            this.setState({
                Employees: r
            })
        });
    }


    itemViewFormatter =(props) => {
        //return <Link to={`/createEmployeeForm/${props.dependentValues.Id}`}></Link>;
        //console.log(props.dependentValues.Id);
        //return <a href="/createEmployeeForm">{props.value}</a>
        return <Link className="table-anchor" to={`/createEmployeeForm/view/${props.dependentValues.Id}`}>{props.value}</Link>

        
       };
    
    handleClick = () => {
        alert();
        this.props.history.push("/CreateEmployeeForm");
    }
    // updateNew = (emp) =>{
    //     this.setState({Employees:this.state.Employees.concat(emp)});
    // }

    initColumnDefs = () => {
        this._columns = [
            {
                key: 'Id',
                name: 'Item ID'
            },
            {
                key: 'Title',
                name: 'Name',
                formatter: this.itemViewFormatter,
                getRowMetaData: (row) => row
            },
            {
                key: 'Department',
                name: 'Department'
            },
            {
                key: 'Designation',
                name: 'Designation'
            }
        ];
    };
    rowGetter = (i) => {
        return this.state.Employees[i];
    }

    render() {
        let comp;
        
        //console.log(this.state.Employees);
        if(this.state.Employees) {
            console.log(this.state.Employees);
            comp = <ReactDataGrid
            columns={this._columns}
            rowGetter={this.rowGetter}
            rowsCount={this.state.Employees.length} 
             minHeight={800} 
             isScrolling={false}
            />
        } else {
            comp = <div className="spinner-loading">
                <Spinner type="grow"  color="primary" />
                <Spinner type="grow"  color="primary" />
                <Spinner type="grow"  color="primary" />
                <Spinner type="grow"  color="primary" />
                </div>
        }
        return  (
            <Container className="emp-table-container">
            <Row>
              <Col>
               {comp}
              </Col>
            </Row>
            </Container>                   
        )
    }
}

export default EmployeeTable;