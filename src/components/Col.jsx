import Col from "react-bootstrap/Col";

function Column(props) {
  return <Col md={props.md}>{props.children}</Col>;
}

export default Column;
