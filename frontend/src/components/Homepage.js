import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';

import { listOfProducts } from '../actions/productAction';
import Notification from './Notification';
import Product from './Product';

const Homepage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listOfProducts());
  }, [dispatch]);

  // const products = []
  return (
    <>
      <Row>
        <h1 className='my-2'>Latest products</h1>
      </Row>
      {loading ? (
        <h3>loading prodcuts...</h3>
      ) : error ? (
        <Notification variant="danger">{error}</Notification>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homepage;
