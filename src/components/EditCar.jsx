import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { updateCar } from '../carapi';
import CarDialogContent from './CarDialogContent';

export default function EditCar({ cardata, fetchCars }) {
  const [car, setCar] = useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    modelYear: '',
    price: ''
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log(cardata);
    setCar({
      brand: cardata.brand,
      model: cardata.model,
      color: cardata.color,
      fuel: cardata.fuel,
      price: cardata.price,
      modelYear: cardata.modelYear
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    updateCar(car, cardata._links.car.href)
    .then(() => fetchCars())
    
    handleClose();
  }

  const handleChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}