import React from 'react'
import ProductCardThumbnails from "../collections/prodComponent.tsx";
import productsDescription from "../Assets/DataFiles/productDescription.ts"
import { Typography } from '@mui/material';

const ShopGirls : React.FC = () => {
  return (
    <div>
    <Typography> Shop For Girls </Typography>
    <ProductCardThumbnails productsDescription={productsDescription} />
    </div>
  )
}

export default ShopGirls
