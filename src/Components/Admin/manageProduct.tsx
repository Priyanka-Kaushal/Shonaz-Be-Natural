import {
  Box,
  TableContainer,
  Button,
  TableHead,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  Checkbox,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CreateProduct from "./createProduct.tsx";
import firstDressPic from "../../Assets/Images/weed2.jpg";

const ManageProductItems: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Dummy selection logic for now
  const rowCount = 0;
  const numSelected = 0;
  const onSelectAllClick = () => {};

  return (
    <Box sx = {{ml: 2}}>
      <Typography variant="h6" gutterBottom sx={{ mt: 10, ml: 2 }}>
        Manage Products
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 2, mt: 2, ml: 2 }}>
        <Button variant="contained" onClick={handleOpen}>
          Add New Product
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={addTocartStyle}>
          <CreateProduct />
        </Box>
      </Modal>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  color="primary"
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
                  inputProps={{ "aria-label": "select all products" }}
                />
              </TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Variant</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <img src={firstDressPic} alt="Product" width={50} height={50} />
              </TableCell>

              <TableCell>Product Name</TableCell>
              <TableCell>$99</TableCell>
              <TableCell>10</TableCell>
              <TableCell>Size M</TableCell>
              <TableCell>
                <Button variant="contained" color="error" sx={{ mr: 1 }}>
                  Delete
                </Button>
                <Button variant="contained" sx={{ mr: 1 }}>
                  Update
                </Button>
                <Button
                  variant="contained"
                  onClick={() => navigate("/product-overview")}
                >
                  Product Overview
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageProductItems;

const addTocartStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  width: "80%",
  maxWidth: "1200px",
  height: "auto",
  overflowY: "auto",
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
};
