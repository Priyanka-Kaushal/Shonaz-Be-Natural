import {
  Box,
  Container,
  TableContainer,
  Button,
  TableHead,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Modal,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateProduct from "./createProduct.tsx";
import ProductOverview from "../../Layouts/productOverview.tsx";



const ManageProductItems: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]); // Store products from localStorage
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
 const [selectedColor, setSelectedColor] = useState<string>("");
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    fetchProducts(); // Refresh product list after modal closes
  };

  const handlePreviewOpen = (product) => {
    setSelectedProduct(product);
    setPreviewOpen(true);
  };

  const handlePreviewClose = () => setPreviewOpen(false);

  const fetchProducts = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(storedProducts);
  };

  // delete products
  const deleteProduct = (productToDelete) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) =>
          product.title !== productToDelete.title ||
          product.price !== productToDelete.price // Add more fields if needed to ensure uniqueness
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts)); // Update localStorage
      return updatedProducts;
    });
  };

  // const productOverviewData = () => {};

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
    <Box sx={{ ml: 2}}>
      <Typography variant="h6" gutterBottom sx={{ mt: 10, ml: 2 }}>
        Manage Products
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2, mt: 2, ml: 2 }}>
        <Button variant="contained" onClick={handleOpen}>
          Add New Product
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={addTocartStyle}>
          <CreateProduct onClose={handleClose} />
        </Box>
      </Modal>

      {/* <Modal open={open} onClose={handleClose}>
        <Box sx={addTocartStyle}>
          <CreateProduct />
        </Box>
      </Modal> */}

      <TableContainer sx = {{alignItems: "center",
        justifyContent:"center"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell> Category </TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              {/* size */}
              <TableCell>Variant</TableCell>  
              {/* color */}
              <TableCell>Color</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((productitem, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={productitem.image}
                    alt="Product"
                    width={50}
                    height={50}
                  />
                </TableCell>
                <TableCell>{productitem.title}</TableCell>
                <TableCell> Category: {productitem.category} </TableCell>
                <TableCell>${productitem.price}</TableCell>
                <TableCell>QTY: {productitem.qty}</TableCell>
                <TableCell>Size: {productitem.size}</TableCell>
                <TableCell>Color: {productitem.color}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ mr: 1 }}
                    onClick={() => deleteProduct(productitem)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handlePreviewOpen(productitem)}
                  >
                    Product Overview
                  </Button>

                  <Modal
                    sx={{ display: "flex", gap: 2, mb: 2, ml: 2 }}
                    open={previewOpen}
                    onClose={handlePreviewClose}
                  >
                    <Box sx={addTocartStyle}>
                      {selectedProduct && (
                        <ProductOverview
                          product={selectedProduct}
                          onClose={handlePreviewClose}
                        />
                      )}
                    </Box>
                  </Modal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Container>
  );
};

export default ManageProductItems;

const addTocartStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 1,
  width: "80%",
  maxWidth: "1200px",
  height: "auto",
  overflowY: "auto",
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
};


