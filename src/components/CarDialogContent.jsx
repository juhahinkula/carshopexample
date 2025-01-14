import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';

export default function CarDialogContent({ car, handleChange }) {
  return (
    <DialogContent>
      <TextField
        margin="dense"
        label="Brand"
        name="brand"
        value={car.brand}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Model"
        name="model"
        value={car.model}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Color"
        name="color"
        value={car.color}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Fuel"
        name="fuel"
        value={car.fuel}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Year"
        name="modelYear"
        value={car.modelYear}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Price"
        name="price"
        value={car.price}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
    </DialogContent>
  );
}