import { useEffect, useState } from "react";
import axios from "axios";
import BannerImage from "../Assets/Images/BannerImage.jpg";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography, Modal, useTheme, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Gallery from "../collections/Gallery.js";
import IntroductionPage from "../Home/IntroductionPage.js";
import WhatsNewSection from "./whatsNewSection;.js";
import AboutUs from "./AboutUs.js";
import ProductOverview from "../layoutsOfPages/ProductOverview.tsx";
import ProductCardThumbnails from "../Home/prodThumbnailComponent.js";
import LazyLoad from "react-lazyload";
import { lazy } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [bannerUrl, setBannerUrl] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [newArrivals, setNewArrivals] = useState([]);
  const handlePreviewOpen = (product) => {
    setSelectedProduct(product);
    setPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setSelectedProduct(null);
    setPreviewOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerRes = await axios.get(
          "http://localhost:4000/api/home/selected-banner-image"
        );
        if (bannerRes.data.success && bannerRes.data.banner?.url) {
          setBannerUrl(bannerRes.data.banner.url);
        }
      } catch (err) {
        console.error("Error fetching homepage data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box sx={{ paddingTop: 0, marginTop: 0, marginBottom: "10%" }}>
        <section className="BannerImage" style={{ position: "relative" }}>
          {bannerUrl ? (
            bannerUrl.endsWith(".mp4") || bannerUrl.includes("video") ? (
              <CardMedia
                component="video"
                src={bannerUrl}
                loading="lazy"
                autoPlay
                muted
                loop
                sx={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            ) : (
              <CardMedia
                component="img"
                image={bannerUrl}
                alt="Banner"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/collection/new-arrivals")}
              />
            )
          ) : (
            <CardMedia
              component="img"
              image={BannerImage}
              alt="Default Banner"
              sx={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          )}

          <Paper
            elevation={6}
            sx={{
              p: 3,
              position: "absolute",
              zIndex: 2,
              bottom: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: "90%", sm: "70%", md: "50%" },
              bgcolor: "white",
              textAlign: "center",
            }}
          >
            <Box sx={{ color: theme.palette.primary.main }}>
              <Typography variant="h1" gutterBottom>
                <Typography
                  component="span"
                  variant="h1"
                  gutterBottom
                  sx={{ textDecoration: "underline", display: "inline", mr: 1 }}
                >
                  Shonaz
                </Typography>
                Be Natural
              </Typography>
              <Typography variant="h4" gutterBottom sx={{ mb: 5 }}>
                Where comfort meets consciousness in fashion. Tiny trends, Big
                impact.
              </Typography>

              <Link
                onClick={() => navigate("/collection")}
                variant="h6"
                sx={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.primary.dark,
                    textDecoration: "none",
                  },
                }}
              >
                What we offer
              </Link>
            </Box>
          </Paper>
        </section>

        <section>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
              textAlign: "center",
              margin: "100px 0",
              color: theme.palette.primary.main,
            }}
          >
            SHOP NEW IN
          </Typography>

          <ProductCardThumbnails products={newArrivals} />
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
              height: "100%",
              width: "100%",
              objectFit: "cover",
              cursor: "pointer",
            }}
            image={BannerImage}
            alt="DiscoverBanner"
            onClick={() => console.log("Discover the new arrivals")}
          />
        </section>

        <section>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="1px"
            mt={4}
            mb={2}
            sx={{ color: theme.palette.primary.main }}
          >
            Discover the Organic Cotton & Eco-Friendly Prints
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            maxWidth="600px"
            margin="0 auto"
            mb={4}
          >
            Clothing made with safe dyes and sustainable materials — good for
            the planet and gentle on your child's skin.
          </Typography>

          {/* <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2 }}>
            {newArrivals.map((product) => (
              <ProductCard key={product._id} product={product} onClick={() => handlePreviewOpen(product)} />
            ))}
          </Box> */}
        </section>

        <section>
          <WhatsNewSection />
        </section>

        <section>
          <AboutUs />
        </section>
      </Box>

      <Modal open={previewOpen} onClose={handlePreviewClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: theme.shape,
          }}
        >
          {selectedProduct && (
            <ProductOverview
              product={selectedProduct}
              onClose={handlePreviewClose}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default HomePage;
