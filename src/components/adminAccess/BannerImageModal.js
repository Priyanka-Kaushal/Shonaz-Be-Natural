import React, { useState } from "react";
import { Box, Button, Typography, Input } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BannerImageModal = ({ onClose }) => {
  const [bannerFile, setBannerFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setBannerFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!bannerFile) {
      toast.error("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("banner", bannerFile);

    try {
      setUploading(true);
      const token = localStorage.getItem("token");

      const res = await axios.post("http://localhost:4000/api/home/upload-banner", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      const imageUrl = res.data?.imageUrl;

      toast.success("Banner uploaded successfully!");
      navigate("/dashboard/bannerview", { state: { imageUrl } });

      if (onClose) onClose();
    } catch (err) {
      console.error("Banner upload failed:", err);
      toast.error("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6">Upload Banner Image</Typography>
      <Input type="file" onChange={handleFileChange} />
      <Button variant="contained" onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </Button>
    </Box>
  );
};

export default BannerImageModal;
