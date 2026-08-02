import { useState } from "react"

export function ProductCard({ title, price, rating, inStock }) {
  const [addtocart, setAddToCart] = useState(null);

  return(
    <>
      <h2>{title}</h2>
      <p>₹{price}</p>
      <p>⭐ Rating: {rating}/5</p>
      <p>{inStock === true ? "✅ In Stock" : "❌ Out of Stock"}
      </p>
      <button onClick={() => setAddToCart(!addtocart)}>{addtocart ? "Remove From Cart" : "Add to Cart"}</button>
    </>
  )
};

/* Look at line number 21. If a varibale already a boolean you don't need to write "true" in the ternary operator.
export function ProductCard({ title, price, rating, inStock }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>₹{price}</p>
      <p>⭐ Rating: {rating}/5</p>
      <p>{inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
    </div>
  );
}
*/