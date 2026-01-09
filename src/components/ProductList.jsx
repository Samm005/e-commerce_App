import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products"); //Fetch data using the custom hook defined

  if (loading) return <h2 id="loading">Loading products....</h2>; //If loading is true

  if (error) return <h2 id="error">{error}</h2>; // If there is error

  return (
    <div className="product-list">
      <h2 id="Heading">ShoppyGlobe</h2>

      <div className="products-grid">{/*Using link so that the product is clickable*/}
        {data.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="image"
            />
            <h3 className="title">{product.title}</h3>
            <h3 className="category">{product.category}</h3>
            <h3 className="price">${product.price}</h3>
            <h4 className="description">{product.description}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
