import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = (props) => {
  return ( 
    <Container fluid>
      <Row className='justify-content-md-center mt-5'>
        <Col md='auto'>
          <h1 className='header text-center mb-4'>Home Page</h1>
          <div class='content-div'>
    
          </div>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Home;