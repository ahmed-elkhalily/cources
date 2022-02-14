import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <Container className="border border-primary h-100">
      <Row className="">
        <Col className="border">
          <div className="ms-4">أهلا وسهلا</div>
        </Col>
        <Col className="border">
          <div className="ms-4">أهلا وسهلا</div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
