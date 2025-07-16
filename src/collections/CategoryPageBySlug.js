import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../layoutsOfPages/ProductCard.tsx";
import axios from "axios";
import { Typography, Box } from "@mui/material";
import FilterSort from "../Layouts/FilterAndSorting.tsx";
import BreadcrumbsNav from "../helper/bredacrumbNavigation.tsx";
import LazyLoad from "react-lazyload";

const CategoryPage = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/category/products/category/${slug}`
        );
        console.log("Fetched products:", res.data);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching category products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [slug]);

  if (loading) return <p>Loading products...</p>;

  return (
    <Box>
      <Box p={3}>
        <FilterSort />
        <Box sx={{ mt: "50px" }}>
          <Typography variant="h4" gutterBottom>
            {slug.replace(/-/g, " ")}
          </Typography>

          <BreadcrumbsNav />
        </Box>

        <Box
          className="product-pages"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {products.length > 0 ? (
            products.map((product) => (
              <LazyLoad
                key={product._id || product.id}
                height={400}
                offset={100}
                once
                placeholder={
                  <div
                    style={{ width: 380, height: 400, background: "#f3f3f3" }}
                  />
                }
              >
                <ProductCard
                  key={product._id || product.id}
                  product={product}
                />
              </LazyLoad>
            ))
          ) : (
            <p>No products found in this category</p>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryPage;
