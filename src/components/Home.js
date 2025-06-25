import React from "react";
import BannerImage from "../Assets/Images/BannerImage.jpg";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Button,
  Card,
  CardActions,
  Typography,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Gallery from "../collections/Gallery";
import IntroductionPage from "./IntroductionPage";
import ProductCardList from "../collections/prodComponent.tsx";
import { useState } from "react";
import productsDescription from "../Assets/DataFiles/productDescription.ts";


const HomePage = () => {
  const navigate = useNavigate();

  // // filter Based on the tags
  // const shopNewInProducts = products.filter((product) =>
  //   product.tags.includes("Shop New In")
  // );

  // // filter Based on the tags
  // const discoverTheNewProducts = products.filter((product) =>
  //   product.tags.includes("Shop New In")
  // );

  const [previewOpen, setPreviewOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("");
  
    const handlePreviewOpen = (product) => {

      setSelectedProduct(product);
      setPreviewOpen(true);
    };
  
    const handlePreviewClose = () => {
      setSelectedProduct(null);
      setPreviewOpen(false);
    };
  

  return (
    <>
      {/* Section One  */}
      <Box sx={{ paddingTop: 0, marginTop: 0 }}>
      <section className="BannerImage">
        <CardMedia
          component="img"
          sx={{
            height: "100%px",
            width: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          image={BannerImage}
          alt="BannerImage"
          onClick={() => {
            navigate("/shop/new-arrivals");
          }}
        />
      </section>
      </Box>


      {/* Section two of the page */}
      <section>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          SHOP NEW IN
        </Typography>

         {/*  i want only four products as per the hieghest rating and best selling product */}
                 <ProductCardList
                  productsDescription={productsDescription}
                  onClick={handlePreviewOpen}
                />
        

      </section>

      <section className="section-gallery-products">
        <Gallery />
      </section>

      <section>
        <IntroductionPage />
      </section>

      <section>
        <CardMedia
          component="img"
          sx={{
            height: "100%px", // Adjusted height
            width: "100%",
            objectFit: "cover",
            cursor: "pointer", // Indicates clickable behavior
          }}
          image={BannerImage}
          alt="BannerImage"
          onClick={() => {
            // Redirect logic for "New Arrivals" page
            console.log("Discover the new arrivals");
          }}
        />
      </section>

      {/* Discover the new arrivals  */}

      <section>
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          DISCOVER THE NEW ARRIVALS
        </Typography>

        {/* SHOP New IN - 4 products visible  through filter the best selling product and show on the home page */}
        <Box display=" flex">
       
{/* i want here only 4 products   the new best arraival prodcut through tags */}
            <ProductCardList
                  productsDescription={productsDescription}
                  onClick={handlePreviewOpen}
                />
        </Box>
      </section>

      {/* About us */}
      <section>
        <Typography> About US </Typography>
      </section>

      <section>About our Company</section>
    </>
  );
};

export default HomePage;
