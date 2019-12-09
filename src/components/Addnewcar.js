import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddCar(props){
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', 
        model: '',
        color: '',
        fuel: '',
        year: '', 
        price: ''
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
  
    const  handleNewInput = (e) => {
setCar({...car, [e.target.name]: e.target.value})
    }
    const addCar = () => {
        props.saveNewCar(car);

        handleClose();

    }
                        
   
    return(
        <div>
    <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new car
    </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            value ={car.brand}
            label="Brand"
            onChange={e => handleNewInput(e)}
            fullWidth
          />
            <TextField
            margin="dense"
            name="model"
            value ={car.model}
            label="Model"
            onChange={e => handleNewInput(e)}
            fullWidth
          />
         <TextField
            margin="dense"
            name="color"
            value ={car.color}
            label="Color"
            onChange={e => handleNewInput(e)}
            fullWidth
          /> 
          <TextField
            margin="dense"
            name="fuel"
            value ={car.fuel}
            label="Fuel"
            onChange={e => handleNewInput(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name="year"
            value ={car.year}
            label="Year"
            onChange={e => handleNewInput(e)}
            fullWidth
          />
          <TextField
            margin="dense"
            name="price"
            value ={car.price}
            label="Price"
            onChange={e => handleNewInput(e)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          
          </Button>
          <Button onClick={addCar} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
   
        </div>
    );
}
