import React from 'react';
import DesignFirmForm from './DesignFirmForm';
import { Container, Row, Col, Card } from 'react-bootstrap';

const DesignYourFirm = (props) => {
  return ( 
    <Container fluid>
      <Row className="justify-content-md-center mt-5">
        <Col>
          <h1 className="header text-center mb-4">Design Your Firm</h1>
          <div class="content-div">
            <Col md={{ span: 4, offset: 4 }}>
              <Card>
                <Card.Body>
                  It's time to design your firm! With your team, work through each section below. When you're ready, click Confirm Design to lock your selections in.
                </Card.Body>
              </Card>
            </Col>
            <DesignFirmForm/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
 
export default DesignYourFirm;