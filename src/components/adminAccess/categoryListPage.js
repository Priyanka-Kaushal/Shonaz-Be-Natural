// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   CardMedia,
//   CardContent,
//   CircularProgress,
//   Button,
//   Modal,
//   IconButton,
//   Card,
// } from "@mui/material";
// import CreateCategorySection from "../adminAccess/CreateCategorySection.js";
// import toast from "react-hot-toast";
// import { Delete, CheckCircleOutline } from "@mui/icons-material";
// import { useTheme } from "@mui/material/styles";
// import { useParams } from "react-router-dom";

// const CategoryListPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categorySectionOpen, setCategorySectionOpen] = useState(false);
//   const theme = useTheme();

//   const {slug} = useParams();

//

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/api/categary/homePage-categories");
//       if (res.data.success) {
//         setCategories(res.data.categories);
//       }
//     } catch (error) {
//       console.error("Failed to fetch categories", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:4000/api/categary/delete-category-section/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       toast.success("Category Section is Deleted");
//       fetchCategories();
//     } catch (error) {
//       toast.error("Failed to delete Category Home page Container");
//       console.error(error);
//     }
//   };

//   const handleSelect = async (id) => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.patch(
//         `http://localhost:4000/api/categary/select-category/${id}`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       if (res.data.message === "Category selected successfully") {
//   toast.success("Category selected!");
//   fetchCategories();
// } else {
//   toast.error("Failed to select Category!");
// }

//     } catch (err) {
//       toast.error("Failed to select Category.");
//       console.error(err);
//     }
//   };

//   useEffect(() => {

//      const fetchCategory = async () => {
//       try {
//         const res = await axios.get(`http://localhost:4000/api/category/${slug}`);
//         if (res.data.success) {
//           setCategories(res.data.category);
//         } else {
//           setCategories(null);
//         }
//       } catch (error) {
//         console.error("Failed to fetch category", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  CircularProgress,
  Button,
  Modal,
  IconButton,
  Card,
} from "@mui/material";
import toast from "react-hot-toast";
import CreateCategorySection from "../adminAccess/CreateCategorySection.js";
import { Delete, CheckCircleOutline } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
  maxHeight: "85vh",
  overflowY: "auto",
};

const CategoryListPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categorySectionOpen, setCategorySectionOpen] = useState(false);
  const theme = useTheme();

  const handleCategoryOpen = () => setCategorySectionOpen(true);
  const handleCategoryClose = () => setCategorySectionOpen(false);

  const handleSelect = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.patch(
        `http://localhost:4000/api/categary/select-category/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.data.message === "Category selected successfully") {
        toast.success("Category selected!");
        fetchCategories();
      } else {
        toast.error("Failed to select Category!");
      }
    } catch (err) {
      toast.error("Failed to select Category.");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:4000/api/category/delete-category-section/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Category Section is Deleted");
      fetchCategories();
    } catch (error) {
      toast.error("Failed to delete Category Home page Container");
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/category/homePage-categories"
      );
      if (res.data.success) {
        setCategories(res.data.categories);
      }
    } catch (error) {
      console.error("Failed to fetch categories", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" mt={8}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: "90%", margin: "auto", mt: 8, mb: 12 }}>
      <Typography variant="h4" textAlign="center" mb={4}>
        Homepage Categories
      </Typography>
      <Button variant="contained" color="primary" onClick={handleCategoryOpen}>
        Category Section
      </Button>
      <Modal open={categorySectionOpen} onClose={handleCategoryClose}>
        <Box sx={modalStyle}>
          <CreateCategorySection onClose={handleCategoryClose} />
        </Box>
      </Modal>
      <Button variant="contained" color="primary" onClick={handleCategoryOpen}>
        Back
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          width: "100%",
          [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "30px",
          },
        }}
      >
        {categories
          .filter((category) => category.image && category.image.trim() !== "")
          .map((category) => (
            <Card
              key={category._id}
              sx={{
                width: 250,
                position: "relative",
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                image={category.image}
                alt={category.categoryname}
                sx={{
                  height: 400,
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ backgroundColor: "#f9f9f9" }}>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    textTransform: "capitalize",
                    color: "#333",
                    fontWeight: "bold",
                  }}
                >
                  {category.categoryname}
                </Typography>
              </CardContent>

              {category.selected && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "green",
                    color: "#fff",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  Selected
                </Box>
              )}

              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  right: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "8px",
                  borderRadius: 2,
                }}
              >
                <Button
                  size="small"
                  variant="outlined"
                  disabled={category.selected}
                  onClick={() => handleSelect(category._id)}
                  startIcon={<CheckCircleOutline />}
                  sx={{ color: "#fff", borderColor: "#fff" }}
                >
                  {category.selected ? "Selected" : "Select"}
                </Button>

                <IconButton
                  color="error"
                  onClick={() => handleDelete(category._id)}
                  sx={{ color: "#fff" }}
                >
                  <Delete />
                </IconButton>
              </Box>
            </Card>
          ))}
      </Box>
    </Box>
  );
};

export default CategoryListPage;
