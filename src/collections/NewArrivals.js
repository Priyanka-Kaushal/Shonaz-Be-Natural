import { Typography, Box, Card, CardMedia, CardContent, Button, CardActions } from "@mui/material";
import React from "react";
import BannerImage from '../Assets/Images/BannerImage.jpg';

const NewArrivals = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>New Arrivals</Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {/* Example Card for a product */}
        <Card sx={{ maxWidth: 300, margin: '20px' }}>
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

        <Card sx={{ maxWidth: 300, margin: '20px' }}>
          <CardMedia
            component="img"
            sx={{
              height: 200,
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

        <Card sx={{ maxWidth: 300, margin: '20px' }}>
          <CardMedia
            component="img"
            sx={{
              height: 200,
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

        <Card sx={{ maxWidth: 300, margin: '20px' }}>
          <CardMedia
            component="img"
            sx={{
              height: 200,
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

        <Card sx={{ maxWidth: 300, margin: '20px' }}>
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


        <Card sx={{ maxWidth: 300, margin: '20px' }}>
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


        <Card sx={{ maxWidth: 300, margin: '20px' }}>
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
    </>
  );
}

export default NewArrivals;
