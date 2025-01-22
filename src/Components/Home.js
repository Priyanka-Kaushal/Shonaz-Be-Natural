import React from 'react';
import BannerImage from '../Assets/Images/BannerImage.jpg';
import CardMedia from '@mui/material/CardMedia';
import {Box, Button, Card, CardActions, Typography, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* This image is clickable and redirects to the New Arrivals Page */}
      <CardMedia
      component="img"
      sx={{
        height: '100%px', // Adjusted height
        width: '100%',
        objectFit: 'cover',
        cursor: 'pointer', // Indicates clickable behavior
      }}
      image={BannerImage}
      alt="BannerImage"
      onClick={() => {
        // Redirect logic for "New Arrivals" page
        navigate('/shop/new-arrivals');
      }}
    />






      {/* ...................................................................... */}

      {/* SHOP New IN - 4 products visible */}
      <Typography variant="h5" sx={{ textAlign: 'center', margin: '20px 0' }}>
        4 Items
      </Typography>

      <Box display = " flex">
      {/* Example Card for a product */}
      <Card sx={{ maxWidth: 300, margin: '20px auto' }}>
        <CardMedia
          component="img"
          sx={{
            height: 200, // Adjust height for a better display
            objectFit: 'cover',
          }}
          image={BannerImage}
          alt="Product Image"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: $XX.XX
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary" fullWidth>
            Select Option
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 300, margin: '20px auto' }}>
        <CardMedia
          component="img"
          sx={{
            height: 200, // Adjust height for a better display
            objectFit: 'cover',
          }}
          image={BannerImage}
          alt="Product Image"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: $XX.XX
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary" fullWidth>
            Select Option
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 300, margin: '20px auto' }}>
        <CardMedia
          component="img"
          sx={{
            height: 200, // Adjust height for a better display
            objectFit: 'cover',
          }}
          image={BannerImage}
          alt="Product Image"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: $XX.XX
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary" fullWidth>
            Select Option
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 300, margin: '20px auto' }}>
        <CardMedia
          component="img"
          sx={{
            height: 200, // Adjust height for a better display
            objectFit: 'cover',
          }}
          image={BannerImage}
          alt="Product Image"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: $XX.XX
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary" fullWidth>
            Select Option
          </Button>
        </CardActions>
      </Card>
      </Box>


      {/* 4-Image Collage */}
      <Box style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
          padding: '10px',
        }}>

<CardMedia
          component="img"
          image={BannerImage}
          alt="Collage Image 1"
          sx={{
            height: 400,
            width:'100%',
            objectFit: 'cover',
          }}
        />
        <CardMedia
          component="img"
          image={BannerImage}
          alt="Collage Image 2"
          sx={{
            height: 400,
            width:'100%',
            objectFit: 'cover',
          }}
        />
        <CardMedia
          component="img"
          image={BannerImage}
          alt="Collage Image 3"
          sx={{
            height: 400,
            width:'100%',
            objectFit: 'cover',
          }}
        />
        <CardMedia
          component="img"
          image={BannerImage}
          alt="Collage Image 4"
          sx={{
            height: 400,
            width:'100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Introducing Shonaz  */}

      <Box>
        <Typography> Introducing Shonaz</Typography>
      </Box>

      {/* Discover the new arrivals  */}
      <CardMedia
        component="img"
        sx={{
          height: '100%px', // Adjusted height
          width: '100%',
          objectFit: 'cover',
          cursor: 'pointer', // Indicates clickable behavior
        }}
        image={BannerImage}
        alt="BannerImage"
        onClick={() => {
          // Redirect logic for "New Arrivals" page
          console.log('Discover the new arrivals');
        }}
      />

    </>
  );
};

export default HomePage;
