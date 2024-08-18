import { useState, useEffect, React } from 'react';
import axios from 'axios';
import './HomeStyle.css';
import { FaShoppingCart } from 'react-icons/fa';

function ProductPage() {
  let [result, setResult] = useState();

  const loadData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setResult(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="background-section">
        <h2 className="heading">Browse And Find Your Needs</h2>
        <div className="product-grid">
          {result?.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="cart-icon">
                  <FaShoppingCart />
                </div>
              </div>
              <h2 className="product-title">{product.title}</h2>
              <h2 className="product-price">${product.price}</h2>
              <p className="product-description">
                {product.description}
              </p>
              <h3 className="product-rating">{product.rating.rate} Stars</h3>
              <h3 className="product-responses">{product.rating.count} Responses</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;

