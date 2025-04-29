import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from '@mui/material';


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
  sizes: string[];
  tag: string;
  category: string;
  color: string;
  image: string;
}

// Errors type (partial because not every field may have an error)
type FormErrors = Partial<Record<keyof FormValues, string>>;

const AddProductsNew: React.FC = () => {
  const navigate = useNavigate();

  // Form state and errors state
  const [form, setForm] = useState<FormValues>({
    title: "",
    subtitle: "",
    price: 0,
    qty: 0,
    sizes: ["S", "M", "L", "XL"],
    tag: "",
    category: "",
    color: "",  // Make sure to initialize color as well
    image: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  // Colors array
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"];

  // Handle field change
  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  // ) => {
  //   const name = e.target.name as keyof FormValues;
  //   const value = e.target.value as string;

  //   setForm((prevForm) => ({
  //     ...prevForm,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (
    e: SelectChangeEvent<string> // This ensures the event is typed correctly for Select components
  ) => {
    const { name, value } = e.target;
  
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  

  // Handle image upload
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

  // Validation function
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

    // Debugging log
    console.log('Validation Errors:', newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Debugging log
    console.log('Form Submit Triggered:', form);

    if (!validate()) return;

    const existingProducts = JSON.parse(localStorage.getItem("products") || "[]");
    localStorage.setItem("products", JSON.stringify([...existingProducts, form]));

    // Debugging log
    console.log('Redirecting to ManageProduct');
    navigate("/manage-products");
  };

  return (
    <Fragment>
      <Box component="form" onSubmit={handleSubmit} sx={style}>
        <Typography variant="h5" gutterBottom>
          Create Product
        </Typography>

        <Box sx={containerStyle}>
          {/* Left side */}
          <Box sx={leftBoxStyle}>
            <TextField
              name="title"
              label="Product Name"
              value={form.title}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.title}
              helperText={errors.title}
            />
            <TextField
              name="subtitle"
              label="Subtitle"
              value={form.subtitle}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.subtitle}
              helperText={errors.subtitle}
            />
            <TextField
              name="price"
              label="Price"
              type="number"
              value={form.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.price}
              helperText={errors.price}
            />
            <TextField
              name="qty"
              label="Quantity"
              type="number"
              value={form.qty}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.qty}
              helperText={errors.qty}
            />
            <TextField
              name="tag"
              label="Tag"
              value={form.tag}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.tag}
              helperText={errors.tag}
            />
          </Box>

          {/* Right side */}
          <Box sx={rightBoxStyle}>
            <FormControl fullWidth margin="normal" error={!!errors.category}>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={form.category}
                onChange={handleChange}
                label="Category"
              >
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

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold", mx: 2, mb: 2}}>
                  Size:
                </Typography>

                <Box sx = {{display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1}} >
                  {sizes.map((size, index) => (
                    <Button
                      key={index}
                      onClick={() => {
                        setSelectedSize(size);
                        setForm((prev) => ({ ...prev, size: size }));
                      }}
                      variant={selectedSize === size ? "contained" : "outlined"}
                      color={selectedSize === size ? "primary" : "inherit"}
                      sx={{
                        margin: "3px",
                        padding: "10px",
                        minWidth: "50px",
                        fontWeight: "bold",
                        borderColor: selectedSize === size ? "primary.main" : "grey.400",
                        "&:hover": {
                          borderColor: "primary.main",
                          backgroundColor: selectedSize === size
                            ? "primary.dark"
                            : "action.hover",
                        },
                      }}
                    >
                      {size}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box>

              <Typography variant="body1" sx={{ fontWeight: "bold", mx: 2, }}>
                Color:
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1 }}>
                {colors.map((color, index) => (
                  <Button
                    key={index}
                    onClick={() => {
        setSelectedColor(color);
        setForm((prev) => ({ ...prev, color: color })); // Update color in form state
      }}
                    sx={{
                      mx: 8,
                      width: "80px",
                      height: "50px",
                      backgroundColor: color,
                      margin: "5px",
                      padding: "10px",
                      border:
                        selectedColor === color
                          ? "2px solid #000"
                          : "1px solid #ccc",
                    }}
                  >
                    {selectedColor === color ? " " : ""}
                  </Button>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Image Upload */}
        <Box sx={{ width: "100%", mt: 4 }}>
          <Typography variant="h6">Upload Product Image</Typography>
          <input type="file" onChange={handleImageUpload} />
          {form.image && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="textSecondary">
                Image Preview:
              </Typography>
              <img
                src={form.image}
                alt="Product Preview"
                style={{ width: "100%", maxWidth: "300px" }}
              />
            </Box>
          )}
        </Box>

        {/* Submit Button */}
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
    // gap: "16px",
  };
  const rightBoxStyle = {
    flex: 1,
    borderLeft: "2px solid #e0e0e0",
    paddingLeft: "20px",
    marginLeft: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap:"2px"
  };
