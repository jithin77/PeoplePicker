import React, { Component } from 'react'
import {   Col, Row, Form, FormGroup, Label, Input} from 'reactstrap';

function initializePeoplePicker(peoplePickerElementId, AllowMultipleValues, PeopleorGroup, GroupID) {  
    // Create a schema to store picker properties, and set the properties.  
    var schema = {};  
    schema['SearchPrincipalSource'] = 15;  
    schema['ResolvePrincipalSource'] = 15;  
    schema['MaximumEntitySuggestions'] = 50;  
    schema['Width'] = '280px';  
    schema['AllowMultipleValues'] = AllowMultipleValues;  
    if (PeopleorGroup === 'PeopleOnly') schema['PrincipalAccountType'] = 'User';  
    else schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';  
    if (GroupID > 0) {  
        schema['SharePointGroupID'] = GroupID  
    }  
    // Render and initialize the picker.  
    // Pass the ID of the DOM element that contains the picker, an array of initial  
    // PickerEntity objects to set the picker value, and a schema that defines  
    // picker properties.  
    //console.log(this)
    window.SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);  
}  

export class PeoplePicker extends Component {

    constructor(props){
        super();
    }
componentDidMount(){
    initializePeoplePicker('peoplepicker', false, 'People Only', 44);
}

    

    render() {
       
        return (
            <Row className="container emp-container">
                <Form >
                    <Row form>
                      <Col md={12}>
                        <FormGroup>
                          <Label for="fullname">Full Name</Label>
                          <Input type="text" name="Title" placeholder="Enter Full Name" />
                        </FormGroup>
                      </Col>
                <Col md={12}>
                <div id="peoplepicker">
                
                </div>
                </Col>
                </Row>
                </Form>
            </Row>

        )
    }
}

export default PeoplePicker
