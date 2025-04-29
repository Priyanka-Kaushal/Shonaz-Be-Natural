import { Typography, Box, Card, CardMedia, CardContent, CardActionArea, Link } from "@mui/material";
import React from "react";
// Assuming you have the correct path to your product data file
import productsDescription, { Product } from "../../src/Assets/DataFiles/productDescription.tsx";
import BreadcrumbsNav from "../helper/bredacrumbNavigation.tsx";


const NewArrivals: React.FC = () => {
  return (
    <> 
    <div>
    <BreadcrumbsNav /> 
    </div>
       
       <div>
       <Typography variant="h4" gutterBottom sx ={{ml: "20px", mt: "20px"}}>New Arrivals</Typography>
       </div>
      

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        mt={3}
      >
        {productsDescription.map((product: Product) => (
          <Card key={product.id} sx={{ width: 280 }}>
            <CardActionArea component={Link} to={`/product/${product.id}`}>
              <CardMedia
                component="img"
                height="180"
                image={product.image[0]} // Accessing the first image if it's an array
                alt={product.productName}
              />
              <CardContent>
                <Typography variant="h6">{product.productName}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="subtitle1" color="text.primary">
                  ₹{product.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default NewArrivals;

