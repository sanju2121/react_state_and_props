import logo from './logo.svg';
import './App.css';
import CountCtrl from './count';
import { Col, Container, Row } from 'react-bootstrap';
import ListCtrl from './List';
import CountPropsCtrl from './count/props';

function App() {
  return (
    <>
    <Container fluid className='text-center'>
      <Row>
        <Col sm="3">
          <CountCtrl/>
          <hr/>
          <CountPropsCtrl/>
        </Col>
        <Col sm="3">
        <ListCtrl/>
        </Col>
      </Row>
    </Container>
    
    </>
  );
}

export default App;
