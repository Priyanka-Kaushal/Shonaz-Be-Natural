import React from "react";
import {
  Box,
  Typography,
  CardMedia,
  TextField,
  Button,
  Stack,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import BannerImage from "../Assets/Images/BannerImage.jpg";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";


const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(6, 4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 3),
    gap: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: theme.spacing(4, 2),
    textAlign: "center",
    gap: theme.spacing(2),
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  flex: "1 1 33%",
  height: 0,
  paddingTop: "56%", // 16:9 aspect ratio
  [theme.breakpoints.down("sm")]: {
    flex: "1 1 80%",
    paddingTop: "50%",
  },
}));

const BaseImage = styled(CardMedia)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
}));

const OverlayImage = styled(CardMedia)(({ theme }) => ({
  position: "absolute",
  top: "15%",
  left: "-20%",
  width: "60%",
  height: "70%",
  borderRadius: theme.shape.borderRadius,
  border: `3px solid ${theme.palette.background.paper}`,
  [theme.breakpoints.down("md")]: {
    top: "10%",
    left: "-15%",
    width: "65%",
    height: "65%",
  },
  [theme.breakpoints.down("sm")]: {
    top: "12%",
    left: "0",
    width: "50%",
    height: "50%",
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  flex: "1 1 40%",
  [theme.breakpoints.down("sm")]: {
    flex: "1 1 90%",
  },
}));

const ContactPage = () => {
  const navigate = useNavigate();
const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Step 2: Handle field updates
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Step 3: Submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await axios.post("http://localhost:4000/api/contact/contact-details", formData);

//       
//       navigate("/contact-page");
//     } catch (error) {
//       console.error("Error submitting contact form:", error);
//       toast.error("Failed to send message. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };

  const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";
  const API_URL = `${BASE_URL}/api/contact/contact-details`;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong.");
    }

    toast.success("Message sent to the owner successfully!");
  } catch (error) {
    console.error("Error submitting contact form:", error.message);
    alert("Failed to send message. Please try again.");
  }
};


  return (
    <Container sx={{ mb: 10 }}>
      <FlexBox component="section" sx={{ mt: 4 }}>
        <ImageContainer>
          <BaseImage component="img" src={BannerImage} alt="Primary banner" />
          <OverlayImage component="img" src={BannerImage} alt="Secondary banner" />
        </ImageContainer>

        <TextContainer>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>

          <Typography
            variant="h6"
            color="textSecondary"
            paragraph
            sx={{ lineHeight: 1.6 }}
          >
            Please check our FAQ page for any shipping, returns, or policy
            related issues. If there’s anything else you need, please use the
            form below—we’d love to hear from you!
          </Typography>
        </TextContainer>
      </FlexBox>

      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Subject"
            name="subject"
            placeholder="Subject of your message"
            value={formData.subject}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            placeholder="Write your message here…"
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            size="medium"
            disabled={loading}
            sx={{
              width: "50%",
              alignSelf: "center",
              mb: 4,
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};


export default ContactPage;
