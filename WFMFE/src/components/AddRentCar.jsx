import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/addbike.css'
const AddRentCar = () => {

    let {data}=useParams();
    console.log(data);

let regno=useRef();
let companyname =useRef();
let enginecc=useRef();
let weight =useRef();
let fueltankcapacity=useRef();
let price=useRef();
let color=useRef();
let fueltype=useRef();
let model=useRef();
// let image=useRef();
let[img, setImg]= useState("");
let mileage= useRef();

function image(e)
{
    console.log(e.target.files);
        
    setImg(e.target.files[0]);
}

let handleaddbike=(e)=>{
    e.preventDefault();

    alert("hadle add bike executed")


let newBike={
    reg_no:regno.current.value,
    companyname: companyname.current.value,
    enginecc: enginecc.current.value,
    weight: weight.current.value,
    mileage:mileage.current.value,
    fueltankcapacity: fueltankcapacity.current.value,
    price: price.current.value,
    color: color.current.value,
    fueltype: fueltype.current.value,
    model: model.current.value,
    merchant_ids: data
}

    let options =document.getElementsByName("rentsell")
    for(let i=0; i<options.length; i++)
    {
        if(options[i].checked)
        {
            console.log("checking for the type value");
            console.log(options[i].value);  
            newBike.sell_rent=options[i].value;
                
        }
    }

newBike= JSON.stringify(newBike)
let formData= new FormData();
formData.append("image", img)
formData.append("bike", new Blob([newBike], {type:'application/json'}))
console.log(formData);


let data1= axios(
    {
        url:"http://localhost:9091/bike/add",
        method:"POST",
        headers:{'Content-Type':'multipart/form-Data'},
        data: formData,
    }
).then(  (x)=>{ 
   console.log(x);
 } )

}

return (
            <section className='addbike-container'>
                <div className='addbike'>
                <div className='addbike-header'>
                    <h1>Add Bike</h1>
                </div>
                <div className='addbike-form'>
                    <form onSubmit={handleaddbike}>
                        <input type="text" ref={regno}   placeholder='Enter Registartion number' required />
                        <input type="text" ref={companyname}   placeholder='Enter Company Name' required />
                        <input type="text" ref={model}   placeholder='Enter Model name' required />
                        <input type="text" ref={color}   placeholder='Enter Color' required />
                        <input type="number" ref={enginecc}   placeholder='Enter Engine CC ' required />
                        <input type="number" ref={weight}   placeholder='Enter weight' required />
                        <input type="number" ref={mileage}   placeholder='Enter mileage' required />
                        <input type="number" ref={fueltankcapacity}   placeholder='Enter fueltank Capacity' required />
                        <input type="number" ref={price}   placeholder='Enter price' required />
                        <input type="text" ref={fueltype}   placeholder='Enter fuel type' required />
                            <div className='addbike-option'>
                            <input type="radio" name='rentsell' value="Rent"/> Rent
                            <input type="radio" name='rentsell' value="Sell"/> Sell
                            </div>

                        <input type="file"  onChange={image} />
                        <input type="submit" />
                    </form>
                </div>
                </div>
            </section>

    );
}

export default AddRentCar;
