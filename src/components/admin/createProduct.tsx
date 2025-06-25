import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

// Form values type
interface FormValues {
  title: string;
  subtitle: string;
  price: number;
  qty: number;
  sizes?: string;
  tag: string;
  category: string;
  color: string;
  image: string;
}

interface AddProductsNewProps {
  onClose: () => void;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const AddProductsNew: React.FC<AddProductsNewProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormValues>({
    title: "",
    subtitle: "",
    price: 0,
    qty: 0,
    sizes: "S",
    tag: "",
    category: "",
    color: "",
    image: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "price" || name === "qty" ? Number(value) : value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setForm((prevForm) => ({
        ...prevForm,
        image: imageUrl,
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    (Object.keys(form) as (keyof FormValues)[]).forEach((key) => {
      const value = form[key];
      if (typeof value === "string" && !value.trim()) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
      if (typeof value === "number" && value <= 0) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} must be greater than 0`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("subtitle", form.subtitle);
    formData.append("price", String(form.price));
    formData.append("qty", String(form.qty));
    formData.append("tag", form.tag);
    formData.append("category", form.category);
    formData.append("color", form.color);
    formData.append("size", selectedSize);

    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput && fileInput.files?.length > 0) {
      formData.append("image", fileInput.files[0]);
    }

    try {
      const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000";
      const response = await axios.post(`${BASE_URL}/api/products/product-add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Product added:", response.data);
      onClose();
      navigate("/manage-products");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Fragment>
      <Box component="form" onSubmit={handleSubmit} sx={style}>
        <Typography variant="h5" gutterBottom>
          Create Product
        </Typography>

        <Box sx={containerStyle}>
          <Box sx={leftBoxStyle}>
            <TextField name="title" label="Product Name" value={form.title} onChange={handleInputChange} fullWidth margin="normal" error={!!errors.title} helperText={errors.title} />
            <TextField name="subtitle" label="Subtitle" value={form.subtitle} onChange={handleInputChange} fullWidth margin="normal" error={!!errors.subtitle} helperText={errors.subtitle} />
            <TextField name="price" label="Price" type="number" value={form.price} onChange={handleInputChange} fullWidth margin="normal" error={!!errors.price} helperText={errors.price} />
            <TextField name="qty" label="Quantity" type="number" value={form.qty} onChange={handleInputChange} fullWidth margin="normal" error={!!errors.qty} helperText={errors.qty} />
            <TextField name="tag" label="Tag" value={form.tag} onChange={handleInputChange} fullWidth margin="normal" error={!!errors.tag} helperText={errors.tag} />
          </Box>

          <Box sx={rightBoxStyle}>
            <FormControl fullWidth margin="normal" error={!!errors.category}>
              <InputLabel>Category</InputLabel>
              <Select name="category" value={form.category} onChange={handleInputChange} label="Category">
                <MenuItem value="Shirts">Shirts</MenuItem>
                <MenuItem value="Pants">Pants</MenuItem>
                <MenuItem value="Shoes">Shoes</MenuItem>
              </Select>
              {errors.category && (
                <Typography variant="caption" color="error">
                  {errors.category}
                </Typography>
              )}
            </FormControl>

            <Typography variant="body1" sx={{ fontWeight: "bold", mx: 2, mb: 2 }}>
              Size:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {sizes.map((size) => (
                <Button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setForm((prev) => ({ ...prev, sizes: size }));
                  }}
                  variant={selectedSize === size ? "contained" : "outlined"}
                  color={selectedSize === size ? "primary" : "inherit"}
                >
                  {size}
                </Button>
              ))}
            </Box>

            <Typography variant="body1" sx={{ fontWeight: "bold", mt: 3, mx: 2 }}>
              Color:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {colors.map((color) => (
                <Button
                  key={color}
                  onClick={() => {
                    setSelectedColor(color);
                    setForm((prev) => ({ ...prev, color }));
                  }}
                  sx={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    border: selectedColor === color ? "3px solid #000" : "1px solid #ccc",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: "100%", mt: 4 }}>
          <Typography variant="h6">Upload Product Image</Typography>
          <input type="file" onChange={handleImageUpload} />
          {form.image && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="textSecondary">
                Image Preview:
              </Typography>
              <img src={form.image} alt="Product Preview" style={{ width: "100%", maxWidth: "300px" }} />
            </Box>
          )}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4, width: "100%" }}>
          <Button type="submit" variant="contained" size="large">
            Upload Product
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default AddProductsNew;

// Styles
const style = {
  position: "relative",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "90%",
  maxWidth: "1500px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 2,
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
  justifyContent: "flex-start",
  width: "100%",
};

const leftBoxStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

const rightBoxStyle = {
  flex: 1,
  borderLeft: "2px solid #e0e0e0",
  paddingLeft: "20px",
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "2px",
};
