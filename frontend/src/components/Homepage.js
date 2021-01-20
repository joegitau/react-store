import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import products from "../products";

const Homepage = () => {
  return (
    <>
      <Row>
        <h1 className="my-2">Latest products</h1>
      </Row>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homepage;
