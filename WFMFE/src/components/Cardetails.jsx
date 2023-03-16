import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillAlarmFill } from "react-icons/bs";
import axios from "axios";
const Cardetails = () => {

    console.log("bike details excuted");
    
    let[res, setRes]=useState();

  let{id}= useParams();

    useEffect( (()=>{
        let response= axios.get("http://localhost:9091/car/getbyid/"+id)
        .then( (resp)=>{
              
              setRes(resp.data)
              console.log(resp.data);
        } )
      }), [])


    return (  
        <>
            <section className='detailscontainer'>
                    <div className='header'>
                            About Car
                    </div>
                    { res &&  <div className='details-container'>
                        <div className="dcchildleft">
                            <div id='dl'>
                                <div id='icons'>
                                    <BsFillAlarmFill/>
                                </div>
                                <div id='description'>
                                {res.color}
                                </div>
                            </div>
                            <div id='dl'>
                                <div id='icons'>
                                    <BsFillAlarmFill/>
                                </div>
                                <div id='description'>
                                {res.reg_no}
                                </div>
                            </div>
                            <div id='dl'>
                                <div id='icons'>
                                    <BsFillAlarmFill/>
                                </div>
                                <div id='description'>
                                    {res.enginecc} CC
                                </div>
                            </div>
                            <div id='dl'>
                                <div id='icons'>
                                    <BsFillAlarmFill/>
                                </div>
                                <div id='description'>
                                    {res.mileage} Km/h
                                </div>
                            </div>
                            <div id='dl'>
                                <div id='icons'>
                                    <BsFillAlarmFill/>
                                </div>
                                <div id='description'>
                                    For: {res.sell_rent}
                                </div>
                            </div>
                        </div>
                        <div className="dcchildcenter">
                            <div className='dc-image'>
                                <img src={"data:image/jpeg;base64,"+res.image.imagedata} alt="image" />
                            </div>
                            <div id='dc'>
                                <div id='description1' className='name'>
                                {res.companyname} {res.model}
                                </div>
                            </div>
                        </div>
                        <div className="dcchildright">
                            <div id='dr'>
                                <div id='icons'>
                                <BsFillAlarmFill/>
                                </div>
                                <div id='description'>
                                {res.fueltankcapacity} Ltr
                                </div>
                            </div>
                            <div id='dr'>
                                <div id='icons'>
                                <BsFillAlarmFill/>
                            </div>
                                <div id='description'>
                                {res.fueltype}
                                </div>
                            </div>
                            <div id='dr'>
                                <div id='icons'>
                                <BsFillAlarmFill/>
                                </div>
                                <div id='description'>
                                {res.weight}
                                </div>
                            </div>
                            <div id='dr'>
                                <div id='icons'>
                                <BsFillAlarmFill/>
                                </div>
                                <div id='description'>
                                    {res.model}
                                </div>
                            </div>
                            <div id='dr'>
                                <div id='icons'>
                                <BsFillAlarmFill/>
                                </div>
                                <div id='description'> 
                            Rs: {res.price}
                                </div>
                            </div>
                        </div>
                    </div>}

</section>     
        </>
    );
}
 
export default Cardetails;