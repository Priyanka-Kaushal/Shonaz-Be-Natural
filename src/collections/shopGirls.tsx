import React from 'react'
import ProductCardList from "../collections/prodComponent.tsx";
import productsDescription from "../Assets/DataFiles/productDescription.ts"
import { Typography } from '@mui/material';

const ShopGirls : React.FC = () => {
  return (
    <div>
    <Typography> Shop For Girls </Typography>
    <ProductCardList productsDescription={productsDescription} />
    </div>
  )
}

export default ShopGirls
