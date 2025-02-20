// import React from "react";
// import { Box, Typography, CardMedia, Link } from "@mui/material";
// import BannerImage from "../Assets/Images/BannerImage.jpg";
// import { useNavigate } from "react-router-dom";


// const FlexBox = styled(Box)(({ theme }) => ({
//   gap: 3,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center'
// }));



// const IntroductionPage = () => {
//   const navigate = useNavigate();
  
//   return (
//     <Box
//       sx={{
//         height: "auto", 
//          margin: "20px 20px 20px 20px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: { xs: "column", sm: "row" }, // Stack on small screens
//         gap: "20px", // Add spacing between items
//         width: "100%",
//         position: "relative", left: "80px",
//       }}
//     >

//       <Flexbox> 
        
//       </Flexbox>
//       {/* Overlapping Images */}
//       <Box
//         sx={{
//           position: "relative",
//           width: { xs: "80%", sm: "30%" }, // Adjust width for smaller screens
//           height: "400px",
//         }}
//       >
//         <CardMedia
//           component="img"
//           sx={{
//             height: "400px",
//             width: "80%",
//             objectFit: "cover",
//             position: "absolute",
//             top: "0",
//             left: "0",
//             zIndex: 1,
//             borderRadius: "8px",
//           }}
//           image={BannerImage}
//           alt="Product Image"
//         />
//         <CardMedia
//           component="img"
//           sx={{
//             height: "300px",
//             width: "50%",
//             position: "absolute",
//             top: "50px",
//             left: "-210px",
//             zIndex: 2,
//             borderRadius: "8px",
//             border: "3px solid white",
//           }}
//           image={BannerImage}
//           alt="Product Image"
//         />
//       </Box>

//       {/* Text Section */}
//       <Box
//         sx={{
//           width: { xs: "90%", sm: "40%" }, // Adjust width for small screens
//           textAlign: { xs: "center", sm: "center" },
//           // position: 'relative',
//     // pr: '80px', // Center text on small screens
//         }}  
//       >
//         <Typography
//           variant="h4"
//           sx={{ mb: "20px", fontWeight: "bold", textAlign: { xs: "center", sm: "left" } }}
//         >
//           Introducing Shonaz
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             lineHeight: "1.6",
//             color: "#555",
//             mb: "40px",
//             textAlign: { xs: "center", sm: "left" },
//           }}
//         >
//           Shonaz is your ultimate destination for premium products that bring
//           style and convenience to your life. Explore our exclusive collection
//           designed to inspire and elevate your daily experience.
//         </Typography>

//         <Link
//           onClick={() => navigate("/SHOPACCESSORIES")}
//           sx={{
//             mt: "20px",
//             color: "black",
//             textDecoration: "underline",
//             fontWeight: "bold",
//             fontSize: "16px",
//             "&:hover": { color: "gray", textDecoration: "underline" },
//             display: "block", // Ensures spacing on small screens
//             textAlign: { xs: "center", sm: "left" },
//           }}
//         >
//           DISCOVER THE COLLECTION
//         </Link>
//       </Box>
//     </Box>
//   );
// };

// export default IntroductionPage;


import React from "react";
import { Box, Typography, CardMedia, Link } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import BannerImage from "../Assets/Images/BannerImage.jpg";


// Reusable Styled Components for Flexbox Layout with Custom Margins
const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: theme.spacing(4),
  width: "100%",
  margin: "50px 80px 50px 80px", // Top, Right, Bottom, Left margin
  [theme.breakpoints.down("md")]: {
    margin: "50px 60px", // Less margin for medium screens
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column", // Stack elements on small screens
    margin: "30px 20px", // Compact margins for small screens
    textAlign: "center",
  },
}));

// Styled Container for Image Section
const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "33%",
  height: "400px",
  [theme.breakpoints.down("sm")]: {
    width: "80%", 
    height: "300px",
  },
}));

// Styled Text Section
const TextContainer = styled(Box)(({ theme }) => ({
  width: "40%",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    textAlign: "center",
  },
}));

const IntroductionPage = () => {
  const navigate = useNavigate();

  return (
    <FlexBox>
      {/* Overlapping Images */}
      <ImageContainer>
        <CardMedia
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          image={BannerImage}
          alt="Product Image"
        />
        <CardMedia
          component="img"
          sx={{
            pl: '40px',
            height: "70%",
            width: "60%",
            position: "absolute",
            top: "15%",
            left: "-20%",
            zIndex: 2,
            borderRadius: "8px",
            border: "3px solid white",
          }}
          image={BannerImage}
          alt="Product Image"
        />
      </ImageContainer>

      {/* Text Section */}
      <TextContainer>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold",  pl: '40px' }}>
          Introducing Shonaz
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6, color: "#555", mb: 3 }}>
          Shonaz is your ultimate destination for premium products that bring
          style and convenience to your life. Explore our exclusive collection
          designed to inspire and elevate your daily experience.
        </Typography>

        <Link
          onClick={() => navigate("/SHOPACCESSORIES")}
          sx={{
            color: "black",
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            "&:hover": { color: "gray" },
          }}
        >
          DISCOVER THE COLLECTION
        </Link>
      </TextContainer>
    </FlexBox>
  );
};

export default IntroductionPage;
