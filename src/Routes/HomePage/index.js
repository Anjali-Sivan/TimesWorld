import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Forms from '../../Components/Forms';
import Illustration from '../../Assets/Images/Illustration.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const HomePage = () => {

  return (
    <Container className='home-page-container'>
      <Row className='home-page-row mt-3' gutter={66}>

        <Col lg={6} md={6} sm={12} xs={12}>
          <Forms />
        </Col>

        <Col lg={6} md={6} className="d-none d-md-block text-center d-flex  align-items-right justify-content-end">
          <Image src={Illustration} alt="Illustration" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
