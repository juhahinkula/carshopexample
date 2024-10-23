import { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import AddCar from './AddCar';
import EditCar from './EditCar';
import { fetchCars, deleteCar } from '../carapi';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function Carlist() {
  const [cars, setCars] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    fetchCars()
    .then(data => setCars(data._embedded.cars));
  }

  const handleDelete = (url) => {
    if (window.confirm("Are your sure?")) {
      deleteCar(url)
      .then(() => {
        setOpen(true); 
        getCars();
      })
    }
  }

  const [columnDefs] = useState([
    { field: 'brand', sortable: true, filter: true, width: 180 },
    { field: 'model', sortable: true, filter: true, width: 180 },
    { field: 'color', sortable: true, filter: true, width: 150 },
    { field: 'fuel', sortable: true, filter: true, width: 100 },
    { field: 'modelYear', sortable: true, filter: true, width: 100 },
    { field: 'price', sortable: true, filter: true, width: 120 },
    {
      cellRenderer: params => <EditCar cardata={params.data} fetchCars={getCars} />,
      width: 120
    },
    {
      cellRenderer: params => 
        <Button color="error" size="small" onClick={() => handleDelete(params.data._links.car.href)}>
          Delete
        </Button>,
      width: 120
    },
  ]);
 
  return(
    <>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <AddCar fetchCars={getCars} />
      </Stack>
      <div className='ag-theme-material' style={{ width: '90%', height: 600 }}>
        <AgGridReact 
          rowData={cars}
          columnDefs={columnDefs}
          pagination={true}
          paginationAutoPageSize={true}
          suppressCellFocus={true}
        />
      </div>
      <Snackbar 
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Car deleted succesfully"
      />
    </>
  );
}

export default Carlist;