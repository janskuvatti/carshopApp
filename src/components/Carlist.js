import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';

import Addcar from './Addnewcar';
import EditCar from './Editcar';

export default function Carlist() {
    const [cars, setCars] = useState([]);

    useEffect(() => fetchCars(), []);
    const fetchCars = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))

         
    }
    
    const saveNewCar = (car) => {
      fetch('https://carstockrest.herokuapp.com/cars', {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(car)
      })


      .then(res => fetchCars())
      .catch(err => console.error(err))
    
      alert("New car added");

    }
   
    
    const updateCar = (car, link) => {
      fetch(link, {
        method : 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(car)
      })


      .then(res => fetchCars())
      .catch(err => console.error(err))
      alert("Car updated");
     
      }
   
    const columns = [
        {
          Header: "Brand",
           accessor: "brand"
          }, 
          {
        Header: "Model",
        accessor: "model"
        },
        {
        Header: "Color",
        accessor: "color"
        },
        {
        Header: "Fuel",
       accessor: "fuel"
      },
      {
      Header: "Year",
      accessor: "year"
    },
      {
       Header: "Price",
      accessor: "price"
     },
    {
      sortable: false,
      filterable: false,
      width: 100,
     Cell: row => <EditCar car={row.original}  updateCar={updateCar} />
                            
                         
    },
    {
        sortable: false,
        filterable: false,
        width: 100,
       accessor: "_links.self.href",
      Cell: row => <Button variant="contained" color="secondary" size="small" onClick={() => deleteCar(row.value)}>Delete</Button>
                              
                           
   },
    ]

      const deleteCar = (link) => {
          if(window.confirm("Do you want to delete this car?")){
          console.log(link)
          fetch(link, {method:'DELETE'})
          .then(res => fetchCars())
          
         
          .catch(err => console.error(err))

          }
      }
    return(
        <div>
     <Addcar saveNewCar={saveNewCar} />  
    <ReactTable data={cars}    columns={columns} sortable={true} filterable={true} defaultPageSize={5}
    />

        </div>

    );
}
