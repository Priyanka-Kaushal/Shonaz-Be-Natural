import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import zIndex from '@mui/material/styles/zIndex';

const FilterSort: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortValue, setSortValue] = useState('');
  const [openAvailability, setOpenAvailability] = React.useState(false);
const [openSize, setOpenSize] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSortValue(event.target.value as string);
  };

  const handleClickAvailability = () => {
    setOpenAvailability((prev) => !prev);
  };
  
  const handleClickSize = () => {
    setOpenSize((prev) => !prev);
  };
  
 
  return (
    <>

      <Box sx={styles.buttonWrapper}>
        <Button sx={styles.filterButton} onClick={toggleSidebar} aria-label="Open Filters">
          <svg width="22" height="22" viewBox="0 0 18 18">
            <path d="M2 4h14M2 9h14M2 14h14" stroke="white" strokeWidth="2" />
          </svg>
        </Button>
      </Box>

      
      <Box sx={{ ...styles.sidebar, right: isOpen ? '0' : '-300px' }}>
        <Button sx={styles.closeButton} onClick={toggleSidebar}>Close</Button>
        <Typography variant="h4" gutterBottom>Filter Options</Typography>
        <Typography variant="h6">Sort by:</Typography>



        <Button>
            In Stock
        </Button>

        <FormControl fullWidth sx={{ mt: 2, zIndex: "999"}}>
          <InputLabel id="sort-select-label">Sort</InputLabel>
          <Select
            labelId="sort-select-label"
            id="sort-select"
            value={sortValue}
            label="Sort"
            onChange={handleChange}
            sx={{zIndex: "999"}} 
          >
            <MenuItem value="featured">Featured</MenuItem>
            <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="highToLow">Price: High to Low</MenuItem>
            <MenuItem value="newest">Best Selling</MenuItem>
            <MenuItem value="newest">Sale</MenuItem>
          </Select>
        </FormControl>
        
        <List
  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
  component="nav"
  aria-labelledby="Filter"
  subheader={
    <ListSubheader component="div" id="nested-list-subheader">
      Filter: 
    </ListSubheader>
  }
>

  <ListItemButton onClick={handleClickAvailability}>
    <ListItemText primary="Availability" />
    {openAvailability ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>

  <Collapse in={openAvailability} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <FormControlLabel control={<Checkbox />} label="In Stock" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 4 }}>
        <FormControlLabel control={<Checkbox />} label="Out Of Stock" />
      </ListItemButton>
    </List>
  </Collapse>

  <ListItemButton onClick={handleClickSize}>
    <ListItemText primary="Size" />
    {openSize ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>

  <Collapse in={openSize} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <FormControlLabel control={<Checkbox />} label="X" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 4 }}>
        <FormControlLabel control={<Checkbox />} label="M" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 4 }}>
        <FormControlLabel control={<Checkbox />} label="L" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 4 }}>
        <FormControlLabel control={<Checkbox />} label="XL" />
      </ListItemButton>
    </List>
  </Collapse>
</List>
       
      </Box>
    </>
  );
};

const styles = {
  buttonWrapper: {
    position: 'fixed',
    top: '10%',
    right: 0,
    zIndex: 999,
    p: '10px'
  },
  filterButton: {
    backgroundColor: 'black',
    border: 'none',
    padding: '12px',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    height: '100vh',
    width: '250px',
    backgroundColor: '#f4f4f4',
    boxShadow: '2px 0 10px rgba(0,0,0,0.2)',
    padding: '20px',
    transition: 'right 0.3s ease',
    zIndex: 1100
  },
  closeButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '6px 10px',
    cursor: 'pointer',
    marginBottom: '10px',
  }
};

export default FilterSort;
