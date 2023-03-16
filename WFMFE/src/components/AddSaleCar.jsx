import './addSaleCar.css';
import car from '../img/car.gif'
import { useHistory, useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import axios from 'axios';
import '../components/addcar.css'
import { Modal, Button } from 'react-bootstrap';
import BikeDisplaylist from './BikeDisplaylist';
import CarDisplaylist from './BikeDisplaylist';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


const AddSaleCar = () => {


    let history=useHistory();
    let {data}= useParams();
    let[err, setErr]=useState(false);
    let carname= useRef();
    let regno= useRef();
    let company= useRef();
    let model= useRef();
    let type = useRef();
    let climatisation= useRef();
    let Noseats= useRef();
    let color= useRef();
    let price= useRef();
    let mileage= useRef();
    let enginecc= useRef();
    let power= useRef();
    let fueltype= useRef();
    let fueltankcapacity= useRef();
    let gearbox= useRef();
    let emission_sticker = useRef();
    let first_reg = useRef();
   

    let[img, setImg]= useState("");

    function image(e)
{
    console.log(e.target.files);
        
    setImg(e.target.files[0]);
}

let handleaddcar=(e)=>{
    e.preventDefault();

    // alert("hadle add Car executed")


let newCar={
    reg_no:regno.current.value,
    carname: carname.current.value,
    company: company.current.value,
    model: model.current.value,
    type:type.current.value,
    climatisation:climatisation.current.value,
    no_seats: Noseats.current.value,
    gearbox: gearbox.current.value,
    engineCC: enginecc.current.value,
    mileage:mileage.current.value,
    fueltankcapacity: fueltankcapacity.current.value,
    price: price.current.value,
    color: color.current.value,
    fueltype: fueltype.current.value,
    emission_sticker: emission_sticker.current.value,
    first_reg: first_reg.current.value, 
    power: power.current.value,
    merchant_ids: data
}

console.log("new car object craeted.......................");
    let options =document.getElementsByName("rentsell")
    for(let i=0; i<options.length; i++)
    {
        if(options[i].checked)
        {
            console.log("checking for the type value");
            console.log(options[i].value);  
            newCar.sell_rent=options[i].value;
                
        }
    }

newCar= JSON.stringify(newCar)
let formData= new FormData();
formData.append("image", img)
formData.append("car", new Blob([newCar], {type:'application/json'}))
console.log(formData);


let data1= axios(
    {
        url:"http://localhost:9091/car/add",
        method:"POST",
        headers:{'Content-Type':'multipart/form-Data'},
        data: formData,
    }
).then(  (x)=>{ 
    console.log("ten block is ecuting........");
   console.log(x);
   if(x.status===200)
   {
    // <div className="modal show" style={{ display: 'block', position: 'initial' }}>
    //   <Modal.Dialog>
    //     <Modal.Body>
    //       <p>Modal body text goes here.</p>
    //     </Modal.Body>

    //     <Modal.Footer>
    //       <Button variant="secondary">Close</Button>
    //       <Button variant="primary">Save changes</Button>
    //     </Modal.Footer>
    //   </Modal.Dialog>
    // </div>
    // history.push(`/Mdashboard${data}`)
    alert("added Successfully")
   }
   else
   {
        setErr(true);
   }
 } )

}






    return (
    
        <section className='addcar-container'>
        <div className='addcar'>
            <div className='addcar-header'>
                <h1>Add car</h1>
            </div>
            <div className='addcar-form'>
                <form onSubmit={handleaddcar}>
                    <input type="text" ref={regno}   placeholder='Enter Registartion number' required />
                    <input type="text" ref={carname}   placeholder='Enter Car Name' required />
                    <input type="text" ref={company}   placeholder='Enter Company Name' required />
                    <input type="text" ref={type}   placeholder='Enter Type of car' required />
                    <input type="text" ref={climatisation}   placeholder='enter climatisation' required />
                    <input type="number" ref={Noseats}   placeholder='Enter no of seats' required />
                    <input type="number" ref={power}   placeholder='Enter power' required />
                    <input type="text" ref={model}   placeholder='Enter Model name' required />
                    <input type="text" ref={color}   placeholder='Enter Color' required />
                    <input type="number" ref={enginecc}   placeholder='Enter Engine CC ' required />
                    <input type="number" ref={mileage}   placeholder='Enter mileage' required />
                    <input type="number" ref={fueltankcapacity}   placeholder='Enter fueltank Capacity' required />
                    <input type="number" ref={price}   placeholder='Enter price' required />
                    <input type="text" ref={fueltype}   placeholder='Enter fuel type' required />
                    <input type="text" ref={gearbox}   placeholder='Enter gearbox' required />
                    <input type="text" ref={emission_sticker}   placeholder='Enter emission_sticker' required />
                    <input type="text" ref={first_reg}   placeholder='Enter first_reg' required />
                        <div className='addcar-option'>
                        <input type="radio" name='rentsell' value="Rent"/> Rent
                        <input type="radio" name='rentsell' value="Sell"/> Sell
                        </div>

                    <input type="file"  onChange={image} />
                    <input type="submit" />
                </form>
            </div>
            {err &&
                <div className='addcar-err'>
                    <p>
                        Somthing went wrong!, Please try again.
                    </p>
                </div>
            }
        </div>
    </section>
    );
}

export default AddSaleCar;
