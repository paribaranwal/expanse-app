import './App.css';
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import ExpanseTracker from './expanse-tracker';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Spend from './spend';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav
            activeKey="/dashboard"
          >
            <Nav.Item>
              <Nav.Link href="/dashboard">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/spend">Spend</Nav.Link>
            </Nav.Item>
          </Nav>
        </header>
        <Container fluid>
          <Row>
            <Col>
              <Routes>
                  <Route exact path="/" element={<Navigate to="/dashboard" />} />
                  <Route exact path="/dashboard" element={<ExpanseTracker />} />
                  <Route path="/spend" element={<Spend />} />
              </Routes>
            </Col>
          </Row>
      </Container>
      </div>
    </Router>
  );
}

export default App;
