import { Row, Col, Breadcrumb, Image, ListGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { listOfProductDetails } from '../actions/productAction';
import Notification from './Notification';
import Rating from './Rating';

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listOfProductDetails(match.params.id));
  }, [match, dispatch]);

  return (
    <>
      <Row className='my-3'>
        <Col md={12}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to='/'>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      {loading ? (
        <h4>Loading product...</h4>
      ) : error ? (
        <Notification variant='danger'>{error}</Notification>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
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
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
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
                    <strong>
                      {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block btn-primary'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductDetail;
