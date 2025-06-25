import React, { useState } from "react";
import { Typography, Modal, Box } from "@mui/material";
import BreadcrumbsNav from "../helper/bredacrumbNavigation.tsx";
import ProductCardThumbnails from "../collections/prodComponent.tsx";
import productsDescription from "../Assets/DataFiles/productDescription.ts";
import ProductOverview from "../Layouts/productOverview.tsx";

const addTocartStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
};

const NewArrivals: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  
  const handlePreviewOpen = (product: any) => {
    setSelectedProduct(product);
    setPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setSelectedProduct(null);
    setPreviewOpen(false);
  };

  

  return (
    <Box sx= {{alignItems: "center"}}>
      <BreadcrumbsNav />

      <Typography variant="h4" gutterBottom sx={{ ml: "20px", mt: "30px" }}>
        New Arrivals
      </Typography>

      <ProductCardThumbnails
        productsDescription={productsDescription}
        onClick={handlePreviewOpen} 
      />

      <Modal
        open={previewOpen}
        onClose={handlePreviewClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
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
    </Box>
  );
};

export default NewArrivals;
