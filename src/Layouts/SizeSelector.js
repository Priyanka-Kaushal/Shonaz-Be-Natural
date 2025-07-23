import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  useTheme,
  Checkbox,
  ListItemText,
} from "@mui/material";

const SizeSelector = () => {
  const theme = useTheme();

  const [sizes, setSizes] = useState([]); 
  const [newSize, setNewSize] = useState("");
  const [showNewSizeInput, setShowNewSizeInput] = useState(false);
  const [sizeOptions, setSizeOptions] = useState(["S", "M", "L", "XL"]);

  const handleSizeChange = (event) => {
    const selected = event.target.value;

    if (selected.includes("add_new_size")) {
      setShowNewSizeInput(true);
    } else {
      setSizes(selected);
    }
  };

  const handleSaveSize = () => {
    const trimmed = newSize.trim();
    if (trimmed !== "" && !sizeOptions.includes(trimmed)) {
      setSizeOptions([...sizeOptions, trimmed]);
      setSizes((prev) => [...prev, trimmed]);
    }
    setNewSize("");
    setShowNewSizeInput(false);
  };

  const handleCancel = () => {
    setNewSize("");
    setShowNewSizeInput(false);
  };

  return (
    <Box>
      <FormControl fullWidth margin="normal">
        <InputLabel id="size-select-label" sx={{ color: "#000" }}>
          Size
        </InputLabel>
        <Select
          labelId="size-select-label"
          id="size-select"
          multiple
          value={sizes}
          onChange={handleSizeChange}
          renderValue={(selected) => selected.join(", ")}
          sx={{
            color: theme.palette.primary.dark,
          }}
        >
          {sizeOptions.map((size, sizeItem) => (
            <MenuItem key={sizeItem} value={size}>
              <Checkbox checked={sizes.includes(size)} />
              <ListItemText primary={size} />
            </MenuItem>
          ))}
          <MenuItem value="add_new_size" sx={{ fontStyle: "italic" }}>
            + Add new size
          </MenuItem>
        </Select>
      </FormControl>

      {showNewSizeInput && (
        <Box display="flex" gap={2} mt={2}>
          <TextField
            placeholder="New Size"
            value={newSize}
            onChange={(e) => setNewSize(e.target.value)}
            fullWidth
            sx={{
              input: { color: theme.palette.primary.dark },
            }}
          />
          <Button variant="contained" onClick={handleSaveSize}>
            Save
          </Button>
          <Button variant="outlined" color="error" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SizeSelector;
