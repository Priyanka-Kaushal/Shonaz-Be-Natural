import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import ProductCard from '../layoutsOfPages/ProductCard.tsx';
import LazyLoad from "react-lazyload";

const ProductCardList = ({ slug = 'new-arrivals', limit = 4, onClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsBySlug = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/category/products/category/${slug}`
        );

        if (Array.isArray(res.data)) {
          setProducts(res.data.slice(0, limit));
        } else {
          console.warn('Invalid response format for category products');
          setProducts([]);
        }
      } catch (error) {
        console.error(`Error fetching products for slug "${slug}":`, error);
        setProducts([]);
      }
    };

    fetchProductsBySlug();
  }, [slug, limit]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center',
        paddingBottom: '50px',
      }}
    >
      {products.map((product) => (
         <LazyLoad
  key={product._id || product.id}
  height={400}
  offset={100}
  once
  placeholder={<div style={{ width: 380, height: 400, background: "#f3f3f3" }} />}
>
    <ProductCard
          key={product._id || product.id}
          product={product}
          onClick={() => onClick && onClick(product)}
        />
  </LazyLoad>
       
      ))}
    </Box>
  );
};

export default ProductCardList;
