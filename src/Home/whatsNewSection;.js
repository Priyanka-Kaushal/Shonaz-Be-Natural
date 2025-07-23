import BannerImage from "../Assets/Images/BannerImage.jpg";

import { Box, Typography, Button, Paper, CardMedia, useTheme } from '@mui/material';
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const WhatsNewSection = () => {
   const theme = useTheme();
   const navigate = useNavigate();


  const ImageContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "33%",
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "300px",
    },
  }));



  return (
    <Box alignContent = "center" sx={{ p: 4, margin: "auto",
  width: "70%",
  padding: "10px",
  color: theme.palette.primary.main }}>
     <Typography
                  component="span"
                  variant="h1" gutterBottom
                >
        What’s New?
      </Typography>

  
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          position: 'relative', 
        }}
      >
<ImageContainer sx = {{height: "50%", width: "50%"}}>                
   <CardMedia
          component="img"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius:theme.shape,
          }}
          image={BannerImage}
          alt="Product Image"
        />
      </ImageContainer>
        <Paper
          elevation={6}
          sx={{
            p: 3,
            flex: 1,
            position: "absolute",
            zIndex: 2,
            left: "45%",
            top: "80%",      
            transform: "translateY(-50%)",
            width: "50%",
            bgcolor: "white",
          }}
        >

          <Box sx = {{color: theme.palette.primary.main,}}>
            <Typography variant="h3"  gutterBottom sx = {{mb: 3}}>
            Organic cotton with hand block prints
          </Typography>
          <Typography variant="body1" gutterBottom sx = {{mb: 3}}>
            We’ve got a full selection of the latest styles for organic cotton fabric curated with traditional hand block printing!
          </Typography>
          </Box>
          
          <Button variant="contained" color="primary" onClick={() => navigate("/collection/indian-western")}>
            Shop Now
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default WhatsNewSection;
