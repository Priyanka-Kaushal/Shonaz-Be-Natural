// import React, { useEffect, useState } from "react";

// interface ProductData {
//   title: string;
//   subtitle: string | null;
//   price: number;
//   qty: number;
//   size: string;
//   tag: string;
//   category: string;
//   color: string;
//   image: string | null;
// }

// const ProductsPage: React.FC = () => {
//   const [products, setProducts] = useState<ProductData[]>([]);

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
//     setProducts(storedProducts);
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>All Products</h2>
//       {products.map((product, index) => (
//         <div
//           key={index}
//           style={{
//             border: "1px solid #ddd",
//             padding: "16px",
//             marginBottom: "16px",
//           }}
//         >
//           <h3>{product.title}</h3>
//           <p>{product.subtitle}</p>
//           <p>Price: ₹{product.price}</p>
//           <p>Qty: {product.qty}</p>
//           <p>Category: {product.category}</p>
//           <p>Color: {product.color}</p>
//           <p>Size: {product.size}</p>
//           {product.image && (
//             <img
//               src={product.image}
//               alt="Product"
//               style={{ width: "150px", marginTop: "10px" }}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductsPage;


