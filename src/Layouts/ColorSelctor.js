import React, { useState } from "react";
import {
  Typography,
  Box,
  useTheme,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
  ListItemText,
} from "@mui/material";

const ColorSelector = () => {
  const theme = useTheme();
  const [colors, setColors] = useState([]);
  const [newColor, setNewColor] = useState("");
  const [colorOptions, setColorOptions] = useState(["Red", "Blue", "Green"]);
  const [showNewColorInput, setShowNewColorInput] = useState(false);

  const handleColorChange = (event) => {
    const selectedValues = event.target.value;

    if (selectedValues.includes("add_new_color")) {
      setShowNewColorInput(true);
    } else {
      setColors(selectedValues);
    }
  };

  const handleSaveColor = () => {
    const trimmed = newColor.trim();
    if (trimmed && !colorOptions.includes(trimmed)) {
      const updatedOptions = [...colorOptions, trimmed];
      setColorOptions(updatedOptions);
      setColors((prev) => [...prev, trimmed]);
    }
    setNewColor("");
    setShowNewColorInput(false);
  };

  const handleCancel = () => {
    setNewColor("");
    setShowNewColorInput(false);
  };

  return (
    <Box sx={{ maxWidth: 400, p: 2, mb: 10 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel id="color-select-label" sx={{ color: theme.palette.primary.dark }}>
          Color
        </InputLabel>
        <Select
          labelId="color-select-label"
          id="color-select"
          multiple
          value={colors}
          onChange={handleColorChange}
          renderValue={(selected) => selected.join(", ")}
          sx={{ color: theme.palette.primary.dark }}
        >
          {colorOptions.map((color, index) => (
            <MenuItem key={index} value={color}>
              <Checkbox checked={colors.includes(color)} />
              <ListItemText primary={color} />
            </MenuItem>
          ))}
          <MenuItem value="add_new_color" sx={{ fontStyle: "italic" }}>
            + Add new color
          </MenuItem>
        </Select>
      </FormControl>

      {showNewColorInput && (
        <Box display="flex" gap={2} mt={2}>
          <TextField
            placeholder="New Color"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            fullWidth
            sx={{
              input: { color: theme.palette.primary.dark },
            }}
          />
          <Button variant="contained" onClick={handleSaveColor}>
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

export default ColorSelector;
