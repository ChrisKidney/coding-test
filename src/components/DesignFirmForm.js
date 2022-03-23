import React, { useState } from 'react';
import { 
  Row, 
  Col, 
  Form, 
  FloatingLabel, 
  Button 
} from 'react-bootstrap';
import FormHelpIcon from './FormHelpIcon';
import '../css/designFirmForm.css';

const DesignFirmForm = () => {
  // Hooks for form values, wanted to try using React Hooks out, figured this was a good opportunity
  const [firmName, setFirmName] = useInput('');
  const [firmTagline, setFirmTagline] = useInput('');
  const [firmValues, setFirmValues] = useInput('');
  const [numPartners, setNumPartners] = useInput('');
  const [expertise, setExpertise] = useInput('');
  const [industries, setIndustries] = useState([]);

  // List of industries for rendering checkboxes
  const IndustriesList =[
    {id: 'financialServices', label: 'Financial Services'},
    {id: 'consumerProducts', label: 'Consumer Products'},
    {id: 'healthcare', label: 'Healthcare'},
    {id: 'industrials', label: 'Industrials'},
    {id: 'nonProfit', label: 'Non-Profit'},
    {id: 'lifeSciences', label: 'Life Sciences'},
    {id: 'techMediaTelecomm', label: 'Technology, Media & Telecommunications'},
  ]

  // Function for form value hooks, gets value from form input and sets state to value
  function useInput(initialValue){
    const [value,setValue] = useState(initialValue);

    function handleChange(e){
      setValue(e.target.value);    
    }

    return [value,handleChange];
  }

  // Handles the checkboxes, gets value from checked checkbox and adds it to industries array, removes if unchecked
  const handleCheckboxChange = (e) => {
    const { checked, value } = e.currentTarget;

    setIndustries(
      prev => checked
        ? [...prev, value]
        : prev.filter(val => val !== value)
    );
  }

  return( 
    <Form>
      <Row className='mt-5 justify-content-center'>
        <Col md={{ span: 4, offset: 1 }}>
          <h3 className='header'>Identity</h3>

          <Form.Group as={Row} className='mb-3' controlId='formFirmName'>
            <Form.Label column sm={3}>Firm Name:</Form.Label>
            <Col sm={7}>
              <Form.Control 
                type='text' 
                placeholder='Enter firm name here' 
                value={firmName} 
                onChange={setFirmName}/>
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='formFirmTagline'>
            <Form.Label column sm={3}>Firm Tagline:</Form.Label>
            <Col sm={7}>
              <Form.Control 
                type='text' 
                placeholder='Enter firm tagline here' 
                value={firmTagline} 
                onChange={setFirmTagline}/>
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='formFirmValues'>
            <Form.Label column sm={3}>Firm Values:</Form.Label>
            <Col sm={7}>
              <Form.Control 
                type='text' 
                placeholder='Enter top 3 values here' 
                value={firmValues} 
                onChange={setFirmValues}/>
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='formNumOfPartners'>
            <Form.Label column sm={4}>Number of Partners:</Form.Label>
            <Col sm={6}>
              <Form.Control 
                type='number' 
                value={numPartners}
                onChange={setNumPartners}/>
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>
        </Col>
        <Col md={{ span: 4, offset: 1 }}>
          <h3 className='header'>Specialization</h3>

          <Form.Group as={Row} className='mb-3' controlId='formExpertise'>
            <Form.Label column sm={2}>Expertise:</Form.Label>
            <Col sm={8}>
              <FloatingLabel
                label='Routine'
                className='float-start'>
              </FloatingLabel> 
              <FloatingLabel
                label='Unique'
                className='float-end me-5 pe-3'>
              </FloatingLabel> 
              <Form.Range 
                className='mt-2 pb-2 custom-range' 
                value={expertise}
                onChange={setExpertise}/>
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>
          
          <Form.Group as={Row} className='mb-3' controlId='formIndustries'>
            <Form.Label column sm={2}>Industries:</Form.Label>
            <Col sm={4}>
              {IndustriesList.map((item, index) => (
                index<4?
                <Form.Check
                  id={item.id}
                  name={item.id}
                  label={item.label}
                  value={item.label}
                  className='mt-2'
                  onChange={handleCheckboxChange} />
                : null
              ))}
            </Col>
            <Col sm={4}>
              {IndustriesList.map((item, index) => (
                index>=4 ?
                <Form.Check
                  id={item.id}
                  name={item.id}
                  label={item.label}
                  value={item.label}
                  className='mt-2'
                  onChange={handleCheckboxChange} />
                : null
              ))}
            </Col>
            <Col sm={2}>
              <FormHelpIcon/>
            </Col>
          </Form.Group>

        </Col>
      </Row>
      <Row className='mt-5 justify-content-center'>
        <Col md={{ span: 6, offset: 5 }}>
          <Button type='button' className='submitButton btn-outline-success'>
            Confirm Design
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
 
export default DesignFirmForm;