// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   CardMedia,
//   TextField,
//   Typography,
//   Button,
//   CircularProgress,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";

// const CategorySection = ({ onClose }) => {

//   // this is for image category field
//   const [categoryImage, setCategoryImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   // this is for input category field
//   const [categoryName, setCategoryName] = useState("");


// const [categories, setCategories] = useState([]);
//   const [newCategoryName, setNewCategoryName] = useState("");
//   const [showCategoryInput, setShowCategoryInput] = useState(false);
//   const [form, setForm] = useState({ category: "" });
//   // const [errors, setErrors] = useState({});

//   const navigate = useNavigate();

//   useEffect(() => {
//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/api/categary/homePage-categories");
//       console.log("Fetched categories:", res.data); 
//       const categoryList = Array.isArray(res.data.homePageCategories)
//         ? res.data.homePageCategories
//         : [];

//       setCategories(categoryList);
//     } catch (err) {
//       console.error("Failed to fetch homepage categories:", err);
//     }
//   };

//   fetchCategories();
// }, []);

//   const handlechangeOfcategory = (event) => {
//       const selectedSlug = event.target.value;
//       console.log("slected slug: ", selectedSlug);
//       const selectedCategory = categories.find(cat => cat.slug === selectedSlug);
//        console.log("sselectedCategory: ", selectedCategory);
//       setForm((prev) => ({ ...prev, category: selectedSlug }));
//       setCategoryName(selectedCategory?.categoryname || "");
//   }
  

//   // this is for input category text
//   const handleCategoryChange = (event) => {
//     const name = event.target.value;
//     setCategoryName(name);
//   };
  
// //  this is for image 
//   const handleImageChange = (event) => {
//     const imagefile = event.target.files[0];
//     setCategoryImage(imagefile);
//     setPreviewUrl(URL.createObjectURL(imagefile));
//   };


//   // this is for submission
//   const handleSubmit = async () => {
//     if (!categoryImage || !categoryName.trim()) {
//       toast.error("Please add both image and category name.");
//       return;
//     }


//     const formData = new FormData();
//     formData.append("image", categoryImage);
//     formData.append("categoryNameForHomePage", categoryName);
//     // formData.append("category", JSON.stringify([form.category]));

//     const createCategory = async(createCat) =>{
//         try {
//       setUploading(true);
//       const token = localStorage.getItem("token");

//       const res = await axios.post(
//         "http://localhost:4000/api/categary/createHomePageCategory",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (res.data.success) {
//         toast.success("Category created successfully!");
//         onClose?.();
//         navigate("/dashboard/categoryListPage");
//       } else {
//         toast.error(res.data.message || "Unknown error occurred");
//       }
//     } catch (error) {
//       console.error("Upload failed:", error);
//       toast.error("Failed to upload category.");
//     } finally {
//       setUploading(false);
//     }
//   };


//     }

   

//   return (
//     <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
//       <Typography variant="h6" gutterBottom>
//         Create Category
//       </Typography>

//       <TextField
//         label="Category Name"
//         fullWidth
//         value={categoryName}
//         onChange={handleCategoryChange}
//         sx={{ mb: 2 }}
//       />

//    {/* <FormControl fullWidth margin="normal">
//   <InputLabel>Select Category</InputLabel>
//   <Select
//     value={form.category}
//     onchange={handlechangeOfcategory}
//     label="Select Category"
//   >
//     {Array.isArray(categories) && categories.length > 0 ? (
//       categories.map((cat) => (
//         <MenuItem key={cat.slug} value={cat.slug}>
//           {cat.categoryname} — {cat.slug}
//         </MenuItem>
//       ))
//     ) : (
//       <MenuItem disabled>No categories found</MenuItem>
//     )}
//   </Select>
// </FormControl> */}



//       <input
//         accept="image/*"
//         type="file"
//         onChange={handleImageChange}
//         style={{ marginBottom: "16px", marginTop: "16px" }}
//       />

//       {previewUrl && (
//         <CardMedia
//           component="img"
//           src={previewUrl}
//           sx={{ width: "100%", height: 300, objectFit: "cover", objectPposition: "top", mb: 2 }}
//         />
//       )}

//       <Button
//         variant="contained"
//         color="primary"
//         disabled={uploading}
//         onClick={handleSubmit}
//         fullWidth
//       >
//         {uploading ? <CircularProgress size={24} /> : "Create Category"}
//       </Button>
//     </Box>
//   );
// };

// export default CategorySection;
import React, { useEffect, useState } from "react";
import {
  Box,
  CardMedia,
  TextField,
  Typography,
  Button,
  CircularProgress,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CategorySection = ({ onClose }) => {
  const [categoryImage, setCategoryImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ category: "" });
  const [useCustomCategory, setUseCustomCategory] = useState(false);

  const navigate = useNavigate();

  // Fetch categories
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:4000/api/categary/homePage-categories"
  //       );
  //       const categoryList = Array.isArray(res.data.homePageCategories)
  //         ? res.data.homePageCategories
  //         : [];
  //       setCategories(categoryList);
  //     } catch (err) {
  //       console.error("Failed to fetch homepage categories:", err);
  //     }
  //   };

  //   fetchCategories();
  // }, []);
useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/category/homePage-categories"
      );
      console.log("Fetched categories:", res.data);

  
      const categoryList = Array.isArray(res.data.categories)
        ? res.data.categories
        : [];

      setCategories(categoryList);
    } catch (err) {
      console.error("Failed to fetch homepage categories:", err);
    }
  };

  fetchCategories();
}, []);


  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setCategoryImage(imageFile);
    setPreviewUrl(URL.createObjectURL(imageFile));
  };


  const handleToggleCategoryInput = (event) => {
    setUseCustomCategory(event.target.checked);
    setCategoryName(""); 
    setForm({ category: "" });
  };


  const handleChangeOfCategory = (event) => {
    const selectedSlug = event.target.value;
    const selectedCategory = categories.find(
      (cat) => cat.slug === selectedSlug
    );
    setForm({ category: selectedSlug });
    setCategoryName(selectedCategory?.categoryname || "");
  };


  const handleCategoryChange = (event) => {
    setCategoryName(event.target.value);
  };

  
const handleSubmit = async () => {
  if (!categoryImage) {
    toast.error("Please upload an image.");
    return;
  }


  const isCreatingNew = useCustomCategory;

  if (isCreatingNew && !categoryName.trim()) {
    toast.error("Please enter category name.");
    return;
  }

  if (!isCreatingNew && !form.category) {
    toast.error("Please select a category.");
    return;
  }

  const formData = new FormData();
  formData.append("image", categoryImage);

  if (isCreatingNew) {
    formData.append("categoryNameForHomePage", categoryName);
  } else {
    formData.append("selectedCategorySlug", form.category); 
  }

  try {
    setUploading(true);
    const token = localStorage.getItem("token");

    const res = await axios.post(
      "http://localhost:4000/api/category/createHomePageCategory",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.success) {
      toast.success("Category image added successfully!");
      onClose?.();
      navigate("/dashboard/categoryListPage");
    } else {
      toast.error(res.data.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Upload failed:", error);
    toast.error("Failed to upload category image.");
  } finally {
    setUploading(false);
  }
};

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h6" gutterBottom>
        Create Category
      </Typography>

      <FormControlLabel
        control={
          <Switch
            checked={useCustomCategory}
            onChange={handleToggleCategoryInput}
            color="primary"
          />
        }
        label="Create new category instead of selecting"
        sx={{ mb: 2 }}
      />

      {useCustomCategory ? (
        <TextField
          label="New Category Name"
          fullWidth
          value={categoryName}
          onChange={handleCategoryChange}
          sx={{ mb: 2 }}
        />
      ) : (
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Category</InputLabel>

          <Select
  value={form.category}
  onChange={handleChangeOfCategory}
  label="Select Category"
>
  {categories.length > 0 ? (
    categories.map((cat) => (
      <MenuItem key={cat.slug} value={cat.slug}>
        {cat.categoryname} — {cat.slug}
      </MenuItem>
    ))
  ) : (
    <MenuItem disabled>No categories found</MenuItem>
  )}
</Select>

        </FormControl>
      )}

      <input
        accept="image/*"
        type="file"
        onChange={handleImageChange}
        style={{ marginBottom: "16px", marginTop: "16px" }}
      />

      {previewUrl && (
        <CardMedia
          component="img"
          src={previewUrl}
          sx={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            objectPosition: "top",
            mb: 2,
          }}
        />
      )}

      <Button
        variant="contained"
        color="primary"
        disabled={uploading}
        onClick={handleSubmit}
        fullWidth
      >
        {uploading ? <CircularProgress size={24} /> : "Create Category"}
      </Button>
    </Box>
  );
};

export default CategorySection;
