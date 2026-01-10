import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handlePlaceOrder() {
    dispatch(clearCart());
    alert("Order placed successfully!");
    navigate("/");
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-summary">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <span>{item.title}</span>
            <span>
              {item.quantity} × ${item.price}
            </span>
          </div>
        ))}

        <hr />

        <h3>Total: ${totalAmount.toFixed(2)}</h3>

        <button className="place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
