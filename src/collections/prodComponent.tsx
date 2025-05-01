import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCardList = ({ productsDescription, onClick }) => {
  return (
    <Box style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {productsDescription.map((product) => (
         <Card key={product.id} sx={{ width: 280, border: "1px solid #ddd", p: 1 }}>
         <CardActionArea onClick={() => onClick(product)}> 
           <CardMedia
             component="img"
             height="180"
             image={product.image[0]}
             alt={product.productName}
           />
           <CardContent>
             <Typography variant="h6">{product.title}</Typography>
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
  );
};

export default ProductCardList;
