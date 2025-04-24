import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import {
  Stack,
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const style = {
  position: "relative",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "50%",
  maxWidth: "1500px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  mt: "70px",
  mb: "10px",
};
const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
};
const leftBoxStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};
const rightBoxStyle = {
  flex: 1,
  borderLeft: "2px solid #e0e0e0",
  paddingLeft: "20px",
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

interface ProductData {
  title: string;
  subtitle: string | null;
  price: number;
  qty: number;
  size: string;
  tag: string;
  category: string;
  color: string;
  image: string | null;
}






const AddProductsNew: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const [title, setTitle] = useState<string | null>(null);
  const [subtitle, setSubtitle] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [size, setSize] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleProductDataSubmit = () => {
    const productData: ProductData = {
      title: title || "",
      subtitle: subtitle || "",
      price,
      qty,
      size: size || "",
      tag: tag || "",
      category: category || "",
      color: color || "",
      image: image || "",
    };
     
    console.log(productData);
    
    const existingProducts = JSON.parse(localStorage.getItem("products") || "[]");
  const updatedProducts = [...existingProducts, productData];
  localStorage.setItem("products", JSON.stringify(updatedProducts));
    // axios.post('/api/products', productData)
    //   .then(response => {
    //     navigate('/products'); // ✅ redirect to Products page
    //   })
    //   .catch(error => console.error('Error:', error));
  
    console.log("Product submitted:", productData);
  
    // Temporary navigation (you can replace this with axios logic above)
    navigate("/ManageProduct"); 
  };

  return (
    <Fragment>
      <Box textAlign="center" p={4}>
        <Typography variant="h4" gutterBottom>
          Counter App
        </Typography>
        <Typography variant="h5" mb={2}>
          Count: {count}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="primary" onClick={handleIncrement}>
            Increment
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDecrement}
          >
            Decrement
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </Stack>
      </Box>
      <Box component="form" sx={style}>
        <Typography variant="h5" gutterBottom>
          Create Product
        </Typography>
        {/* Container for left and right sections */}
        <Box sx={containerStyle}>
          {/* Left Section */}
          <Box sx={leftBoxStyle}>
            <TextField
              label="Product Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="SubTitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              fullWidth
              margin="normal"
              type="number"
            />
            <TextField
              label="Quantity"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              fullWidth
              margin="normal"
              type="number"
            />
            <TextField
              label="Tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Box>

          {/* Right Section */}
          <Box sx={rightBoxStyle}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Select value={category} onChange={handleChange} label="Category">
                <MenuItem value="Shirts">Shirts</MenuItem>
                <MenuItem value="Pants">Pants</MenuItem>
                <MenuItem value="Shoes">Shoes</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Box>
        </Box>

        {/* Image Upload Section */}
        <Box sx={{ width: "100%", mt: 4 }}>
          <Typography variant="h6">Upload Product Image</Typography>
          <input type="file" onChange={handleImageUpload} />
          {image && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="textSecondary">
                Image Preview:
              </Typography>
              <img
                src={image}
                alt="Product Preview"
                style={{ width: "100%", maxWidth: "300px" }}
              />
            </Box>
          )}
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
            width: "100%",
          }}
        >

          <Button
            type="submit"
            variant="contained"
            onClick={handleProductDataSubmit} // Corrected to "onClick"
          >
            Upload Product
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};
export default AddProductsNew;
