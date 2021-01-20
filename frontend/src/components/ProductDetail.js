import { Row, Col, Breadcrumb, Image, ListGroup, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../products";
import Rating from "./Rating";

const ProductDetail = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <>
      <Row className="my-3">
        <Col md={12}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                reviews={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price: € {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card className="border-light">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? "In stock" : "Out of stock"}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                  <Button className="btn-block btn-primary" type="button" disabled={product.countInStock === 0 }>Add to cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
