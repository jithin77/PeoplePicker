import React, { Component } from 'react';
import { Media, Row, Col } from 'reactstrap';


class About extends Component {
    render() {
        return (
            <div className="container emp-container">
              <Row >
            <Col>
            <Media>            
            <Media body>
              <Media heading>
                Media heading
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
           </Media>

            </Col>

            </Row>


            </div>
            

        );
    }
}

export default About;