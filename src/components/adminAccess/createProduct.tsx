import React, { useState, useEffect } from "react";
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
  Container,
} from "@mui/material";



interface FormValues {
  title: string;
  description: string;
  price: number;
  quantity: number;
  tags: string;
  category: string;
  color: string;
  image: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

interface CreateProductProps {
  onClose: () => void;
}

const CreateProduct: React.FC<CreateProductProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormValues>({
    title: "",
    description: "",
    price: 0,
    quantity: 0,
    tags: "",
    category: "",
    color: "",
    image: "",
  });

  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const [newCategoryName, setNewCategoryName] = useState("");
  const [showCategoryInput, setShowCategoryInput] = useState(false);

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "price" || name === "quantity" ? Number(value) : value,
    }));
  };

  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file); 
      setForm((prev) => ({
        ...prev,
        image: URL.createObjectURL(file), 
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

  

  const fetchCategories = async () => {
    try {
      const base = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000";
      const res = await axios.get(`${base}/api/products/categories`);
      if (res.data.success) {
        setCategories(res.data.categories);
      }
      console.log("categroies: ", res.data);
    } catch (err) {
      console.error("Fetch Categories Error:", err);
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found, please log in");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("price", String(form.price));
    formData.append("quantity", String(form.quantity));
    formData.append("tags", form.tags);
    formData.append("sizes", selectedSize);
    formData.append("colors", selectedColor);
    // formData.append("categoryNameForHomePage", categoryName);
    formData.append("category", JSON.stringify([form.category]));

    if (imageFile) {
      formData.append("image", imageFile);
    } else {
      console.error("No image file selected");
      return;
    }

    try {
      const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000";
      const response = await axios.post(`${BASE_URL}/api/products/product-add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Product added:", response.data);
      await fetchCategories();
      if (onClose) onClose();
      navigate("/dashboard/manageProduct");
    } catch (err: any) {
      console.error("Error adding product:", err.response?.data || err.message);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategoryName.trim()) return;
    try {
      const base = process.env.REACT_APP_API_BASE_URL || "http://localhost:4000";
      const token = localStorage.getItem("token");
      const res = await axios.post(`${base}/api/products/createCategory`, {
  categoryName: newCategoryName, 
}, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
      });
      if (res.data.success) {
        setNewCategoryName("");
        setShowCategoryInput(false);
        await fetchCategories();
      }
    } catch (err) {
      console.error("Error creating category", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  console.log("form.category:", form.category);

  return (
    <Box sx={{ p: 8, mt: "30px" }}>
      <Container maxWidth="lg" sx={{ overflowX: "hidden", px: 2, mt: "20px", }}>
        <Box component="form" onSubmit={handleSubmit} sx={style} >
          <Typography variant="h5" gutterBottom>
            Create Product
          </Typography>

          <Box sx={containerStyle}>
            <Box sx={leftBoxStyle}>
              <TextField name="title" label="Product Name" value={form.title} onChange={handleInputChange} fullWidth margin="normal" error={!!errors.title} helperText={errors.title} />
              <TextField name="description" label="Description" value={form.description} onChange={handleInputChange} fullWidth margin="normal" error={!!errors.description} helperText={errors.description} />
              <TextField name="price" label="Price" type="number" value={form.price} onChange={handleInputChange} fullWidth margin="normal" error={!!errors.price} helperText={errors.price} />
              <TextField name="quantity" label="Quantity" type="number" value={form.quantity} onChange={handleInputChange} fullWidth margin="normal" error={!!errors.quantity} helperText={errors.quantity} />
              <TextField name="tags" label="Tags" value={form.tags} onChange={handleInputChange} fullWidth margin="normal" error={!!errors.tags} helperText={errors.tags} />
            </Box>

            <Box sx={rightBoxStyle}>
              <FormControl fullWidth margin="normal" error={!!errors.category}>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={form.category}

                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, category: e.target.value }))
                  }

                  label="Category"
                >
                  {categories.length === 0 ? (
                    <MenuItem disabled>No categories found</MenuItem>
                  ) : (
                    categories.map((cat: any) => (
                      <MenuItem key={cat.categoryname} value={cat.categoryname}>
                        {cat.categoryname}
                      </MenuItem>
                    ))
                  )}
                </Select>
                {errors.category && (
                  <Typography variant="caption" color="error">
                    {errors.category}
                  </Typography>
                )}


              </FormControl>

              {showCategoryInput ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                  <TextField
                    label="New Category"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    size="small"
                  />
                  <Button onClick={handleAddCategory} size="small" variant="contained">Save</Button>
                  <Button onClick={() => setShowCategoryInput(false)} size="small">Cancel</Button>
                </Box>
              ) : (
                <Button onClick={() => setShowCategoryInput(true)} variant="outlined" size="small" sx={{ mt: 1 }}>
                  ➕ Add New Category
                </Button>
              )}

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
                  Image view:
                </Typography>
                <img src={form.image} alt="Product Preview" style={{ width: "100%", maxWidth: "300px" }} />
              </Box>
            )}
          </Box>


          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Button type="submit" variant="contained" size="large" sx={{ px: 5, py: 1.5 }}>
              Upload Product
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateProduct;

const style = {
  position: "relative",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "90%",
  maxWidth: "1200px",
  bgcolor: "background.paper",
  boxShadow: 4,
  p: 4,
  borderRadius: 3,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  mt: 8,
  mb: 8,
};

const containerStyle = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  gap: 2,
  width: "100%",
};

const leftBoxStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  paddingRight: "16px",
};

const rightBoxStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  paddingLeft: "16px",
  borderLeft: "2px solid #e0e0e0",
};






