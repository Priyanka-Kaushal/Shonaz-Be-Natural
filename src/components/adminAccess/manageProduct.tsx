import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  IconButton,
  Stack,
} from "@mui/material";
import ProductOverview from "../../layoutsOfPages/ProductOverview.tsx";
import CreateProduct from "./createProduct.tsx";
import EditIcon from "@mui/icons-material/Edit";
import EditProduct from "./editProduct.tsx";
import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";

const ManageProduct: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:4000/api/products/products"
      );
      if (res.data.success) {
        setProducts(res.data.products);
      } else {
        setError("Failed to load products");
      }
    } catch (err: any) {
      console.error("Error fetching products", err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleProductCreated = async (newProductId) => {
    handleClose();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.get(
        `http://localhost:4000/api/products/product/${newProductId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const newProduct = res.data.product || res.data;
      setProducts((prev) => [...prev, newProduct]);

      await axios.post("http://localhost:4000/api/events/product-created", {
        productId: newProduct._id,
        title: newProduct.title,
        category: newProduct.category,
        price: newProduct.price,
      });

      console.log("Kafka event sent for new product.");
    } catch (error) {
      console.error("Error in product creation or event sending", error);
    }
  };

  const handleNavigate = () => {
    navigate("/dashboard/bannerview");
  };

  const handleCategorySec = () => {
    navigate("/dashboard/categoryListPage");
  };

  const getProduct = async (productToDelete) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:4000/api/products/product-delete/${productToDelete._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setProducts((prev) => prev.filter((p) => p._id !== productToDelete._id));
      console.log("Product deleted");
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const handlePreviewOpen = (prod) => {
    setSelectedProduct(prod);
    setPreviewOpen(true);
  };

  const handlePreviewClose = () => setPreviewOpen(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Typography>Loading products...</Typography>;
  }
  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box p={8}>
      <Typography variant="h4" gutterBottom>
        Manage Products
      </Typography>

      <Button variant="contained" onClick={handleOpen} sx={{ mb: 2 }}>
        Create New Product
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <CreateProduct
            onCreated={handleProductCreated}
            onClose={handleClose}
          />
        </Box>
      </Modal>

      <Button onClick={handleNavigate}>Set Banner Image/Video</Button>

      {/* <Modal open={bannerOpen} onClose={handleBannerClose}>
        <Box sx={modalStyle}>
          <BannerImage onClose={handleBannerClose} />
        </Box>
      </Modal> */}

      <Button onClick={handleCategorySec}>Category Section</Button>

      {/* <Button onClick={handleCategoryOpen}>Category Section</Button>
     
      <Modal open={categorySectionOpen} onClose={handleCategoryClose}>
        <Box sx={modalStyle}>
          <CreateCategorySection onClose={handleCategoryClose} />
        </Box>
      </Modal> */}

      <TableContainer
        component={Paper}
        sx={{ width: "90%", ml: "50px", mr: "50px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={cellStyle}>Image</TableCell>
              <TableCell sx={cellStyle}>Title</TableCell>
              <TableCell sx={cellStyle}>Description</TableCell>
              <TableCell sx={cellStyle}>Price</TableCell>
              <TableCell sx={cellStyle}>Quantity</TableCell>
              <TableCell sx={cellStyle}>Category</TableCell>
              <TableCell sx={cellStyle}>Tags</TableCell>
              <TableCell sx={cellStyle}>Sizes</TableCell>
              <TableCell sx={cellStyle}>Colors</TableCell>
              <TableCell sx={cellStyle}>Created At</TableCell>
              <TableCell sx={cellStyle}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((productItem) => (
              <TableRow key={productItem._id}>
                {/* <TableCell sx={{ width: "150px" }} >
                  <img
                    src={
                      productItem.image?.startsWith("http")
                        ? productItem.image
                        : `http://localhost:9000/shonaz-images/${product.image}`
                    }
                    alt={productItem.title}
                    width={150}
                    height={150}
                    style={{ borderRadius: 8, objectFit: "cover" }}
                    onError={(e) => (e.currentTarget.src = "/default.jpg")}
                  />
                </TableCell > */}

                <TableCell sx={{ width: "150px" }}>
                  <LazyLoad
                    height={150}
                    offset={100}
                    once
                    placeholder={
                      <Box sx={{ height: 150, backgroundColor: "#f0f0f0" }} />
                    }
                  >
                    <img
                      src={
                        productItem.image?.startsWith("http")
                          ? productItem.image
                          : `http://localhost:9000/shonaz-images/${productItem.image}`
                      }
                      alt={productItem.title}
                      width={150}
                      height={150}
                      style={{ borderRadius: 8, objectFit: "cover" }}
                      loading="lazy"
                      onError={(e) => (e.currentTarget.src = "/default.jpg")}
                    />
                  </LazyLoad>
                </TableCell>

                <TableCell sx={cellStyle}>{productItem.title}</TableCell>
                <TableCell sx={cellStyle}>{productItem.description}</TableCell>
                <TableCell sx={cellStyle}>{productItem.price}</TableCell>
                <TableCell sx={cellStyle}>{productItem.quantity}</TableCell>
                <TableCell sx={cellStyle}>
                  {productItem.category && productItem.category.length > 0
                    ? productItem.category
                        .map((cat: any) => cat.categoryname)
                        .join(", ")
                    : "—"}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {(() => {
                    try {
                      const parsedTags = JSON.parse(productItem.tags[0]);
                      return Array.isArray(parsedTags)
                        ? parsedTags.join(", ")
                        : productItem.tags.join(", ");
                    } catch {
                      return productItem.tags.join(", ");
                    }
                  })()}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {(() => {
                    try {
                      const parsedSizes = JSON.parse(productItem.sizes[0]);
                      return Array.isArray(parsedSizes)
                        ? parsedSizes.join(", ")
                        : productItem.sizes.join(", ");
                    } catch {
                      return productItem.sizes.join(", ");
                    }
                  })()}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {(() => {
                    try {
                      const parsedColors = JSON.parse(productItem.colors[0]);
                      return Array.isArray(parsedColors)
                        ? parsedColors.join(", ")
                        : productItem.colors.join(", ");
                    } catch {
                      return productItem.colors.join(", ");
                    }
                  })()}
                </TableCell>

                <TableCell sx={cellStyle}>
                  {new Date(productItem.createdAt).toLocaleString()}
                </TableCell>
                <TableCell
                  sx={{
                    ...cellStyle,
                    display: "flex",
                    gap: 1,
                    justifyContent: "center",
                    mt: "80px",
                    ml: "20px",
                    mb: "80px",
                    mr: "20px",
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handlePreviewOpen(productItem)}
                    sx={{
                      minWidth: 120,
                      borderRadius: 2,
                      textTransform: "none",
                      transition: "all 0.2s",
                      "&:hover": {
                        backgroundColor: "#e3f2fd",
                        borderColor: "#2196f3",
                        color: "#2196f3",
                      },
                    }}
                  >
                    Preview
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={() => getProduct(productItem)}
                    sx={{
                      minWidth: 80,
                      borderRadius: 2,
                      textTransform: "none",
                      boxShadow: "none",
                      transition: "all 0.2s",
                      "&:hover": {
                        backgroundColor: "#d32f2f",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    Delete
                  </Button>

                  <Stack>
                    <IconButton
                      onClick={() => {
                        setSelectedProduct(productItem);
                        setEditOpen(true);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={editOpen} onClose={() => setEditOpen(false)}>
        <Box sx={modalStyle}>
          {selectedProduct && (
            <EditProduct
              product={selectedProduct}
              onClose={() => setEditOpen(false)}
              onUpdate={fetchProducts}
            />
          )}
        </Box>
      </Modal>

      <Modal open={previewOpen} onClose={handlePreviewClose}>
        <Box sx={addToCartStyle}>
          {selectedProduct && (
            <ProductOverview
              product={selectedProduct}
              onClose={handlePreviewClose}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default ManageProduct;

// Styles
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

const addToCartStyle = {
  ...modalStyle,
  width: 700,
};

const cellStyle = {
  textAlign: "center",
  verticalAlign: "middle",
  padding: "16px",
};

const textCell = {
  fontSize: "13px",
  maxWidth: 120,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

const actionCell = {
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
  justifyContent: "center",
  alignItems: "center",
  minWidth: 80,
};

const buttonStyle = {
  fontSize: "11px",
  padding: "4px 8px",
  borderRadius: "6px",
  textTransform: "none",
  width: "80px",
};
