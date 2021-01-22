import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from 'axios'
import Product from "./Product";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios('/api/products');
      setProducts(data);
    }

    getProducts();

  }, [])

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
