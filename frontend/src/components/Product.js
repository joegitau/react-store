import { Card, CardImg } from "react-bootstrap";
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <>
      {
        <Card className="my-3 p-3 card border-primary">
          <a href={`/product/${product._id}`}>
            <CardImg src={product.image}></CardImg>
          </a>
          <Card.Body>
            <a href={`/product/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </a>
            
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
