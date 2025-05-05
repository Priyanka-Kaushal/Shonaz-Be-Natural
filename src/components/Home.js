import React from "react";
import BannerImage from "../Assets/Images/BannerImage.jpg";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Button,
  Card,
  CardActions,
  Typography,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Gallery from "../collections/Gallery";
import IntroductionPage from "./IntroductionPage";

const HomePage = () => {
  const navigate = useNavigate();

  // // filter Based on the tags
  // const shopNewInProducts = products.filter((product) =>
  //   product.tags.includes("Shop New In")
  // );

  // // filter Based on the tags
  // const discoverTheNewProducts = products.filter((product) =>
  //   product.tags.includes("Shop New In")
  // );

  return (
    <>
      {/* Section One  */}
      <section className="BannerImage">
        <CardMedia
          component="img"
          sx={{
            height: "100%px",
            width: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
          image={BannerImage}
          alt="BannerImage"
          onClick={() => {
            // Redirect logic for "New Arrivals" page
            navigate("/shop/new-arrivals");
          }}
        />
      </section>

      {/* Section two of the page */}
      <section>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          SHOP NEW IN
        </Typography>

        <Box display=" flex">
          {/* Example Card for a product */}
          <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
            <CardMedia
              component="img"
              sx={{
                height: 200, // Adjust height for a better display
                objectFit: "cover",
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
              <Button
                size="small"
                variant="contained"
                color="primary"
                fullWidth
              >
                Select Option
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
            <CardMedia
              component="img"
              sx={{
                height: 200,
                objectFit: "cover",
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
              <Button
                size="small"
                variant="contained"
                color="primary"
                fullWidth
              >
                Select Option
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
            <CardMedia
              component="img"
              sx={{
                height: 200,
                objectFit: "cover",
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
              <Button
                size="small"
                variant="contained"
                color="primary"
                fullWidth
              >
                Select Option
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
            <CardMedia
              component="img"
              sx={{
                height: 200,
                objectFit: "cover",
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
              <Button
                size="small"
                variant="contained"
                color="primary"
                fullWidth
              >
                Select Option
              </Button>
            </CardActions>
          </Card>
        </Box>
      </section>

      <section className="section-gallery-products">
        <Gallery />
      </section>

      <section>
        <IntroductionPage />
      </section>

      <section>
        <CardMedia
          component="img"
          sx={{
            height: "100%px", // Adjusted height
            width: "100%",
            objectFit: "cover",
            cursor: "pointer", // Indicates clickable behavior
          }}
          image={BannerImage}
          alt="BannerImage"
          onClick={() => {
            // Redirect logic for "New Arrivals" page
            console.log("Discover the new arrivals");
          }}
        />
      </section>

      {/* Discover the new arrivals  */}

      <section>
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          DISCOVER THE NEW ARRIVALS
        </Typography>

        {/* SHOP New IN - 4 products visible  through filter the best selling product and show on the home page */}
        <Box display=" flex">
          {/* Example Card for a product */}
          <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
            <CardMedia
              component="img"
              sx={{
                height: 200, // Adjust height for a better display
                objectFit: "cover",
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
              <Button
                size="small"
                variant="contained"
                color="primary"
                fullWidth
              >
                Select Option
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
            <CardMedia
              component="img"
              sx={{
                height: 200, // Adjust height for a better display
                objectFit: "cover",
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
              <Button
                size="small"
                variant="contained"
                color="primary"
                fullWidth
              >
                Select Option
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
            <CardMedia
              component="img"
              sx={{
                height: 200, // Adjust height for a better display
                objectFit: "cover",
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
              <Button
                size="small"
                variant="contained"
                color="primary"
                fullWidth
              >
                Select Option
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
            <CardMedia
              component="img"
              sx={{
                height: 200, // Adjust height for a better display
                objectFit: "cover",
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
              <Button
                size="small"
                variant="contained"
                color="primary"
                fullWidth
              >
                Select Option
              </Button>
            </CardActions>
          </Card>
        </Box>
      </section>

      {/* About us */}
      <section>
        <Typography> About US </Typography>
      </section>

      <section>About our Company</section>
    </>
  );
};

export default HomePage;
