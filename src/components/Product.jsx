import PropTypes from "prop-types";

const Product = () => {
    return (
        <ProductChild
        price="$109"
        name="laptop" />
    )
}


const ProductChild = (props) => {
  return (
    <div>
        <h2>{props.price}</h2>
        <p>{props.name}</p>
    </div>
  )
}

ProductChild.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};


export default Product