import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <img src={product.thumbnail} alt={product.title} className="image" />
        <h3 className="title">{product.title}</h3>
      </Link>

      <h3 className="category">{product.category}</h3>
      <h3 className="price">${product.price}</h3>

      <button
        className="add-to-cart-btn"
        onClick={() => dispatch(addToCart(product))} // Adds product to cart
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
