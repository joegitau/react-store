import { Card, CardImg } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <>
      {
        <Card className="my-3 p-3 card border-primary">
          <Link to={`/products/${product._id}`}>
            <CardImg src={product.image}></CardImg>
          </Link>
          <Card.Body>
            <Link to={`/products/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
            
            <Card.Text as="div">
              <Rating rating={product.rating} reviews={`${product.numReviews} reviews`} />
            </Card.Text>

            <Card.Text as="h3">€ {product.price}</Card.Text>
          </Card.Body>
        </Card>
      }
    </>
  );
};

export default Product;
