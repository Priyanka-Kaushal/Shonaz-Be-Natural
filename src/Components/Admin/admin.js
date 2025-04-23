import React, { useState } from "react";
import { lazy, Fragment } from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const style = {
  position: "relative",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "50%",
  maxWidth: "1500px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  mt: '70px', mb: '10px'
};
const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
};
const leftBoxStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};
const rightBoxStyle = {
  flex: 1,
  borderLeft: "2px solid #e0e0e0",
  paddingLeft: "20px",
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [size, setSize] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState(null);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file)); // Preview the image
  };


  return (
    <Fragment>
    <Box component="form" sx={style}>
      <Typography variant="h5" gutterBottom>
        Create Product
      </Typography>
      {/* Container for left and right sections */}
      <Box sx={containerStyle}>
        {/* Left Section */}
        <Box sx={leftBoxStyle}>
          <TextField
            label="Product Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="SubTitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Box>

        {/* Right Section */}
        <Box sx={rightBoxStyle}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={handleChange} label="Category">
              <MenuItem value="Shirts">Shirts</MenuItem>
              <MenuItem value="Pants">Pants</MenuItem>
              <MenuItem value="Shoes">Shoes</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Box>
      </Box>


      {/* Image Upload Section */}
      <Box sx={{ width: "100%", mt: 4 }}>
        <Typography variant="h6">Upload Product Image</Typography>
        <input type="file" onChange={handleImageUpload} />
        {image && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Image Preview:
            </Typography>
            <img
              src={image}
              alt="Product Preview"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </Box>
        )}
      </Box>
      
      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
          width: "100%",
        }}
      >
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete Product
        </Button>
        <Button variant="contained">Upload Product</Button>
      </Box>
    </Box>
    </Fragment>
  );
};
export default AddProducts;

// import ReactTable from "react-table";
// import fakedata from "../../MOCKDATA.json";



// const AddProducts = () => {
//   console.log(fakedata);
//   return <div className="table"> APP </div>
  
// };

// export default AddProducts;
// //  //  Organisation search coloumns
// //  let columns = [
// //   {
// //     columnName: "Org Create Date/Time",
// //     style: {
// //       width: "auto",
// //       cursor: "pointer",
// //     },
// //     isActionColumn: true,
// //     Cell: (cell) => {
// //       return dateFormat(cell.createdAt, "mmmm dS, yyyy, h:MM TT");
// //     },
// //     onClickHandler: this.sortByDate,
// //   },
// //   {
// //     columnName: "Full Name",
// //     style: {
// //       width: "auto",
// //     },
// //     isActionColumn: true,
// //     Cell: (cell) => {
// //       return (
// //         <div>
// //           <p>{cell.name === undefined ? "Not Available" : cell.name}</p>
// //           {/*<p>{cell.original.orgId === undefined?'Not Available': cell.original.orgId}</p>*/}
// //           {!!userinformation.user_metadata &&
// //           !!userinformation.user_metadata.role &&
// //           userinformation.user_metadata.role === "TOP_ADMIN" ? (
// //             <span onClick={this.checkAuthUser.bind(this, cell, false)}>
// //               <a style={{ color: "blue" }}>{cell.email}</a>
// //             </span>
// //           ) : (
// //             cell.email
// //           )}
// //         </div>
// //       );
// //     },
// //   },
// //   {
// //     columnName: "Company Name",
// //     style: {
// //       width: "auto",
// //     },
// //     isActionColumn: true,
// //     Cell: (cell) => {
// //       return (
// //         <div>
// //           <p>
// //             {cell.OrgName === undefined ? "Not Available" : cell.OrgName}
// //           </p>
// //           <p>
// //             {cell.dbaName === undefined
// //               ? "DBA: Not Available"
// //               : "DBA: " + cell.dbaName}
// //           </p>
// //         </div>
// //       );
// //     },
// //   },
// //   {
// //     columnName: "Parent Org Name",
// //     style: {
// //       width: "auto",
// //     },
// //     isActionColumn: true,
// //     Cell: (cell) => {
// //       return (
// //         <div>
// //           <p>
// //             {cell && cell.parentCompanyName ? cell.parentCompanyName : ""}
// //           </p>
// //           {cell && cell.parentOrgId ? <p>{cell.parentOrgId}</p> : ""}
// //         </div>
// //       );
// //     },
// //   },

// //   {
// //     columnName: "Org Role",
// //     style: {
// //       width: "auto",
// //     },
// //     isActionColumn: true,
// //     Cell: (cell) => {
// //       return cell && cell.role
// //         ? properCase(
// //             cell.role === "HELOX_USER" || cell.role === "HELOX_MOBILE_USER"
// //               ? "PURCHASER"
// //               : cell.role
// //           )
// //         : "Not Available";
// //     },
// //   },
// //   {
// //     columnName: "User Type",
// //     style: {
// //       width: "auto",
// //     },
// //     valuePath: "userType",
// //   },
// //   {
// //     columnName: "Creation Mode",
// //     style: {
// //       width: "auto",
// //     },
// //     valuePath: "entryKey",
// //   },
// //   {
// //     columnName: "Org Id",
// //     valuePath: "OrgId",
// //     style: {
// //       width: "auto",
// //     },
// //   },
// //   // {
// //   //   columnName: "new org Id",
// //   //   valuePath: "new org id",
// //   //   style: {
// //   //     width: "auto",
// //   //   },
// //   // },
// // ];
// // if (
// //   !["MERCHANT", "DEVELOPER"].includes(userinformation.user_metadata.role)
// // ) {
// //   columns.push({
// //     columnName: "Action",
// //     isActionColumn: true,
// //     style: {
// //       minWidth: "250px",
// //     },
// //     Cell: this.sendActionHtml,
// //   });
// // }
