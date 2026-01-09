import useFetch from "../utils/useFetch";
import "./ProductList.css";

function ProductList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products"); //Fetch data using the custom hook defined

  if (loading) return <h2 id="loading">Loading products....</h2>; //If loading is true

  if (error) return <h2 id="error">{error}</h2>; // If there is error

  return (
    <div className="product-list">
      <h2 id="Heading">ShoppyGlobe</h2>
      <div className="product-display">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            {/*Using map function to display the products from fetched data*/}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="image"
            />
            <h3 className="title">{product.title}</h3>
            <h3 className="category">{product.category}</h3>
            <h3 className="price">{product.price}</h3>
            <h4 className="description">{product.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
