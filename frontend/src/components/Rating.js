import PropTypes from 'prop-types';

const Rating = ({ rating, reviews, color }) => {
  return (
    <div className="rating">
      <div className="my-3">
        <span>
          <i style={{color}}
            className={
              rating >= 1
                ? "fas fa-star"
                : rating >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i style={{color}}
            className={
              rating >= 2
                ? "fas fa-star"
                : rating >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i style={{color}}
            className={
              rating >= 3
                ? "fas fa-star"
                : rating >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i style={{color}}
            className={
              rating >= 4
                ? "fas fa-star"
                : rating >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i style={{color}}
            className={
              rating >= 5
                ? "fas fa-star"
                : rating >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span className="ml-1">{reviews}</span>
      </div>
    </div>
  );
};

Rating.defaultProps = {
    color: '#ffc107'
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating;
