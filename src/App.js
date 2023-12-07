import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TodoForm from './components/Form/TodoForm';
import TodoTable from './components/Table/TodoTable';

function App() {
  return (
    <Container>
      <Row className='mt-4'>
        <Col md={6}>
          <TodoForm />
        </Col>
        <Col md={6}>
          <TodoTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
