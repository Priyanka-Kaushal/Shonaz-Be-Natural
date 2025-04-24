import React from "react";
import { Box, Input, Modal } from "@mui/material";
import ModalClose from '@mui/joy/ModalClose';
// import { useMediaQuery } from "@mui/material";


const style = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "100%",
  maxWidth: "1500px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  flexDirection: "column", 
};

const SearchPage = ({ open, handleClose }) => {
  const [searchProduct, setSearchProduct] = React.useState("");
  // const isMobile = useMediaQuery("(max-width: 600px)");

  const handleOnSearch = (event) => {
    setSearchProduct(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <ModalClose
            onClick={handleClose}
            variant="plain"
            sx={{
              mr: "20%",
              border: "none",
              padding: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          />
        <Input
          type="text"
          placeholder="Search on store"
          value={searchProduct}
          onChange={handleOnSearch}
          fullWidth
          sx={{
            maxWidth: "600px", 
            padding: "8px", 
            border: "1px solid #ccc", 
            borderRadius: "4px",
            "@media (max-width: 600px)": {
              gap: 2,
              height: "auto",
              padding: "10px 0",
            }, 
          }}
        />
      </Box>
    </Modal>
  );
};

export default SearchPage;
