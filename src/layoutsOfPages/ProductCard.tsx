import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  useTheme,
  Button,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import { lazy } from "react";

const ProductCard = ({ product }) => {
  const theme = useTheme();

  return (
    <Container className = "ProductCards" sx = {{mt: "20px"}}>

 
    <Card
      sx={{
        display: "flex",
        flexDirection: "column", 
        width: 380,
        margin: "20px auto",
        boxShadow: theme.shadows[3],
        borderRadius: theme.shape.borderRadius,
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: theme.shadows[8],
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image || "/fallback.jpg"}
        alt={product.title}
       loading="lazy"
        sx={{
          height: 250,
          width: "100%",
          objectFit: "cover",
          objectPosition: "top",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />

      <CardContent >
        <Typography
          variant="h6"
          component="h2"
          fontWeight={700}
          sx={{ color: theme.palette.primary.main, mb: 0.5 }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 0.16, minHeight: 48, lineHeight: 1.4 }}
        >
          {product.description.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description}
        </Typography>

        <Typography
          variant="subtitle1"
          color={theme.palette.secondary.main}
          fontWeight={600}
        >
          ₹{product.price.toLocaleString()}
        </Typography>

        {/* <Typography variant="caption" color="text.secondary">
          Rating: {product.rating ?? "N/A"}
        </Typography> */}
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end", px: 2}}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          component={Link}
          to={`/product/${product.id || product._id}`}
          sx={{
            fontWeight: 600,
            textTransform: "none",
            borderRadius: theme.shape.borderRadius,
            boxShadow: "none",
            "&:hover": {
              boxShadow: theme.shadows[6],
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
       </Container>
  );
};

export default ProductCard;