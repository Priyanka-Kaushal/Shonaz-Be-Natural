import { TextField, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const EditProduct = ({ product, onClose }) => {
//   const [editValues, setEditValues] = useState({
//     title: product.title,
//     price: product.price,
//     colors: Array.isArray(product.colors) ? product.colors.join(", ") : product.colors,
//     sizes: Array.isArray(product.sizes) ? product.sizes.join(", ") : product.sizes,
//     rating: product.rating ?? 4.5,
//     quantity: product.quantity,
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setEditValues({ ...editValues, [e.target.name]: e.target.value });
//   };

//   const handleSubmitUpdatedProduct = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("token :", token);
//       const updatedPayload = {
//         ...editValues,
//         colors: editValues.colors.split(",").map(c => c.trim()),
//         sizes: editValues.sizes.split(",").map(s => s.trim()),
//       };

//       console.log("logssss edit textfeild :",updatedPayload );

//       const response = await axios.put(
//         `http://localhost:4000/api/products/product-update/${product._id}`,
//         updatedPayload,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       console.log("Product updated:", response.data);

//       // Close modal and redirect
//       onClose();
//       navigate("/dashboard/manageProduct");
//     } catch (err) {
//       console.error("Error in updating product:", err.response?.data || err);
//     }
//   };

//   return (


const EditProduct = ({ product, onClose, onUpdate }) => {
  const [editValues, setEditValues] = useState({
    title: product.title,
    price: product.price,
    colors: Array.isArray(product.colors) ? product.colors.join(", ") : product.colors,
    sizes: Array.isArray(product.sizes) ? product.sizes.join(", ") : product.sizes,
    rating: product.rating ?? 4.5,
    quantity: product.quantity,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const handleSubmitUpdatedProduct = async () => {
    try {
      const token = localStorage.getItem("token");
      const updatedData = {
        ...editValues,
        colors: editValues.colors.split(",").map((c) => c.trim()),
        sizes: editValues.sizes.split(",").map((s) => s.trim()),
      };

      await axios.put(
        `http://localhost:4000/api/products/product-update/${product._id}`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );


      onUpdate();
      onClose();
       navigate("/dashboard/manageProduct");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Title"
        name="title"
        value={editValues.title}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={editValues.price}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Colors (comma-separated)"
        name="colors"
        value={editValues.colors}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Sizes (comma-separated)"
        name="sizes"
        value={editValues.sizes}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="categoryname (comma-separated)"
        name="categoryname"
        value={editValues.categoryname}
        onChange={handleChange}
        fullWidth
      />
      {/* <TextField
        label="Rating"
        name="rating"
        type="number"
        value={editValues.rating}
        onChange={handleChange}
        fullWidth
      /> */}
      <TextField
        label="Quantity"
        name="quantity"
        type="number"
        value={editValues.quantity}
        onChange={handleChange}
        fullWidth
      />

      <Button onClick={handleSubmitUpdatedProduct} variant="contained" color="primary">
        Save Updated Product
      </Button>
    </Box>
  );
};

export default EditProduct;
