import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";


const Updatebike = ({bike}) => {
   let history= useHistory();
let resp;
console.log(bike);
let {id}=useParams();

    let [regno, setRegno]=useState("");
    let [companyname, setCompanyname] =useState("");
    let [enginecc, setEnginecc]=useState("");
    let [weight, setWeight] =useState("");
    let [fueltankcapacity, setFueltankcapacity]=useState("");
    let [price, setPrice]=useState("");
    let [color, setColor]=useState("");
    let [fueltype, setFueltype]=useState("");
    let [model, setModel]=useState("");
    let [mileage, setMileage]=useState("");
    // let [image, setImage]=useState("");
    let[img, setImg]= useState("");
    let[merchant_ids, setMerchant_ids]= useState("")
    let[imid, setImid]= useState();



    useEffect( (()=>{
        let response= axios.get("http://localhost:9091/bike/getbyid/"+id)
        .then( (resp)=>{
            console.log(resp.data);
            setRegno(resp.data.reg_no)
            setCompanyname(resp.data.companyname)
            setEnginecc(resp.data.enginecc)
            setWeight(resp.data.weight)
            setFueltankcapacity(resp.data.fueltankcapacity)
            setPrice(resp.data.price)
            setColor(resp.data.color)
            setFueltype(resp.data.fueltype)
            setModel(resp.data.model)
            setMileage(resp.data.mileage)
            setMerchant_ids(resp.data.merchant_ids)
            setImid(resp.data.image.imid)
            console.log(resp.data.image.imid);
        } )
      }), [])

    
console.log(merchant_ids);

    function image1(e)
    {
        console.log(e.target.files);
        setImg(e.target.files[0]);        
    }
    
let handleaddbike=(e)=>{
        e.preventDefault();
    
        alert("hadle add bike executed")
    
    
    let updatedBike={
        bike_id:id,
        reg_no:regno,
        companyname: companyname,
        enginecc: enginecc,
        weight: weight,
        mileage:mileage,
        fueltankcapacity: fueltankcapacity,
        price: price,
        color: color,
        fueltype: fueltype,
        model: model,
        merchant_ids: merchant_ids,
        image:{imid:imid}
    }
    
        let options =document.getElementsByName("rentsell")
        for(let i=0; i<options.length; i++)
        {
            if(options[i].checked)
            {
                console.log("checking for the type value");
                console.log(options[i].value);  
                updatedBike.sell_rent=options[i].value;
                    
            }
        }
    
    updatedBike= JSON.stringify(updatedBike)
    let formData= new FormData();
    formData.append("image", img)
    formData.append("bike", new Blob([updatedBike], {type:'application/json'}))
    console.log(formData);
    

    let data1= axios(
        {
            url:"http://localhost:9091/bike/update",
            method:"POST",
            headers:{'Content-Type':'multipart/form-Data'},
            data: formData,
            mode:'no-cors'
        }
    ).then(  (x)=>{ 
       console.log(x);
       if(x.status===200)
       {
        history.goBack();
       }
       else if(x.status===400)
       {
        
       }
     } )
    
    }
    

    return (
        <>
        <h1>This is update details</h1>
        <section className='addbike-container'>
            <div className='addbike'>
            <div className='addbike-header'>
                <h1>Update Bike</h1>
            </div>
            <div className='addbike-form'>
                <form onSubmit={handleaddbike}>
                    <input type="text"  value={regno}  onChange={(e)=>{setRegno(e.target.value)}}   placeholder='Enter Registartion number' required />
                    <input type="text"  value={companyname}  onChange={(e)=>{setCompanyname(e.target.value)}}   placeholder='Enter Company Name' required />
                    <input type="text"  value={model}  onChange={(e)=>{setModel(e.target.value)}}   placeholder='Enter Model name' required />
                    <input type="text"  value={color}  onChange={(e)=>{setColor(e.target.value)}}   placeholder='Enter Color' required />
                    <input type="number"  value={enginecc} onChange={(e)=>{setEnginecc(e.target.value)}}   placeholder='Enter Engine CC ' required />
                    <input type="number"  value={weight} onChange={(e)=>{setWeight(e.target.value)}}   placeholder='Enter weight' required />
                    <input type="number"  value={mileage} onChange={(e)=>{setMileage(e.target.value)}}   placeholder='Enter mileage' required />
                    <input type="number"  value={fueltankcapacity} onChange={(e)=>{setFueltankcapacity(e.target.value)}}   placeholder='Enter fueltank Capacity' required />
                    <input type="number"  value={price} onChange={(e)=>{setPrice(e.target.value)}}   placeholder='Enter price' required />
                    <input type="text"    value={fueltype} onChange={(e)=>{setFueltype(e.target.value)}}   placeholder='Enter fuel type' required />
                        <div className='addbike-option'>
                        <input type="radio" name='rentsell' value="rent"/> Rent
                        <input type="radio" name='rentsell' value="sell"/> Sell
                        </div>

                    <input type="file"  onChange={image1} />
                    <input type="submit" />
                </form>
            </div>
            </div>
        </section>
        </>
        

);
}
 
export default Updatebike;