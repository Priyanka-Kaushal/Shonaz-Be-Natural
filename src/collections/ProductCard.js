// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   CardActions,
//   useTheme,
//   Button,
// } from "@mui/material";
// import { Link } from "react-router-dom";

// const BACKEND_URL = "http://localhost:4000";

// const ProductCard = ({ product }) => {
//   const theme = useTheme();

//   const imageSrc =
//     product.images?.[0]?.url
//       ? product.images[0].url.startsWith("http")
//         ? product.images[0].url
//         : BACKEND_URL + product.images[0].url
//       : product.image || "/fallback.jpg";

//   return (
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         width: 360,
//         m: theme.spacing(2),
//         boxShadow: theme.shadows[3],
//         borderRadius: theme.shape.borderRadius,
//         overflow: "hidden",
//         transition: "transform 0.3s ease",
//         "&:hover": {
//           transform: "translateY(-5px)",
//           boxShadow: theme.shadows[8],
//         },
//       }}
//     >
//       <CardMedia
//         component="img"
//         image={imageSrc}
//         alt={product.title}
//         loading="lazy"
//         sx={{
//           height: 250,
//           objectFit: "cover",
//         }}
//       />

//       <CardContent>
//         <Typography variant="h6" fontWeight={700} color="primary">
//           {product.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {product.description?.substring(0, 100)}...
//         </Typography>
//         <Typography variant="subtitle1" fontWeight={600} color="secondary">
//           ₹{product.price?.toLocaleString()}
//         </Typography>
//       </CardContent>

//       <CardActions sx={{ justifyContent: "flex-end" }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="small"
//           component={Link}
//           to={`/product/${product._id}`}
//         >
//           View Details
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default ProductCard;
