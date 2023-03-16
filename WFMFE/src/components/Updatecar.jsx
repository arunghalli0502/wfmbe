import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Updatecar = () => {

  let history=  useHistory();
 let {id}  = useParams();

    let [carname, setCarname]= useState("");
    let [regno, setRegno]= useState("");
    let [company, setCompany]= useState("");
    let [model, setModel]= useState("");
    let [type, setType] = useState("");
    let [climatisation, setClimatisation]= useState("");
    let [noseats, setNoseats]= useState("");
    let [color, setColor]= useState("");
    let [price, setPrice]= useState("");
    let [mileage, setMileage]= useState("");
    let [enginecc, setEnginecc]= useState("");
    let [power, setpower]= useState("");
    let [fueltype, setFueltype]= useState("");
    let [fueltankcapacity, setFueltankcapacity]= useState("");
    let [gearbox, setGearbox]= useState("");
    let [emission_sticker, setEmission_sticker] = useState("");
    let [first_reg, setFirst_reg] = useState("");
    let[merchant_ids, setMerchant_ids]= useState("")
    let[img, setImg]= useState("");
    let[imid, setImid]= useState();


    useEffect(  ()=>{
        axios.get("http://localhost:9091/car/getbyid/"+id)
        .then( (x)=>{
            console.log(x);
            setCarname(x.data.carname)
            setRegno(x.data.reg_no)
            setCompany(x.data.company)
            setModel(x.data.model)
            setType(x.data.type)
            setClimatisation(x.data.climatisation)
            setNoseats(x.data.no_seats)
            setColor(x.data.color)
            setPrice(x.data.price)
            setMileage(x.data.mileage)
            setEnginecc(x.data.engineCC)
            setpower(x.data.power)
            setFueltype(x.data.fueltype)
            setFueltankcapacity(x.data.fueltankcapacity)
            setEmission_sticker(x.data.emission_sticker)
            setFirst_reg(x.data.first_reg)
            setMerchant_ids(x.data.merchant_ids)
            setGearbox(x.data.gearbox)
            setImg(x.data.image)
            setImid(x.data.image.imid)
        }  )
    }, [] )


    function image1(e)
    {
        console.log(e.target.files);
        setImg(e.target.files[0]);
    }


    let handleupdatecar=(e)=>{
        e.preventDefault();

        alert("hadle upadte car executed")


        let updatedCar={
            car_id:id,
            reg_no:regno,
            carname: carname,
            company: company,
            model: model,
            type:type,
            climatisation:climatisation,
            no_seats: noseats,
            gearbox: gearbox,
            engineCC: enginecc,
            mileage:mileage,
            fueltankcapacity: fueltankcapacity,
            price: price,
            color: color,
            fueltype: fueltype,
            emission_sticker: emission_sticker,
            first_reg: first_reg, 
            power: power,
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
                updatedCar.sell_rent=options[i].value;
                    
            }
        }

        updatedCar= JSON.stringify(updatedCar)
        let formData= new FormData();
        formData.append("image", img)
        formData.append("car", new Blob([updatedCar], {type:'application/json'}))
        console.log(formData);


        axios(
            {
                url:"http://localhost:9091/car/update",
                method:"POST",
                headers:{'Content-Type':'multipart/form-Data'},
                data: formData,
                mode:'no-cors'
            }
        ).then(  (x)=>{ 
           console.log(x);
           history.goBack();
         } )
    }

    return ( 
        <>
             <section className='addcar-container'>
        <div className='addcar'>
        <div className='addcar-header'>
            <h1>Add car</h1>
        </div>
        <div className='addcar-form'>
            <form onSubmit={handleupdatecar}>
                <input type="text"    onChange={(e)=>{  setRegno(e.target.value)}}     value={regno}  placeholder='Enter Registartion number' required />
                <input type="text"    onChange={(e)=>{  setCarname(e.target.value)}}     value={carname}   placeholder='Enter Car Name' required />
                <input type="text"    onChange={(e)=>{  setCompany(e.target.value)}}     value={company}   placeholder='Enter Company Name' required />
                <input type="text"    onChange={(e)=>{  setType(e.target.value)}}     value={type}   placeholder='Enter Type of car' required />
                <input type="text"    onChange={(e)=>{  setClimatisation(e.target.value)}}     value={climatisation}   placeholder='enter climatisation' required />
                <input type="number"  onChange={(e)=>{  setNoseats(e.target.value)}}     value={noseats}   placeholder='Enter no of seats' required />
                <input type="number"  onChange={(e)=>{  setpower(e.target.value)}}     value={power}   placeholder='Enter power' required />
                <input type="text"    onChange={(e)=>{  setModel(e.target.value)}}     value={model}   placeholder='Enter Model name' required />
                <input type="text"    onChange={(e)=>{  setColor(e.target.value)}}     value={color}   placeholder='Enter Color' required />
                <input type="number"  onChange={(e)=>{  setEnginecc(e.target.value)}}     value={enginecc}   placeholder='Enter Engine CC ' required />
                <input type="number"  onChange={(e)=>{  setMileage(e.target.value)}}     value={mileage}   placeholder='Enter mileage' required />
                <input type="number"  onChange={(e)=>{  setFueltankcapacity(e.target.value)}}     value={fueltankcapacity}   placeholder='Enter fueltank Capacity' required />
                <input type="number"  onChange={(e)=>{  setPrice(e.target.value)}}     value={price}   placeholder='Enter price' required />
                <input type="text"    onChange={(e)=>{  setFueltype(e.target.value)}}     value={fueltype}   placeholder='Enter fuel type' required />
                <input type="text"    onChange={(e)=>{  setGearbox(e.target.value)}}     value={gearbox}   placeholder='Enter gearbox' required />
                <input type="text"    onChange={(e)=>{  setEmission_sticker(e.target.value)}}     value={emission_sticker}   placeholder='Enter emission_sticker' required />
                <input type="text"    onChange={(e)=>{  setFirst_reg(e.target.value)}}     value={first_reg}   placeholder='Enter first_reg' required />
                    <div className='addcar-option'>
                    <input type="radio" name='rentsell' value="Rent"/> Rent
                    <input type="radio" name='rentsell' value="Sell"/> Sell
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
 
export default Updatecar;