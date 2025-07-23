import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import { Box, Typography, Button, Divider, useTheme} from "@mui/material";
import axios from "axios";

const ProductOverview = ({ product: productProp, onClose }) => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(productProp || null);
  const [loading, setLoading] = useState(!productProp);

  useEffect(() => {
    if (productProp) return;

    if (!id) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/products/product/${id}`);
        setProduct(res.data.product);
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, productProp]);

  const AddToCartProduct = () => {
    if (!product) return;

    const stored = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const index = stored.findIndex((item) => item._id === product._id);

    if (index > -1) {
      if (stored[index].quantity < product.available) {
        stored[index].quantity += 1;
      }
    } else {
      stored.push({
        _id: product._id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        available: product.quantity,
        sizes: product.sizes?.[0] || "N/A",
        deliveryDate: product.deliveryDate || "in 7 days",
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(stored));
    navigate("/view-cart");
  };

  if (loading) return <Typography textAlign="center" mt={8}>Loading...</Typography>;
  if (!product) return <Typography textAlign="center" mt={8}>Product not found</Typography>;



  return (
  <Box
    sx={{
       minHeight: "90%",
      pl: 2,
      pr: 2,
      pt: 2,
      pb: 2,
      maxWidth: "1200px",
      mx: "auto",
      display: "flex",
      flexDirection: "coloumn",
      gap: 3,
      alignItems: "flex-start",
      mt: "80px",
     borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[2],
      position:"relative",
       backgroundColor: theme.palette.background.paper,
    }}
  >
   
    <Box
      sx={{
        flex: 0.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      {[...Array(3)].map((_, index) => (
        <img
          key={index}
          src={product.image || product.images?.[0]?.url}
          alt={`${product.title}-${index}`}
          style={{
            width: "220px",
            height: "180px",
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: theme.shape.borderRadius,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        />
      ))}
    </Box>

    <Box
      sx={{
        flex: 1.6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={product.image || product.images?.[0]?.url}
        alt={product.title}
        style={{
          width: "110%",
          maxWidth: "460px",
    height: "560px",
    overflow: "hidden",
          objectFit: "cover",
          objectPosition: "top",
          borderRadius: theme.shape.borderRadius,
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        }}
      />
    </Box>

    <Box sx={{ flex: 1.4, width: "100%", maxWidth: "400px", color: theme.palette.primary.main, px: { xs: 2, md: 0 } }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary.main} fontWeight={600}>
        ₹{product.price}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" color = {theme.palette.primary.main} gutterBottom>
        <strong>Size:</strong> {product.sizes?.join(", ") || "N/A"}
      </Typography>
      <Typography variant="body1"  color = {theme.palette.primary.main}  gutterBottom>
        <strong>Color:</strong> {product.colors?.join(", ") || "N/A"}
      </Typography>
      <Typography variant="body2" color = {theme.palette.primary.main} >
        <strong>Available:</strong> {product.quantity}
      </Typography>

      <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button variant="contained" color="primary" onClick={AddToCartProduct}>
          Add to Cart
        </Button>
        {onClose && (
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Close
          </Button>
        )}
      </Box>
    </Box>
  </Box>

  );
};

export default ProductOverview;

