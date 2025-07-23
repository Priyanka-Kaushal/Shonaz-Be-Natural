import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Typography,
  IconButton,
  Modal,
} from "@mui/material";
import { Delete, CheckCircleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import BannerImageModal from "./BannerImageModal";
import LazyLoad from "react-lazyload";
import theme from "../../styles/theme";
import { useTheme } from "@emotion/react";


const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
   borderRadius: theme.shape.borderRadius,
  maxHeight: "85vh",
  overflowY: "auto",
};

const Placeholder = () => (

  <Box
    sx={{
      width: "100%",
      height: 200,
      backgroundColor: "#eee",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#999",
    }}
  >
    Loading...
  </Box>
);

const ImageViewPage = () => {
  const [banners, setBanners] = useState([]);
  const navigate = useNavigate();
  const [bannerOpen, setBannerOpen] = useState(false);
  const [WhatsNewSectionImage, setWhatsNewSection] = useState(false);

  const handleBannerOpen = () => setBannerOpen(true);
  const handleBannerClose = () => setBannerOpen(false);

  const fetchBanners = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:4000/api/home/banners", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBanners(res.data.banners || []);
    } catch (err) {
      console.error("Failed to fetch banners:", err);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleBack = () => {
    navigate("/dashboard/manageProduct");
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:4000/api/home/deleteBanner/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Banner deleted");
      fetchBanners();
    } catch (err) {
      toast.error("Failed to delete banner");
      console.error(err);
    }
  };

  const handleSelect = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.patch(
        `http://localhost:4000/api/home/select-banner/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.data.success) {
        toast.success("Banner selected!");
        fetchBanners();
      } else {
        toast.error("Failed to select banner.");
      }
    } catch (err) {
      toast.error("Failed to select banner.");
      console.error(err);
    }
  };


  const theme = useTheme();
  return (
    <Box sx={{ width: "90%", margin: "auto", mt: 8, mb: 12 }}>
      <Typography variant="h5" textAlign="center" mb={4}>
        Uploaded Banner Images & Videos
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 6 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={handleBannerOpen}
        >
          Upload Banner
        </Button>

        <Modal
          open={bannerOpen}
          onClose={handleBannerClose}
          aria-labelledby="banner-modal-title"
          aria-describedby="banner-modal-description"
        >
          <Box sx={modalStyle}>
            <BannerImageModal onClose={handleBannerClose} />
          </Box>
        </Modal>

        <Button
          onClick={handleBack}
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
        >
          Back
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {banners.map((banner, idx) => (
          <Box
            key={banner._id || idx}
            sx={{
              width: 300,
              border: "1px solid #ccc",
               borderRadius: theme.shape.borderRadius,
              overflow: "hidden",
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <LazyLoad
              height={200}
              offset={100}
              once
              placeholder={<Placeholder />}
            >
              {banner.type === "image" ? (
                <CardMedia
                  component="img"
                  image={banner.url}
                  alt={`Banner ${idx}`}
                  sx={{ width: "100%", height: 200, objectFit: "cover" }}
                  loading="lazy" 
                />
              ) : (
                <CardMedia
                  component="video"
                  src={banner.url}
                  controls
                  sx={{ width: "100%", height: 200 }}
                  preload="none"
                />
              )}
            </LazyLoad>

            {banner.selected && (
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  backgroundColor: "green",
                  color: "#fff",
                  padding: "2px 6px",
                   borderRadius: theme.shape.borderRadius,
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                Selected
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
                backgroundColor: "#f7f7f7",
              }}
            >
              <Button
                size="small"
                variant="outlined"
                disabled={banner.selected}
                onClick={() => handleSelect(banner._id)}
                startIcon={<CheckCircleOutline />}
              >
                {banner.selected ? "Selected" : "Select"}
              </Button>

              <IconButton color="error" onClick={() => handleDelete(banner._id)}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageViewPage;
