import {
    Typography,
    Box,
    Button,
    TableRow,
    Table,
    TableContainer,
    TableCell,
    TableBody,
    Select,
    MenuItem,
  } from "@mui/material";
  import React, { useState } from "react";
  import firstDressPic from "../Assets/Images/weed2.jpg";
  import Divider from '@mui/material/Divider';

  const CartPage: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
  
    const handleQuantityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setQuantity(event.target.value as number);
    };
  
    return (
      <>
        <Box sx={{ p: 3, textAlign:"center"}}>
          <Typography variant="h4" gutterBottom sx = {{ mt: "20px"}}>
            Your cart total is $82.00
          </Typography>
          <Typography variant="h6" gutterBottom>
            FREE SHIPPING AND RETURN
          </Typography>
          <Button variant="contained" color="primary">
            CheckOut
          </Button>
        </Box>
        
        <Divider />
        <Box sx={{ p: 3 }}>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={8}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      {/* Product Image */}
                      <img
                        src={firstDressPic}
                        alt="Product"
                        width={100}
                        height={100}
                        style={{ objectFit: "cover", borderRadius: 8 }}
                      />
  
                      {/* Product Details */}
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Product Name
                        </Typography>
                        <Typography variant="body2">$99</Typography>
                        <Typography variant="body2">Order today</Typography>
                        <Typography variant="body2">Size: M</Typography>
                        <Typography variant="body2">Delivery by Dec 23</Typography>
                        <Typography variant="body2" color="green">
                          Only stock available
                        </Typography>
                      </Box>
  
                      {/* Quantity Selector */}
                      <Select
                        value={quantity}
                        onChange={handleQuantityChange}
                        size="small"
                        sx={{ width: 70 }}
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <MenuItem key={qty} value={qty}>
                            {qty}
                          </MenuItem>
                        ))}
                      </Select>
  
                      {/* Remove Button */}
                      <Button variant="contained" color="error">
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        
        <Box sx = {{ml: "80px"}}>
            <Typography>
            Subtotal $82.00
            </Typography>
            <Typography>Shipping Free</Typography>
            <Typography> VAT $8.00
            </Typography>
            <Divider sx={{ width: '50%', margin: '10px auto'}}/>
            <Typography> Total $90.00</Typography>

            <Button variant="contained" color="primary">
            CheckOut
          </Button>
        </Box>
      </>
    );
  };
  
  export default CartPage;
  