// import { Box, Container, Typography, Button } from "@mui/material";
// import React, { useState } from "react";
// // import productsDescription from "../Assets/DataFiles/productDescription.tsx";
// import firstDressPic from "../Assets/Images/weed2.jpg";

// const ProductOverview: React.FC = () => {
//   // State to handle the selected image and product details
//   const [selectedImage, setSelectedImage] = useState<string>(
//     "https://via.placeholder.com/600x400"
//   ); // Default image
//   const [productDetails, setProductDetails] = useState({
//     title: "Product Title Placeholder",
//     price: "$50",
//     color: "Red",
//     size: "Medium",
//     rating: 4.5,
//     quantity: 10,
//   });

//   // Function to handle image click and update the selected image and details
//   const handleImageClick = (imageUrl: string, details: any) => {
//     setSelectedImage(imageUrl);
//     setProductDetails(details);
//   };

//   const images = [
//     {
//       src: firstDressPic,
//       alt: "Image 2",
//       details: {
//         title: "Product 2",
//         price: "$60",
//         color: "Green",
//         size: "Large",
//         rating: 4.7,
//         quantity: 8,
//       },
//     },
//     {
//       src: firstDressPic,
//       alt: "Image 3",
//       details: {
//         title: "Product 3",
//         price: "$55",
//         color: "Yellow",
//         size: "Medium",
//         rating: 4.2,
//         quantity: 12,
//       },
//     },
//     {
//       src: firstDressPic,
//       alt: "Image 4",
//       details: {
//         title: "Product 4",
//         price: "$45",
//         color: "Black",
//         size: "Small",
//         rating: 4.5,
//         quantity: 3,
//       },
//     },
//     {
//       src: firstDressPic,
//       alt: "Image 5",
//       details: {
//         title: "Product 5",
//         price: "$70",
//         color: "Purple",
//         size: "Large",
//         rating: 4.8,
//         quantity: 7,
//       },
//     },
//   ];

//   return (
//     <Box sx={style}>
//       {/* Right Container: Images in a Column (5 images) */}
//       <Box className="ImageSection" sx={{ display: "flex"}}>
//         {/* Left side - small images */}
//         <Box
//           sx={{
//             width: "25%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           {images.map((image, index) => (
//             <Box key={index} sx={{ marginBottom: 2 }}>
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 onClick={() => handleImageClick(image.src, image.details)}
//                 style={{
//                   width: "100px", // Small thumbnail size
//                   height: "auto",
//                   borderRadius: "8px",
//                   cursor: "pointer",
//                 }}
//               />
//             </Box>
//           ))}
//         </Box>

//         {/* Right side - large selected image */}
//         <Box
//           sx={{
//             width: "100%",
//             height: "20px",
//             // display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {selectedImage && (
//             <img
//               src={selectedImage}
//               alt="Selected Product"
//               style={{
//                 width: "80%",
//                 height: "auto",
//                 borderRadius: "8px",
//               }}
//             />
//           )}
//         </Box>
//       </Box>

//       {/* Right Container: Product Details */}
//       <Container sx={containerStyle}>
//         <Box sx={rightBoxStyle}>
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             {productDetails.title}
//           </Typography>
//           <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//             Price: {productDetails.price}
//           </Typography>
//           <Typography variant="body1">Color: {productDetails.color}</Typography>
//           <Typography variant="body1">Size: {productDetails.size}</Typography>
//           <Typography
//             variant="body2"
//             sx={{ color: "text.secondary", fontWeight: "bold" }}
//           >
//             Rating: {productDetails.rating}
//           </Typography>
//           <Typography variant="body1">
//             Quantity: {productDetails.quantity} in stock
//           </Typography>
//           <Box sx={{ marginTop: "16px" }}>
//             <Button variant="contained" color="primary" size="large">
//               Add to Cart
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ProductOverview;

// const style = {
//   position: "fixed",
//   left: "50%",
//   transform: "translate(-50%, 0)",
//   width: "90%",
//   maxWidth: "1500px",
//   bgcolor: "background.paper",
//   border: "none",
//   boxShadow: 24,
//   p: 4,
//   borderRadius: "8px",
//   display: "flex",
//   justifyContent: "center", // Center the content
//   alignItems: "flex-start",
//   flexDirection: "row", // Column direction for the image container
//   mt: "70px",
//   mb: "10px",
//   // gap: "16px",
// };

// const containerStyle = {
//   display: "flex",
//   justifyContent: "left", // Center the content horizontally
//   width: "100%",
// };

// const largeImageBoxStyle = {
//   flex: 1,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   marginRight: "10px", 
//   maxWidth: "600px", 
//   height: "100%",
// };

// const imageColumnStyle = {
//   display: "flex",
//   flexDirection: "column", // Arrange images in a vertical column
//   // gap: "16px", // Add gap between images
//   width: "100%",
//   maxWidth: "350px", // Adjust as needed
// };

// const imageBoxStyle = {
//   width: "100%",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: " Left",
// };

// const rightBoxStyle = {
//   flex: 1,
//   paddingLeft: "10px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
// };


import { Box, Container, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import firstDressPic from "../Assets/Images/weed2.jpg";

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const ProductOverview: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>(firstDressPic); // Default image
  const [productDetails, setProductDetails] = useState({
    title: "Product Title Placeholder",
    price: "$50",
    color: "Red",
    size: "Medium",
    rating: 4.5,
    quantity: 10,
  });

  const [open, setOpen] = useState(false);

  const handleImageClick = (imageUrl: string, details: any) => {
    setSelectedImage(imageUrl);
    setProductDetails(details);
  };

  const onClose = () => setOpen(false);

  const images = [
    {
      src: firstDressPic,
      alt: "Image 1",
      details: {
        title: "Product 2",
        price: "$60",
        color: "Green",
        size: "Large",
        rating: 4.7,
        quantity: 8,
      },
    },
    {
      src: firstDressPic,
      alt: "Image 2",
      details: {
        title: "Product 3",
        price: "$55",
        color: "Yellow",
        size: "Medium",
        rating: 4.2,
        quantity: 12,
      },
    },
    {
      src: firstDressPic,
      alt: "Image 3",
      details: {
        title: "Product 4",
        price: "$45",
        color: "Black",
        size: "Small",
        rating: 4.5,
        quantity: 3,
      },
    },
    {
      src: firstDressPic,
      alt: "Image 4",
      details: {
        title: "Product 5",
        price: "$70",
        color: "Purple",
        size: "Large",
        rating: 4.8,
        quantity: 7,
      },
    },
  ];

  return (
    <Box sx={{ position: 'relative', ...mainContainerStyle }}>
      {/* Left: Small images */}

      <Box sx={imageColumnStyle}>
        {images.map((image, index) => (
          <Box key={index} sx={thumbnailBoxStyle}>
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(image.src, image.details)}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
                border: "1px solid #ddd",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Center: Large Selected Image */}
      <Box sx={largeImageBoxStyle}>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected Product"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "500px",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        )}
      </Box>

      {/* Right: Product Details */}
      <Box sx={productDetailsStyle}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          {productDetails.title}
        </Typography>
        <Typography variant="h6" mb={1}>
          Price: {productDetails.price}
        </Typography>
        <Typography variant="body1" mb={1}>
          Color: {productDetails.color}
        </Typography>
        <Typography variant="body1" mb={1}>
          Size: {productDetails.size}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Rating: {productDetails.rating} ⭐
        </Typography>
        <Typography variant="body1" mb={3}>
          Quantity: {productDetails.quantity} in stock
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Add to Cart
        </Button>
      </Box>
      <IconButton  className = "closeButton" sx = {{close_button}} onClick={onClose}>
  <CloseIcon />
</IconButton>
    </Box>
  );
};

export default ProductOverview;

// Styles
const mainContainerStyle = {
  display: "flex",
  justifyContent: "space-between", // Proper spacing between three sections
  alignItems: "flex-start",
  gap: "40px", // Consistent gap between columns
  padding: "40px",
  marginTop: "80px",
  flexWrap: "nowrap", // No wrapping; keep in one line
  backgroundColor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  maxWidth: "1200px", // Better than 1500px for modal view
  width: "90%", // Responsive width
  margin: "80px auto 10px auto", // Center horizontally
};

const  close_button =  {
  // mt:1,
  position: 'absolute',
  top: 8,
  left: 8,
  zIndex: 10,
  backgroundColor: 'black',
  boxShadow: 1,
  '&:hover': {
    backgroundColor: '#f0f0f0',
}};


  //   position: "fixed",
  //   left: "50%",
  //   transform: "translate(-50%, 0)",
  //   width: "90%",
  //   maxWidth: "1500px",
  //   bgcolor: "background.paper",
  //   border: "none",
  //   boxShadow: 24,
  //   p: 4,
  //   borderRadius: "8px",
  //   display: "flex",
  //   justifyContent: "center", // Center the content
  //   alignItems: "flex-start",
  //   flexDirection: "row", // Column direction for the image container
  //   mt: "70px",
  //   mb: "10px",
  //   // gap: "16px",
  // };
const imageColumnStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "80px",
};

const thumbnailBoxStyle = {
  width: "80px",
  height: "80px",
};

const largeImageBoxStyle = {
  flex: "1",
  maxWidth: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const productDetailsStyle = {
  flex: "1",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
};
