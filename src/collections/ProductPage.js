import { useEffect, useState } from "react";
import ProductCard from "../layoutsOfPages/ProductCard.tsx";
import axios from "axios";
import { Typography, Box } from "@mui/material";
import FilterSort from "../Layouts/FilterAndSorting.tsx";
import BreadcrumbsNav from "../helper/bredacrumbNavigation.tsx";
import LazyLoad from "react-lazyload";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  
  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/products/products`
        );
        console.log("Fetched products:", res.data);
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching category products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <Box>
      <Box p={3}>
        <FilterSort />
        <Box sx={{ mt: "50px" }}>
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
            <Typography>No products found </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AllProducts;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Typography, Box, Pagination, Stack, Card, CardMedia } from "@mui/material";
// import LazyLoad from "react-lazyload";

// const BACKEND_URL = "http://localhost:4000"; // change to your live domain if needed

// const AllImages = () => {
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);

//   const fetchImages = async (pageNumber = 1) => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`${BACKEND_URL}/api/products/image?page=${pageNumber}`);
//       const { images: imageList = [], pagination = {} } = res.data;

//       setImages(imageList);
//       setPage(pagination.page || 1);
//       setTotalPages(pagination.pages || 1);
//     } catch (error) {
//       console.error("Error fetching images:", error);
//       setImages([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchImages(page);
//   }, [page]);

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   if (loading) return <p>Loading images...</p>;

//   return (
//     <Box p={3}>
//       <Typography variant="h5" fontWeight="bold" mb={3}>
//         Uploaded Images
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "flex-start",
//           gap: 2,
//         }}
//       >
//         {images.length > 0 ? (
//           images.map((img) => (
//             <LazyLoad
//               key={img._id}
//               height={250}
//               offset={100}
//               placeholder={<Box sx={{ width: 250, height: 250, background: "#eee" }} />}
//             >
//               <Card sx={{ width: 250, height: 250 }}>
//                 <CardMedia
//                   component="img"
//                   image={img.url || "/fallback.jpg"}
//                   alt="uploaded"
//                   sx={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </Card>
//             </LazyLoad>
//           ))
//         ) : (
//           <Typography>No images found</Typography>
//         )}
//       </Box>

//       <Stack spacing={2} sx={{ mt: 4, alignItems: "center", mb: 10 }}>
//         <Pagination
//           count={totalPages}
//           page={page}
//           onChange={handlePageChange}
//           color="primary"
//           variant="outlined"
//           shape="rounded"
//         />
//       </Stack>
//     </Box>
//   );
// };

// export default AllImages;
