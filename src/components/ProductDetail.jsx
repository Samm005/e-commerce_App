import { useParams, Link } from "react-router-dom";
import useFetch from "../utils/useFetch";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams(); //Get the id from  the URL

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (loading) return <h2 id="loading">Loading products....</h2>; //If loading is true

  if (error)
    return (
      <div className="error-container">
        <h2 id="error">{error}</h2>
        <Link to="/" className="home-btn">
          Go to Home
        </Link>
      </div>
    ); // If there is error

  if (!data || !data.id) {
    return (
      <div className="error-container">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <h2>{data.title}</h2>

      <img
        src={data.thumbnail}
        alt={data.title}
        className="detail-image"
        loading="lazy"
      />

      <p>{data.description || "No description available."}</p>

      <h3>Category: {data.category || "N/A"}</h3>
      <h3>Price: ${data.price}</h3>
      <h3>Rating: ⭐ {data.rating || "N/A"}</h3>
    </div>
  );
}

export default ProductDetail;
