import React from 'react';
import { Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import FormHelpIcon from './FormHelpIcon';
import '../css/designFirmForm.css';

const DesignFirmForm = (props) => {
  return ( 
    <Form>
      <Row className="mt-5 justify-content-center">
        <Col md={{ span: 4, offset: 1 }}>
          <h3 className="header">Identity</h3>

          <Form.Group as={Row} className="mb-3" controlId="formFirmName">
            <Form.Label column sm={3}>Firm Name:</Form.Label>
            <Col sm={7}>
              <Form.Control type="text" placeholder="Enter firm name here" />
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formFirmTagline">
            <Form.Label column sm={3}>Firm Tagline:</Form.Label>
            <Col sm={7}>
              <Form.Control type="text" placeholder="Enter firm tagline here" />
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formFirmValues">
            <Form.Label column sm={3}>Firm Values:</Form.Label>
            <Col sm={7}>
              <Form.Control type="text" placeholder="Enter top 3 values here" />
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formNumOfPartners">
            <Form.Label column sm={4}>Number of Partners:</Form.Label>
            <Col sm={6}>
              <Form.Control type="number" value={1}/>
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>
        </Col>
        <Col md={{ span: 4, offset: 1 }}>
          <h3 className="header">Specialization</h3>

          <Form.Group as={Row} className="mb-3" controlId="formExpertise">
            <Form.Label column sm={2}>Expertise:</Form.Label>
            <Col sm={8}>
              <FloatingLabel
                label="Routine"
                className="float-start">
              </FloatingLabel> 
              <FloatingLabel
                label="Unique"
                className="float-end me-5 pe-3">
              </FloatingLabel> 
              <Form.Range className="mt-2 pb-2 custom-range" />
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className="mb-3" controlId="formIndustries">
            <Form.Label column sm={2}>Industries:</Form.Label>
            <Col sm={4}>
              <Form.Check 
                id="financialServices"
                label="Financial Services"
                className="mt-2"
              />
              <Form.Check 
                id="consumerProducts"
                label="Consumer Products"
                className="mt-2"
              />
              <Form.Check 
                id="healthcare"
                label="Healthcare"
                className="mt-2"
              />
              <Form.Check 
                id="industrials"
                label="Industrials"
                className="mt-2"
              />                                                                                    
              </Col>
              <Col sm={4}>
                <Form.Check 
                  id="nonProfit"
                  label="Non-profit"
                  className="mt-2"
                />
                <Form.Check 
                  id="lifeSciences"
                  label="Life Sciences"
                  className="mt-2"
                />
                <Form.Check 
                  id="techMediaTelecomm"
                  label="Technology, Media & Telecommunications"
                  className="mt-2"
                />                                                                                   
              </Col>
              <Col sm={2}>
                <FormHelpIcon/>
              </Col>
          </Form.Group>

        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col md={{ span: 6, offset: 5 }}>
          <Button type="button" className="submitButton btn-outline-success">
            Confirm Design
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
 
export default DesignFirmForm;