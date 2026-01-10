import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../utils/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-image" />

      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>

        <div className="quantity-controls">
          <button
            onClick={() => dispatch(decrementQuantity(item.id))}
            disabled={item.quantity === 1}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => dispatch(incrementQuantity(item.id))}>
            +
          </button>
        </div>

        <button
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
